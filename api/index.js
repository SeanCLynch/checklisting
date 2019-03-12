require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.API_PORT;

const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let cors = require('cors');
app.use(cors());

let bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database Config ------------------------------------------

const nano = require('nano')('http://localhost:5984');
const db = nano.use('checklists');
async function abc() {
  const doc_list = await db.list({include_docs: true});
  const checklists = doc_list.rows.map((doc) => {
    return doc;
  });
  console.log(doc_list, checklists);
}
// abc()

// Routes -------------------------------------------------

app.get('/', async (req, res) => {
  res.render('home');
});

// Test route.
app.get('/api/ping', async (req, res) => {
  res.send('Pong!');
});

// Create a new list.
app.post('/api/list', async (req, res) => {
  console.log(req.body);

  let raw_list = {
    title: req.body.title,
    Items: req.body.items
  };

  let new_list;

  try {
    new_list = await models.List.create(raw_list, {
      include: [ models.Item ]
    });
    res.json(new_list.dataValues);
  } catch (err) {
    console.log("ERROR", err);
    res.json(err);
  }
});

// TODO: Export a list. NPM install node-latex (and read README).
app.get('/api/list/export/:id', async (req, res) => {
  console.log("EXPORTING");

  // Gather models.
  let list = await List.findById(req.params.id);
  let items = await List.findById(req.params.id).getItems(req.body.items);

  // Create input.tex using list and items objects.
  let tex_filename = `/tex/{list.id}.tex`;
  let tex_stream = fs.createWriteStream(tex_filename); // TODO:  appending flag?
  tex_stream.write('Hello, ');
  tex_stream.write('World!');
  tex_stream.end();

  // Create output writeStream.
  let pdf_filename = `/pdf/{list.id}.pdf`;
  let pdf_stream = fs.createWriteStream(pdf_stream);

  // Apply node-latex from tex readStream to output writeStream.
  let tex_file = fs.createReadStream(tex_filename);
  let output = latex(tex_file);
  output.pipe(pdf_stream);
  output.on('error', (err) => console.error(err));
  pdf_stream.end();

  // Send output .pdf to user via res.sendFile.
  let file_options = {
    root: path.join( __dirname + '/public/')
  };
  res.sendFile(pdf_filename, file_options, (err) => {
    if (err) console.log(err);
  });
});

// Get all lists.
app.get('/api/lists', async (req, res) => {
  try {
    const doc_list = await db.list({include_docs: true});
    const checklists = doc_list.rows.map((doc) => {
      return doc.doc;
    });
    // console.log("GET /api/lists", checklists);
    res.json(checklists);
  } catch (err) {
    console.error(err);
  }
});

app.get('/api/samples', async (req, res) => {
  try {
	const security = await db.get('545b5526a411c17c8a7431dff00036e1');
	const childbirth = await db.get('545b5526a411c17c8a7431dff000630b');
	const accessibility = await db.get('545b5526a411c17c8a7431dff000714e');
	let checklists = [security, childbirth, accessibility];
	res.json(checklists);
  } catch (err) {
	console.error(err);
  }
});

// Get a list and its items.
app.get('/api/list/:id', async (req, res) => {
  console.log("GET /list/" + req.params.id);
  const checklist = await db.get(req.params.id);
  res.json(checklist);

  // let list = await models.List.findById(req.params.id);
  // let items = await list.getItems();
  // res.json([list, items]);
});

// Update a list and its items.
app.put('/api/list/:id', async (req, res) => {
  console.log("UPDATE /list/" + req.params.id);
  try {
    let list = await models.List.findById(req.params.id);
    let updated_list = await list.update(req.body);
    let updated_items = await updated_list.setItems(req.body.items);
    // TODO: Update all items for the list. Promise.all or something.
  } catch (err) {
    console.log(err);
  }

  res.json({'msg': 'updated!'});
});

// Delete a list and its items!
app.delete('/api/list/:id', async (req, res) => {
  console.log("DELETE /list/" + req.params.id);
  let list = await models.List.findById(req.params.id);
  list.destroy()
  .then((data) => {
    res.json({'msg': 'deleted!'});
  })
  .catch((error) => {
    console.error(error);
    res.json({'msg': 'error!'});
  })

});


// Start webserver ---------------------------------------------

app.listen(port, () => console.log(`Listening on ${port}!`));

module.exports =  app;

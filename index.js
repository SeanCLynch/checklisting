require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.API_PORT;

const fs = require('fs');
const path = require('path');

// Logging Config ------------------------------------------

const morgan = require('morgan');
app.use(morgan(':status :method :url - :response-time ms'));

// View Config ---------------------------------------------

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Request Config -------------------------------------------

let cors = require('cors');
app.use(cors());

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Database Config ------------------------------------------

const nano = require('nano')(process.env.DB_URL);
const db = nano.use(process.env.DB_NAME);

// Routes -------------------------------------------------

// VIEWS

app.get('/', async (req, res) => {
  res.render('home');
});

app.get('/lists', async (req, res) => {
  let checklists = await getLists();	
  res.render('lists', {
    "checklists": checklists
  });
});

app.get('/login', async (req, res) => {
  res.render('login');
});

app.get('/signup', async (req, res) => {
  res.render('signup');
});

app.get('/:username', async (req, res) => {
  res.render('dashboard', {
    "user": req.params.username
  });
});

app.get('/:username/:listname', async (req, res) => {
  let checklist = await getUserList(req.params.username, req.params.listname);
  res.render('list', {
    "user": req.params.username,
    "checklist": checklist
  });
});


// MISC

// Test route, health checks and such.
app.get('/api/ping', async (req, res) => {
  res.send('Pong!');
});

// API

app.post('/api/user', async (req, res) => {
  let user = {
    "type": "user",
    "username": req.body.username,
    "password": req.body.password
  };

  let u = await db.insert(user);

  res.redirect(`/${req.body.username}`);
});

// TODO: Read/get user.
app.post('/api/user/:id', async (req, res) => {
  res.send('read/get user');
});

// TODO: Update user.
app.put('/api/user/:id', async (req, res) => {
  res.send('update user');
});

// TODO: Delete user. 
app.delete('/api/user/:id', async (req, res) => {
  res.send('delete user');
});


// TODO: Create list.
app.post('/api/list', async (req, res) => {
  res.send('create list');
});

// Read/get list.
app.get('/api/list/:id', async (req, res) => {
  console.log("GET /list/" + req.params.id);
  const checklist = await db.get(req.params.id);
  res.json(checklist);
});

// TODO: Update list.
app.put('/api/list/:id', async (req, res) => {
  res.send('update list');
});

// TODO: Delete list. 
app.delete('/api/list/:id', async (req, res) => {
  res.send('delete list');
});

// TODO: Export list.
// Check out node-latex.
app.get('/api/list/:id/export', async (req, res) => {
  console.log('exporting list');

  // Gather models.
  let list = await List.findById(req.params.id);
  let items = await List.findById(req.params.id).getItems(req.body.items);

  // Create input.tex using list and items objects.
  let tex_filename = `/tex/{list.id}.tex`;
  let tex_stream = fs.createWriteStream(tex_filename); // appending flag?
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

app.get('/api/stats', async (req, res) => {
  res.send('stats');
});

app.get('/api/pricing', async (req, res) => {
  res.send('pricing interest');
});

// API -------------------------------------------------------------

// Get all lists.
async function getLists() {
  try {
    let selector = {
      "selector": {
        "type": { "$eq": "list" }
      }
    };

    let checklists = await db.find(selector);

    return checklists.docs;

  } catch (err) {
    console.error(err);
  }
};

// Get a specific user's list.
async function getUserList(user, list) {
  try {
    let selector = {
      "selector": {
        "owner": { "$eq": user },
        "title": { "$eq": list }
      }
    };

    let checklist = await db.find(selector);

    return checklist.docs[0];

  } catch (err) {
    console.error(err);
  }
}

// Start webserver ---------------------------------------------

app.listen(port, () => console.log(`Listening on ${port}!`));

module.exports = app;

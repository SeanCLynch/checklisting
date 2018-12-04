const express = require('express');
const app = express();
const port = 4000;

const fs = require('fs');
const path = require('path');

let cors = require('cors');
app.use(cors());

let bodyParser = require('body-parser');
app.use(bodyParser.json());

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: path.resolve(__dirname, 'test.db')
});

// Stripe Config ------------------------------------------

const stripe = require('stripe')(process.env.STRIPE_KEY);

// Models -------------------------------------------------

const List = sequelize.define('list', {
  title: {
    type: Sequelize.STRING
  }
});

const Item = sequelize.define('item', {
  description: {
    type: Sequelize.STRING
  }
});

List.hasMany(Item);
Item.belongsTo(List);


// Routes -------------------------------------------------

// Test route.
app.get('/ping', async (req, res) => {
  res.send('Pong!');
});

// Create a new list.
app.post('/list', async (req, res) => {
  console.log(req.body);
  let raw_list = {
    title: req.body.title
  };
  let new_list = await List.create(raw_list);
  res.json(new_list.dataValues);
});

// TODO: Export a list. NPM install node-latex (and read README).
app.get('/list/export/:id', async (req, res) => {

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
app.get('/lists', async (req, res) => {
  let lists = await List.all();
  res.json(lists);
});

// Get a list and its items.
app.get('/list/:id', async (req, res) => {
  let list = await List.findById(req.params.id);
  let items = [] // await List.findById(req.params.id).getItems(req.body.items);
  res.json([list, items]);
});

// Update a list and its items.
app.put('/list/:id', async (req, res) => {
  let updated_list = await List.findById(req.params.id).update(req.body.list);
  let updated_items = await List.findById(req.params.id).setItems(req.body.items);
  res.json({'msg': 'updated!'});
});

// Delete a list and its items!
app.delete('/list/:id', async (req, res) => {
  List.findById(req.params.id).destroy();
  res.json({'msg': 'deleted!'});
});


// Start webserver ---------------------------------------------

app.listen(port, () => console.log(`Listening on ${port}!`));

module.exports =  app;

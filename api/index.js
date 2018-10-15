const express = require('express')
const app = express()
const port = 4000

let cors = require('cors');
app.use(cors());

let bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path')

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
})

const List = sequelize.define('list', {
  title: {
    type: Sequelize.STRING
  }
});

app.get('/ping', async (req, res) => {
  lists = await List.findOne();
  res.send('Pong!');
})

app.post('/list', async (req, res) => {
  let new_list = await List.create({
    title: req.body.title
  });
  res.json(new_list.dataValues);
});

app.get('/list/export/:id', async (req, res) => {
  res.send('EXPORT List');
});

app.get('/lists', async (req, res) => {
  let lists = await List.all();
  res.json(lists);
});

app.get('/list/:id', async (req, res) => {
  let list = await List.findById(req.params.id);
  res.json(list);
});

app.put('/list/:id', async (req, res) => {
  res.send('UPDATE List');
});

app.delete('/list/:id', async (req, res) => {
  res.send('DELETE List');
});

app.listen(port, () => console.log(`Listening on ${port}!`))

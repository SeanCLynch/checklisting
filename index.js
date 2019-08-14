require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.API_PORT;

const fs = require('fs');
const path = require('path');

// Logging Config ----------------------------------------------------------------------------------

const morgan = require('morgan');
app.use(morgan(':status :method :url - :response-time ms'));

// View Config -------------------------------------------------------------------------------------

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Request Config ----------------------------------------------------------------------------------

let cors = require('cors');
app.use(cors());

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Database Config ---------------------------------------------------------------------------------

const nano = require('nano')(process.env.DB_URL);
const db = nano.use(process.env.DB_NAME);

// Crypto Config -----------------------------------------------------------------------------------

let bcrypt = require('bcryptjs');

// Session Config ----------------------------------------------------------------------------------

let cookieSession = require('cookie-session');
app.use(cookieSession({
  "name": "checklistingSession",
  "secret": "checkmate"
}));

// Routes ------------------------------------------------------------------------------------------

// A) ROUTES FOR WEBAPP ----------------------------------------------------------------------------

// Renders homepage.
app.get('/', async (req, res) => {
  let stats = await getStats();
  res.render('home', {
    "stats": stats,
    "user": req.session.user
  });
});

// Renders list of all checklists.
// TODO: Only render lists marked `sample`.
app.get('/lists', async (req, res) => {
  let checklists = await getLists();	
  res.render('lists', {
    "checklists": checklists,
    "user": req.session.user
  });
});

// Renders login screen.
app.get('/login', async (req, res) => {
  if (req.session.user) {
    res.redirect(`/${req.session.user}`);
  } else {
    res.render('login');
  }
});

// Renders signup screen.
app.get('/signup', async (req, res) => {
  if (req.session.user) {
    res.redirect(`/${req.session.user}`);
  } else {
    res.render('signup');
  }
});

// Redirect to, and then render homepage.
app.get('/api/logout', async (req, res) => {
  req.session = null;
  res.redirect('/');
});

// Render thankyou screen.
app.get('/interest', async (req, res) => {
  let query_type = req.query.type;

  let analytics = await getAnalytics();
  analytics[query_type]++;
  let updated = await updateAnalytics(analytics);

  res.render('thankyou');
});


app.post('/stripe', async (req, res) => {
  const event_json = JSON.parse(req.body);
  console.log(event_json);
  res.send(200);
});

// Render user's dashboard/homepage.
app.get('/:username', async (req, res) => {
  res.render('dashboard', {
    "username": req.params.username,
    "user": req.session.user
  });
});

// Renders a user's list.
app.get('/:username/:listname', async (req, res) => {
  let checklist = await getUserList(req.params.username, req.params.listname);
  res.render('list', {
    "username": req.params.username,
    "checklist": checklist,
    "user": req.session.user
  });
});

// B) ROUTES FOR API -------------------------------------------------------------------------------

// GET /PING 
// Test route, health checks and such.
app.get('/api/ping', async (req, res) => {
  res.send('Pong!');
});



// POST /LOGIN 
// Login user.
app.post('/api/login', async (req, res) => {

  // Check password.
  let pw = req.body.password;
  let hashed_pw = await getUser(req.body.username);
  hashed_pw = hashed_pw.password;
  let correct_pw = bcrypt.compareSync(pw, hashed_pw);

  // Update user session.
  req.session.user = req.body.username;

  // Redirect as appropriate.
  if (correct_pw) {
    res.redirect(`/${req.body.username}`);
  } else {
    red.redirect('/');
  }
});



// POST /USER 
// Create a new user. 
app.post('/api/user', async (req, res) => {

  // Hash & Salt PW
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);

  // Create user doc.
  let user = {
    "type": "user",
    "username": req.body.username,
    "password": hash
  };

  // Update user session.
  req.session.user = req.body.username;

  // Insert it & redirect to user's dashboard.
  await db.insert(user);
  res.redirect(`/${req.body.username}`);
});

// GET /USER/:id
// TODO: Get user.
app.get('/api/user/:id', async (req, res) => {
  res.send('read/get user');
});

// PUT /USER/:id
// TODO: Update user.
app.put('/api/user/:id', async (req, res) => {
  res.send('update user');
});

// DELETE /USER/:id
// TODO: Delete user, only if you are that user.
app.delete('/api/user/:id', async (req, res) => {
  res.send('delete user');
});



// POST /LIST
// TODO: Create list.
app.post('/api/list', async (req, res) => {
  res.send('create list');
});

// GET /LIST/:id
// Read/get list.
app.get('/api/list/:id', async (req, res) => {
  console.log("GET /list/" + req.params.id);
  const checklist = await db.get(req.params.id);
  res.json(checklist);
});

// PUT /LIST/:id
// TODO: Update list.
app.put('/api/list/:id', async (req, res) => {
  res.send('update list');
});

// DELETE /LIST/:id
// TODO: Delete list, only if you are that lists owner.
app.delete('/api/list/:id', async (req, res) => {
  res.send('delete list');
});

// GET /LIST/:id/EXPORT
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

// Model Functions ---------------------------------------------------------------------------------

// A) APP DIAGNOSTICS & RUNNING STATS

// Get live stats on #users & #lists for home page. 
async function getStats() {
  try {
    let select_users = {
      "selector": {
        "type": { "$eq": "user" }
      }
    };

    let users = await db.find(select_users);
    let user_count = users.docs.length;

    let select_lists = {
      "selector": {
        "type": { "$eq": "list" }
      }
    };

    let lists = await db.find(select_lists);
    let list_count = lists.docs.length;

    return {
      "user_count": user_count,
      "list_count": list_count
    }

  } catch (err) {
    console.error(err);
  }
};

// Used internally for measuring interest levels in a series of products.
async function getAnalytics() {
  try {
    let selector = {
      "selector": {
        "type": { "$eq": "analytics" }
      }
    };

    let analytics = await db.find(selector);

    return analytics.docs[0];
  } catch (err) {
    console.error(err);
  }
};

// Used internally for measuring interest levels in a series of products.
async function updateAnalytics(a) {
  try {
    let resp = await db.insert(a);
    return resp.ok;
  } catch (err) {
    console.error(err);
  }
};

// B) LISTS

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

// C) USER

// Get a user.
async function getUser(username) {
  try {
    let selector = {
      "selector": {
        "type": "user",
        "username": { "$eq": username }
      }
    };

    let user = await db.find(selector);

    return user.docs[0];
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
};

async function createUser(username, password) {
  try {
    let req_opts = {
      "db": "_users",
      "method": "PUT",
      "content_type": "json",
      "path": `org.couchdb.user:${username}`,
      "body": {"name": username, "password": password, "roles": [], "type": "user"}
    };
    
    let resp = await nano.request(req_opts);
    return resp.ok;
  } catch (err) {
    console.error(err);
  }
};

async function createUserSession() {
  try {
    let req_opts = {
      "db": "_session",
      "method": "POST",
      "content_type": "json",
      "body": {"name": "jan", "password": "apple"}
    };
    
    let resp = await nano.request(req_opts);
    return resp.ok;
  } catch (err) {
    console.error(err);
  }
};

// Start webserver ---------------------------------------------------------------------------------

app.listen(port, () => console.log(`Listening on ${port}!`));

module.exports = app;

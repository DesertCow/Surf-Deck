const express = require('express');
const session = require('express-session')
const routes = require('./controllers');
const sequelize = require('./config/connection');
// const seedAll = require('./seeds/index');
const { init } = require('./models/surfboard');
// const inquirer = require('inquirer');
const { config } = require('dotenv');
const exphbs = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
  cookie: {
    // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
    maxAge: 3600,
    // httpOnly tells express- session to only store session cookies when the protocol being used to connect to the server is HTTP.
    httpOnly: true,
    // secure tells express- session to only initialize session cookies when the protocol being used is HTTPS.Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
    secure: false,
    // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

// Enable Routes
app.use(routes);


//!=========================== Main Functions ==========================


async function startLocalServer() {

  // Enable connection to Remote DB and Start Local server for API to connect

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`\n\x1b[42m  ~~~ Local Server Start Success! ~~~  \x1b[0m`);
      console.log(`\x1b[45m    http://localhost:${PORT}   \x1b[0m`);

    });
  });
}

//==========================Handlebar Partials Functions ==============//

// app.post('/api/surfboards/', (req, res) => {


// })




//!========================= Init =========================



//!========================= Main =========================

startLocalServer();




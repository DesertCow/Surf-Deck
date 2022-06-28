const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/index');
// const { init } = require('./models/Category');
const inquirer = require('inquirer');
const { config } = require('dotenv');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable Routes
app.use(routes);


//!=========================== Main Functions ==========================


async function startLocalServer() {

  // Enable connection to Remote DB and Start Local server for API to connect

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`\n\x1b[42m  ~~~ Local Server Start Success! ~~~  \x1b[0m`);
      console.log(`\x1b[45m    http://localhost:${PORT}/api/   \x1b[0m`);
      //TODO Add print out of API commands/paths

    });
  });
}






//!========================= Init =========================



//!========================= Main =========================

startLocalServer();


//!========================= EOF =========================
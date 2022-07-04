//
//
// Boilder Plate ENV and Connection Setup

require('dotenv').config();

const { config } = require('dotenv');
const Sequelize = require('sequelize');

console.log("DB URL: " + process.env.CLEARDB_DATABASE_URL);

const sequelize = process.env.CLEARDB_DATABASE_URL
  ? new Sequelize(process.env.CLEARDB_DATABASE_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: DB_HOST,
    port: DB_HOSTPORT,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;

//!========================= EOF =========================
const seedSurfboard = require('./surfboard-seeds');
const seedLocation = require('./location-seeds')
const seedUser = require('./user-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedLocation();
  console.log('\n----- LOCATION SEEDED -----\n');
  await seedSurfboard();
  console.log('\n----- SURFBOARD SEEDED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');




  process.exit(0);
};

seedAll();
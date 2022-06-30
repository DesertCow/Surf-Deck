const seedSurfboard = require('./surboard-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedSurfboard();
  console.log('\n----- SURFBOARD SEEDED -----\n');



  process.exit(0);
};

seedAll();
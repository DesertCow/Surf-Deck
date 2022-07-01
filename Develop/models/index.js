const Surfboard = require('./surfboard');
const Location = require('./location')

Surfboard.belongsTo(Location, {
  foreignKey: 'location_id'
})

Location.hasMany(Surfboard, {
  foreignKey: 'location_id'
})

module.exports = { Surfboard, Location }
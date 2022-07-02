const Surfboard = require('./surfboard');
const Location = require('./location')
const User = require('./user')

Surfboard.belongsTo(Location, {
  foreignKey: 'location_id'
})

Location.hasMany(Surfboard, {
  foreignKey: 'location_id'
})

module.exports = { Surfboard, Location, User }
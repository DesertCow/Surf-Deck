const { Location } = require('../models')

const locationData = [
  {
    city: 'Huntington Beach',
  },
  {
    city: 'Newport Beach',
  },
  {
    city: 'Long Beach',
  },
]

const seedLocation = () => Location.bulkCreate(locationData)

module.exports = seedLocation
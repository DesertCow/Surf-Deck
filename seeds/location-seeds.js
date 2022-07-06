const { Location } = require('../models')

const locationData = [
  {
    city: 'Huntington Beach',
    address: '300 Pacific Coast Hwy, Huntington Beach, CA 92648',
    phonenumber: '949-855-6654',
    hours: '8am - 6pm',
    img: 'Huntington_Beach_1.jpeg',
  },
  {
    city: 'Newport Beach',
    address: '408 31st St, Newport Beach, CA 92663',
    phonenumber: '949-722-5848',
    hours: '8am-6pm',
    img: 'Newport_Location_Outside.jpg',
  },
  {
    city: 'Long Beach',
    address: '2300 E Ocean Blvd, Long Beach, CA 90803',
    phonenumber: '949-785-9875',
    hours: '7am-6pm',
    img: 'Long_Beach_1.jpg',
  },
]

const seedLocation = () => Location.bulkCreate(locationData)

module.exports = seedLocation
const { Location } = require('../models')

const locationData = [
  {
    city: 'Huntington Beach',
    address: '12345 fakeaddress ',
    phonenumber: '111-111-1111',
    hours: '12am - 9pm',
    img: '1001-surfboard.png',
  },
  {
    city: 'Newport Beach',
    address: '1337 real street ave.',
    phonenumber: '222-222-2222',
    hours: '4pm-5pm',
    img: 'Huntington_beach_1.jpg',
  },
  {
    city: 'Long Beach',
    address: '80085 very real st.',
    phonenumber: '333-333-3333',
    hours: '2am-11pm',
    img: 'surfboard_icon.png',
  },
]

const seedLocation = () => Location.bulkCreate(locationData)

module.exports = seedLocation
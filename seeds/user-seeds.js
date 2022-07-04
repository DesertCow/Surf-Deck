const { User } = require('../models')

const userData = [
  {
    email: 'fakeemail@fake.com',
    name: 'fake',
    password: 'verysecurepassword',
  },
  {
    email: 'jerry@fake.com',
    name: 'jerry',
    password: 'jerrypassword',
  },
  {
    email: 'frank@fake.com',
    name: 'frank',
    password: 'frankpassword',
  },
  {
    email: 'sally@fake.com',
    name: 'sally',
    password: 'sallypassword',
  },
  {
    email: 'erin@fake.com',
    name: 'erin',
    password: 'erinpassword',
  },
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser
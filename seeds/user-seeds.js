const { User } = require('../models')

const userData = [
  {
    email: 'test@test.com',
    name: 'Test User 1',
    password: 'test',
  },
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser
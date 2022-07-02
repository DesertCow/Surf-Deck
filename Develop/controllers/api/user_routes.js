const router = require('express').Router();
const User = require('../../models/user')


// the 'api/users/

//=========================== User Data View ==========================//

router.get('/', (req, res) => {
  User.findAll()

    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

//=========================== User Data Post ==========================//
router.post('/signup', (req, res) => {
  console.info(`${req.method} request received to create user`)
  //Example request body
  // {
  //   "email": "fake@fakeemail.com",
  //   "name": 'fake'
  //   "password": "fakepassword"
  // }

  User.create(req.body)
    .then((user) => {
      console.log(user)
      res.status(200).json(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
})

module.exports = router
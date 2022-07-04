const router = require('express').Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;


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

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // returns hash
      req.body.password = hash;

      User.create(req.body)
        .then((user) => {
          console.log(user)
          res.status(200).json(user)
        })
        .catch((err) => {
          console.log(err)
          res.status(400).json(err)
        })

    });
  });
})

//=========================== Login/Auth ==========================//
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router
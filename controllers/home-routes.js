const router = require('express').Router();
const Surfboard = require('../models/surfboard')
const Location = require('../models/location')
const User = require('../models/user')

//View all information from surfboard table
router.get('/', (req, res) => {
  Surfboard.findAll()

  res.render('home', {
  })


})

router.get('/inventory', async (req, res) => {

  console.log("/inventory");

  try {
    const surfboardDB = await Surfboard.findAll();

    const surfboards = surfboardDB.map((surfboard) =>
      surfboard.get({ plain: true })
    );

    res.render('inventory', { surfboards });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});


router.get('/login', (req, res) => {

  console.log("/login");

  res.render('login', {

  })

})

router.get('/signup', (req, res) => {

  console.log("/signup");

  res.render('signup', {

  })

})

router.get('/about', (req, res) => {

  console.log("/about");

  res.render('about', {

  })

})

router.get('/contact', async (req, res) => {

  console.log("/contact");
  try {
    const locationDB = await Location.findAll();

    const locations = locationDB.map((location) =>
      location.get({ plain: true })
    );


    res.render('contact', { locations })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

})


router.get('/rentals', async (req, res) => {


  try {
    const surfboardDB = await Surfboard.findAll();

    const surfboards = surfboardDB.map((surfboard) =>
      surfboard.get({ plain: true })
    );

    res.render('rental', { surfboards });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});


router.get('/admin', async (req, res) => {

  console.log("/admin");
  try {
    const surfboardDB = await Surfboard.findAll();

    const surfboards = surfboardDB.map((surfboard) =>
      surfboard.get({ plain: true })
    );

    const userDB = await User.findAll();

    const users = userDB.map((user) =>
      user.get({ plain: true })
    );

    const locationDB = await Location.findAll();

    const locations = locationDB.map((location) =>
      location.get({ plain: true })
    )



    res.render('admin', {
      surfboards, users, locations

    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router
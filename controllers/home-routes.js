const router = require('express').Router();
const Surfboard = require('../models/surfboard')
const Location = require('../models/location')
const User = require('../models/user')

//View all information from surfboard table
router.get('/', (req, res) => {
  Surfboard.findAll()

  // req.session.loggedIn = false;
  let loggedIn = req.session.loggedIn
  res.render('home', { loggedIn })
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
  if (req.session.loggedIn) {
    res.redirect('/', { home, loggedIn: req.session.loggedIn });
    return;
  }
  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
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
    const surfboardDB = await Surfboard.findAll({
      where: { checked_out: false }
    })
    // const surfboardDB = await Surfboard.findAll();

    const surfboards = surfboardDB.map((surfboard) =>
      surfboard.get({ plain: true })
    );
    let loggedIn = req.session.loggedIn
    res.render('rental', { surfboards, loggedIn });

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
const router = require('express').Router();
const Surfboard = require('../models/surfboard')


//View all information from surfboard table
router.get('/', (req, res) => {
  Surfboard.findAll()

  res.render('home', {
  })

  // .then(surfboardData => res.json(surfboardData))
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).json(err);
  // });
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

router.get('/contact', (req, res) => {

  console.log("/contact");

  res.render('contact', {

  })

})

module.exports = router
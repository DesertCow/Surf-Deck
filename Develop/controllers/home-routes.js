const router = require('express').Router();
const Surfboard = require('../models/surfboard')


// the '/api/surfboards' endpoint


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

router.get('/inventory', (req, res) => {

  console.log("/inventory");

  res.render('inventory', {

  })

})

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

// router.get('/surfboardinfo', (req, res) => {
//   console.log('/surfboardinfo');
//   res.render('surfboardinfo', {

//   })
// })


module.exports = router
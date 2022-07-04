const router = require('express').Router();
const Surfboard = require('../models/surfboard')


// the '/api/surfboards' endpoint
// const surfboards = [
//   {
//     board_num: '1001',
//     brand: 'Nation',
//     board_model: 'Dream Crusher',
//     length_inch: 72,
//     checked_out: true,
//     damaged: false,
//     fin_setup: 'setup 1',
//     fin_count: 3,
//     location_id: 3
//   },
//   {
//     board_num: '1002',
//     brand: 'Dano',
//     board_model: 'Sea Green',
//     length_inch: 116,
//     checked_out: true,
//     damaged: false,
//     fin_setup: 'setup 2',
//     fin_count: 2,
//     location_id: 3
//   },
//   {
//     board_num: '1003',
//     brand: 'Cordell',
//     board_model: 'CFishPoly',
//     length_inch: 72,
//     checked_out: false,
//     damaged: false,
//     fin_setup: 'setup 3',
//     fin_count: 1,
//     location_id: 2
//   },
//   {
//     board_num: '1004',
//     brand: 'Estrada',
//     board_model: 'The Bandito',
//     length_inch: 73,
//     checked_out: false,
//     damaged: true,
//     fin_setup: 'setup 2',
//     fin_count: 3,
//     location_id: 1
//   },
//   {
//     board_num: '1005',
//     brand: 'J7',
//     board_model: 'The Whatever',
//     length_inch: 72,
//     checked_out: true,
//     damaged: false,
//     fin_setup: 'setup 1',
//     fin_count: 2,
//     location_id: 1
//   },
//   {
//     board_num: '1006',
//     brand: 'J7',
//     board_model: 'The Whatever',
//     length_inch: 74,
//     checked_out: false,
//     damaged: true,
//     fin_setup: 'setup 3',
//     fin_count: 3,
//     location_id: 3
//   },
//   {
//     board_num: '1007',
//     brand: 'Thread',
//     board_model: 'Pirate Hooker',
//     length_inch: 73,
//     checked_out: false,
//     damaged: false,
//     fin_setup: 'setup 2',
//     fin_count: 1,
//     location_id: 2
//   },
//   {
//     board_num: '1008',
//     brand: 'Thread',
//     board_model: 'Koozie R.T.',
//     length_inch: 75,
//     checked_out: true,
//     damaged: false,
//     fin_setup: 'setup 2',
//     fin_count: 2,
//     location_id: 2
//   },
//   {
//     board_num: '1009',
//     brand: 'J7',
//     board_model: 'Ugly Stick',
//     length_inch: 70,
//     checked_out: false,
//     damaged: true,
//     fin_setup: 'setup 3',
//     fin_count: 2,
//     location_id: 1
//   },
//   {
//     board_num: '1010',
//     brand: 'Nation',
//     board_model: 'Sex Machine',
//     length_inch: 69,
//     checked_out: true,
//     damaged: false,
//     fin_setup: 'setup 1',
//     fin_count: 3,
//     location_id: 1
//   },
//   {
//     board_num: '1011',
//     brand: 'Thread',
//     board_model: 'The Pillow',
//     length_inch: 65,
//     checked_out: false,
//     damaged: false,
//     fin_setup: 'setup 2',
//     fin_count: 2,
//     location_id: 2
//   },
//   {
//     board_num: '1012',
//     brand: 'Almond',
//     board_model: 'Joy',
//     length_inch: 90,
//     checked_out: true,
//     damaged: false,
//     fin_setup: 'setup 1',
//     fin_count: 1,
//     location_id: 3
//   },

// ]


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

console.log("/inventory");



// const response = await fetch('/api/surfboards', {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
// });
// const surfboards = response.json();

// // console.log("API!!!!!! = " + JSON.stringify(response.body));

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
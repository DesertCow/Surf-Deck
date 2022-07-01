const router = require('express').Router();
const Surfboard = require('../../models/surfboard')


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


module.exports = router
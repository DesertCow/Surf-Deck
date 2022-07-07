const router = require('express').Router();
const { Surfboard, Location } = require('../../models')


// the '/api/surfboards' endpoint



//=========================== Surfboard Data View ==========================//
// View all information from surfboard table
router.get('/', (req, res) => {
  Surfboard.findAll({
    include: {
      model: Location, as: 'city'


    }
  })

    .then(surfboardData => res.json(surfboardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

//View all boards by either checked in( use request "0" ) or checked out( use request "1" )
router.get('/checked_out/:checked_out', (req, res) => {
  Surfboard.findAll({
    where: { checked_out: req.params.checked_out }
  })

    .then(surfboardData => res.json(surfboardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

//View all boards by either damaged( use request "0" ) or not damaged( use request "1" )
router.get('/damaged/:damaged', (req, res) => {
  Surfboard.findAll({
    where: { damaged: req.params.damaged }
  })

    .then(surfboardData => res.json(surfboardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

//View all boards within the location( use requests: 'Long Beach', 'Newport Beach', or 'Huntington Beach')
router.get('/location/:location', (req, res) => {
  Surfboard.findAll({
    where: { location: req.params.location }
  })

    .then(surfboardData => res.json(surfboardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

//INDIVIDUAL BOARD VIEW
//View specific surfboard by its ID
router.get('/id/:id', (req, res) => {
  Surfboard.findOne({
    where: { id: req.params.id },
  })
    .then(surfboardData => res.json(surfboardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});
//View specific surfboard by its board number
router.get('/board_num/:board_num', (req, res) => {
  Surfboard.findOne({
    where: { board_num: req.params.board_num },
  })
    .then(surfboardData => res.json(surfboardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});


//=========================== Surfboard Data Delete ==========================//

// Delete surfboard selection by ID
router.delete('/delete/id/:id', async (req, res) => {
  console.info(`${req.method} request received to delete a surfboard`)
  try {
    const surfboard = await Surfboard.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!surfboard) {
      res.status(404).json({ message: 'no surfboard with this id!' })
      console.log('no surfboard with this id!')
      return
    }
    res.status(200).json(surfboard)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Delete surfboard selection by board number
router.delete('/delete/board_num/:board_num', async (req, res) => {
  console.info(`${req.method} request received to delete a surfboard`)
  try {
    const surfboard = await Surfboard.destroy({
      where: {
        board_num: req.params.board_num,
      }
    })
    if (!surfboard) {
      res.status(404).json({ message: 'no surfboard with this board number!' })
      console.log('no surfboard with this board number!')
      return
    }
    res.status(200).json(surfboard)
  } catch (err) {
    res.status(500).json(err)
  }
});

//=========================== Surfboard Data Post ==========================//

// Creates new surfboard
router.post('/add', (req, res) => {
  console.info(`${req.method} request received to create surfboard`);
  //Example request body
  // {
  //   "board_num": 1015,
  //   "brand": "New Board",
  //   "board_model": "Very Legit Model",
  //   "legnth_inch": 200,
  //   "checked_out": false,
  //   "damaged": true,
  //   "fin_setup": "setup 3",
  //   "fin_count": "1",
  //   "location_id": "2",
  //   "img": "surfboard_02.jpeg"
  // }

  Surfboard.create(req.body)
    .then((surfboard) => {
      console.log(surfboard)
      res.status(200).json(surfboard)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
});


//=========================== Surfboard Data Update ==========================//

router.put('/update/:id', (req, res) => {
  console.info(`${req.method} request received to update a surfboard`)
  console.log(req.body)
  //Example request body
  // {
  //   "board_num": 1015,
  //   "brand": "New Board",
  //   "board_model": "Very Legit Model",
  //   "legnth_inch": 200,
  //   "checked_out": false,
  //   "damaged": true,
  //   "fin_setup": "setup 3",
  //   "fin_count": "1",
  //   "location": "Huntington Beach",
  //   "img": "1001-surfboard.jpeg"
  // }
  Surfboard.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((surfboard) => res.status(200).json(surfboard))
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });


});

module.exports = router;
const router = require('express').Router();
const Location = require('../../models/location')


// the '/api/locations' endpoint

//=========================== Location Data View ==========================//

router.get('/', (req, res) => {
  Location.findAll()

    .then(locationData => res.json(locationData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


//=========================== Location Data Delete ==========================//

// Delete location selection by ID
router.delete('/delete/id/:id', async (req, res) => {
  console.info(`${req.method} request received to delete a location`)
  try {
    const location = await Location.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!location) {
      res.status(404).json({ message: 'no location with this id!' })
      console.log('no location with this id!')
      return
    }
    res.status(200).json(surfboard)
  } catch (err) {
    res.status(500).json(err)
  }
});


//=========================== Location Data Post ==========================//

// Creates new Location
router.post('/add', (req, res) => {
  console.info(`${req.method} request received to create location`);
  // {
  //   city: "Huntington Beach",
  //     address: "12345 fakeaddress",
  //       phonenumber: "111-111-1111",
  //         hours: "12am - 9pm",
  //           img: "1001-surfboard.png",
  // }

  Location.create(req.body)
    .then((location) => {
      console.log(location)
      res.status(200).json(location)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
});


//=========================== Location Data Update ==========================//

router.put('/:id', (req, res) => {
  console.info(`${req.method} request received to update a location`)
  console.log(req.body)
  //Example request body
  // {
  //   "city": "Seal Beach",
  //   "address": "12534 fake st.",
  //   "hours": "12pm-6pm",
  //   "img": "*image name here from public folder"
  // }
  Location.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((location) => res.status(200).json(location))
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });


});


module.exports = router
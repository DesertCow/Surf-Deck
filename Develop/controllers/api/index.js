const router = require('express').Router();
const surfboardRoutes = require('./surfboard_routes')
const locationRoutes = require('./location_routes')

router.use('/surfboards', surfboardRoutes)
router.use('/locations', locationRoutes)

module.exports = router;
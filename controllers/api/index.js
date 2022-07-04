const router = require('express').Router();
const surfboardRoutes = require('./surfboard_routes')
const locationRoutes = require('./location_routes')
const userRoutes = require('./user_routes')

router.use('/surfboards', surfboardRoutes)
router.use('/locations', locationRoutes)
router.use('/users', userRoutes)

module.exports = router;
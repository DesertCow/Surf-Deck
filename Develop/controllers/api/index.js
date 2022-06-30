const router = require('express').Router();
const surfboardRoutes = require('./surfboard_routes')

router.use('/surfboards', surfboardRoutes)

module.exports = router;
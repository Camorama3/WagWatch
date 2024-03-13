const router = require('express').Router();
const bookingRoutes = require('./bookingRoutes');
const userRoutes = require('./userRoutes');

router.use('/booking', bookingRoutes);
router.use('/user', userRoutes);

module.exports = router;
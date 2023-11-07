const router = require('express').Router();

router.use('/restaurants', require('./api/restaurants'));

module.exports = router;
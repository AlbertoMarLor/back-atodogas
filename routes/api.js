const router = require('express').Router();

router.use('/restaurants', require('./api/restaurants'));
router.use('/users', require('./api/users'));
router.use('/schedule', require('./api/schedule'));


module.exports = router;
const router = require('express').Router();

router.use('/restaurants', require('./api/restaurants'));
router.use('/users', require('./api/users'));


module.exports = router;
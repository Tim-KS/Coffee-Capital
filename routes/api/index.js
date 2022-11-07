const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/user', userRoutes);
router.use('/order', orderRoutes);

module.exports = router;
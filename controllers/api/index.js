const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const productRoutes = require('./productRoutes');


// router.use('/user', userRoutes);
router.use('/users', userRoutes);
router.use('/order', orderRoutes);
router.use('/product', productRoutes);


module.exports = router;
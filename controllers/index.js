// api to be removed
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// console.log('controllers/index.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

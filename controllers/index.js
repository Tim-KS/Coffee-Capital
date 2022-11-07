// api to be removed
const router = require('express').Router();
const apiRoutes = require('./api');

console.log('controllers/index.js')

router.use('/', index);
router.use('/api', apiRoutes);

module.exports = router;

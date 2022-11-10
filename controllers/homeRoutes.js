const router = require('express').Router();
const { User } = require('../models');

router.get('/homepage', async (req, res) => {
  try {
    res.render('homepage', {logged_in: req.session.logged_in});

  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/login', async (req, res) => {
  try {
    res.render('login');

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
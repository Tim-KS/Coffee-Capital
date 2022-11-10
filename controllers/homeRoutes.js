const router = require('express').Router();
const { User, Product } = require('../models');
const withAuth = require('../utils/auth');


router.get('/homepage', async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    const products = allProducts.map(product => product.get({ plain: true }));
    res.render('homepage', { logged_in: req.session.logged_in, products });


  } catch (err) {
    res.status(400).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/login', async (req, res) => {
  try {
    res.render('login');

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
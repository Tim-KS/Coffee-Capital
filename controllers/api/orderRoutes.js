const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Order} = require('../../models');
const withAuth = require('../utils/auth');

// CREATE POST request for the order

router.post('/create', withAuth, async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // attributes: [user_id]
    // {
    //   model: OrderItem

    // }

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET order by id

router.get('/:id', async (req, res) => {
  try {
    const orderData = await Order.destroy({
      where: {
        const router = require('express').Router();
        const sequelize = require('../config/connection');
        const { User, Order } = require('../../models');
        const withAuth = require('../utils/auth');


        if(!orderData) {
          res.status(404).json({ message: 'No order found with this id!' });
          return;
        }

    res.status(200).json(orderData);
      } catch(err) {
        res.status(500).json(err);
      }
    });
  }
});

module.exports = router;

const { CartItem } = require('../models');

const cartItemData = [
  {
    session_id: 1,
    product_id: 1,
    quantity: 1
  },
  {
    session_id: 1,
    product_id: 2,
    quantity: 1
  },
  {
    session_id: 2,
    product_id: 3,
    quantity: 1
  },
  {
    session_id: 2,
    product_id: 3,
    quantity: 1
  },
  {
    session_id: 2,
    product_id: 4,
    quantity: 1
  },
  {
    session_id: 3,
    product_id: 3,
    quantity: 1
  },
  {
    session_id: 3,
    product_id: 3,
    quantity: 1
  },
  {
    session_id: 3,
    product_id: 4,
    quantity: 1
  },
  {
    session_id: 4,
    product_id: 12,
    quantity: 1
  },
  {
    session_id: 4,
    product_id: 15,
    quantity: 1
  },
  {
    session_id: 4,
    product_id: 16,
    quantity: 1
  },
  {
    session_id: 5,
    product_id: 4,
    quantity: 1
  },
  {
    session_id: 5,
    product_id: 33,
    quantity: 1
  },
  {
    session_id: 6,
    product_id: 15,
    quantity: 1
  }
];

const seedCartItems = () => CartItem.bulkCreate(cartItemData);

module.exports = seedCartItems;

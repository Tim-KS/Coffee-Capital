const { OrderItem } = require('../models');

const orderItemData = [
  {
    user_id: 2,
    order_id: 1,
    product_id: 1,
    total: 4.5
  },
  {
    user_id: 2,
    order_id: 1,
    product_id: 2,
    total: 5.5
  },
  {
    user_id: 3,
    order_id: 2,
    product_id: 3,
    total: 4.5
  },
  {
    user_id: 3,
    order_id: 2,
    product_id: 3,
    total: 4.5
  },
  {
    user_id: 3,
    order_id: 2,
    product_id: 4,
    total: 4.5
  },
  {
    user_id: 4,
    order_id: 3,
    product_id: 3,
    total: 4.5
  },
  {
    user_id: 4,
    order_id: 3,
    product_id: 3,
    total: 4.5
  },
  {
    user_id: 4,
    order_id: 3,
    product_id: 4,
    total: 4.5
  },
  {
    user_id: 5,
    order_id: 4,
    product_id: 12,
    total: 4.5
  },
  {
    user_id: 5,
    order_id: 4,
    product_id: 15,
    total: 3.5
  },
  {
    user_id: 5,
    order_id: 4,
    product_id: 16,
    total: 7.5
  },
  {
    user_id: 6,
    order_id: 5,
    product_id: 4,
    total: 4.5
  },
  {
    user_id: 6,
    order_id: 5,
    product_id: 15
  },
  {
    user_id: 7,
    order_id: 6,
    product_id: 7
  }
];

const seedOrderItems = () => OrderItem.bulkCreate(orderItemData);

module.exports = seedOrderItems;

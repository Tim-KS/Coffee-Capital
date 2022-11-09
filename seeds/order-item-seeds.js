const { OrderItem } = require('../models');

const orderItemData = [
  {
    order_detail_id: 1,
    product_id: 1
  },
  {
    order_detail_id: 1,
    product_id: 2
  },
  {
    order_detail_id: 2,
    product_id: 3
  },
  {
    order_detail_id: 2,
    product_id: 3
  },
  {
    order_detail_id: 2,
    product_id: 4
  },
  {
    order_detail_id: 3,
    product_id: 3
  },
  {
    order_detail_id: 3,
    product_id: 3
  },
  {
    order_detail_id: 3,
    product_id: 4
  },
  {
    order_detail_id: 4,
    product_id: 12
  },
  {
    order_detail_id: 4,
    product_id: 15
  },
  {
    order_detail_id: 4,
    product_id: 16
  },
  {
    order_detail_id: 5,
    product_id: 4
  },
  {
    order_detail_id: 5,
    product_id: 15
  },
  {
    order_detail_id: 6,
    product_id: 7
  }
];

const seedOrderItems = () => OrderItem.bulkCreate(orderItemData);

module.exports = seedOrderItems;

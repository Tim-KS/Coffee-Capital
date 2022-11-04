const { OrderDetail } = require('../models');

const orderDetailData = [
  {
    user_id: 2,
    total: 10.0
  },
  {
    user_id: 3,
    total: 13.5
  },
  {
    user_id: 4,
    total: 13.5
  },
  {
    user_id: 5,
    total: 6.0
  },
  {
    user_id: 6,
    total: 5.5
  },
  {
    user_id: 7,
    total: 3.5
  }
];

const seedOrderDetails = () => OrderDetail.bulkCreate(orderDetailData);

module.exports = seedOrderDetails;

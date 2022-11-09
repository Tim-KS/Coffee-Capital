// Sequelize links that mapped to each FK
const User = require('./User');
const Product = require('./Product');
const OrderDetail = require('./OrderDetail');
const OrderItem = require('./OrderItem');

// 1-m order_detail_ibfk_1 *************************
User.hasMany(OrderDetail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

OrderDetail.belongsTo(User, {
  foreignKey: 'user_id'
});


// OrderDetail m-m Product *************************
// order_item_ibfk_1
OrderDetail.hasMany(OrderItem, {
  foreignKey: 'order_detail_id',
  onDelete: 'CASCADE'
});

OrderItem.belongsTo(OrderDetail, {
  foreignKey: 'order_detail_id'
});

// order_item_ibfk_2 
Product.hasMany(OrderItem, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

OrderItem.belongsTo(Product, {
  foreignKey: 'product_id'
});

module.exports = { User, Product, OrderDetail, OrderItem };

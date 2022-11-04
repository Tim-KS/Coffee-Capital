const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const OrderDetail = require('./OrderDetail');
const OrderItem = require('./OrderItem');
const Session = require('./Session');
const CartItem = require('./CartItem');

// 1-m *************************
User.hasMany(OrderDetail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

OrderDetail.belongsTo(User, {
  foreignKey: 'user_id'
});

// 1-m *************************
User.hasMany(Session, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Session.belongsTo(User, {
  foreignKey: 'user_id'
});

// 1-m *************************
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// m-m *************************
// OrderItem.hasMany(Product, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

module.exports = { User, Category, Product, OrderDetail, OrderItem, Session, CartItem };

// Sequelize links that mapped to each FK
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const OrderDetail = require('./OrderDetail');
const OrderItem = require('./OrderItem');
const Session = require('./Session');
const CartItem = require('./CartItem');

// 1-m order_detail_ibfk_1 *************************
User.hasMany(OrderDetail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

OrderDetail.belongsTo(User, {
  foreignKey: 'user_id'
});

// 1-m session_ibfk_1 *************************
User.hasMany(Session, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Session.belongsTo(User, {
  foreignKey: 'user_id'
});

// Session m-m Product *************************
//cart_item_ibfk_1
Session.hasMany(CartItem, {
  foreignKey: 'session_id',
  onDelete: 'CASCADE'
});

CartItem.belongsTo(Session, {
  foreignKey: 'session_id'
});

// 1-m cart_item_ibfk_2
Product.hasMany(CartItem, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

CartItem.belongsTo(Product, {
  foreignKey: 'product_id'
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

// 1-m product_ibfk_1 *************************
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = { User, Category, Product, OrderDetail, OrderItem, Session, CartItem };

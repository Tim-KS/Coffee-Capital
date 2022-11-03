const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const OrderItem = require('./OrderItem');

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



module.exports = { User, Category, Product, OrderItem };

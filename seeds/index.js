const sequelize = require('../config/connection');
// const { User, Order, OrderItem, Category, Product } = require('../models');
const { User, Category, Product, OrderDetail, OrderItem } = require('../models');

const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedOrderDetails = require('./order-detail-seeds');
const seedOrderItems = require('./order-item-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  
  await seedOrderDetails();
  console.log('\n----- ORDERS DETAILS SEEDED -----\n');
  
  await seedOrderItems();
  console.log('\n----- ORDER ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();

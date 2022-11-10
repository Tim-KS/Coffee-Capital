const sequelize = require('../config/connection');
const { User, Product, OrderItem } = require('../models');

const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
const seedOrderItems = require('./order-item-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
    
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  
  await seedOrderItems();
  console.log('\n----- ORDER ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();

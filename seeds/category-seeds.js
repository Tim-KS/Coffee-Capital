const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'drinks',
  },
  {
    category_name: 'food',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

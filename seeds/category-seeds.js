const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'drinks',
  },
  {
    category_name: 'food',
  },
  {
    category_name: 'drink-milk',
  },
  {
    category_name: 'drink-addon',
  },
  {
    category_name: 'drink-temp',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

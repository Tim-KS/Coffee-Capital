const { Product } = require('../models');

const productData = [
  {
    name: 'Espresso',
    price: 4.5
  },
  {
    name: 'Macchiato',
    price: 5.5
  },
  {
    name: 'Risteretto',
    price: 4.5
  },
  {
    name: 'Americano',
    price: 4.5
  },
  {
    name: 'Cafe Latte',
    price: 5.5
  },
  {
    name: 'Cappucino',
    price: 4.5
  },
  {
    name: 'Flat White',
    price: 5.5
  },
  {
    name: 'Piccolo Latte',
    price: 4.0
  },
  {
    name: 'Mocha',
    price: 5.0
  },
  {
    name: 'Affogato',
    price: 5.5
  },
  {
    name: 'Tea',
    price: 4.0
  },
  {
    name: 'Hot Chocolate',
    price: 4.5
  },
  {
    name: 'Croissant',
    price: 4.5
  },
  {
    name: 'Chouquette',
    price: 5.5
  },
  {
    name: 'Toast with butter & jam',
    price: 3.5
  },
  {
    name: 'Brioche',
    price: 7.5
  },
  {
    name: 'Tarte',
    price: 5.5
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

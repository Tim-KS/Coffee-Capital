const { Product } = require('../models');

const productData = [
  {
    product_name: 'Espresso',
    price: 4.5
  },
  {
    product_name: 'Macchiato',
    price: 5.5
  },
  {
    product_name: 'Risteretto',
    price: 4.5
  },
  {
    product_name: 'Americano',
    price: 4.5
  },
  {
    product_name: 'Cafe Latte',
    price: 5.5
  },
  {
    product_name: 'Cappucino',
    price: 4.5
  },
  {
    product_name: 'Flat White',
    price: 5.5
  },
  {
    product_name: 'Piccolo Latte',
    price: 4.0
  },
  {
    product_name: 'Mocha',
    price: 5.0
  },
  {
    product_name: 'Affogato',
    price: 5.5
  },
  {
    product_name: 'Tea',
    price: 4.0
  },
  {
    product_name: 'Hot Chocolate',
    price: 4.5
  },
  {
    product_name: 'Croissant',
    price: 4.5
  },
  {
    product_name: 'Chouquette',
    price: 5.5
  },
  {
    product_name: 'Toast with butter & jam',
    price: 3.5
  },
  {
    product_name: 'Brioche',
    price: 7.5
  },
  {
    product_name: 'Tarte',
    price: 5.5
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

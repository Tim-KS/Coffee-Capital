const { Product } = require('../models');

const productData = [
  {
    product_name: 'Expresso',
    price: 4.50,
    category_id: 1,
  },
  {
    product_name: 'Macchiato',
    price: 5.50,
    category_id: 1,
  },
  {
    product_name: 'Risteretto',
    price: 4.50,
    category_id: 1,
  },
  {
    product_name: 'Americano',
    price: 4.50,
    category_id: 1,
  },
  {
    product_name: 'Cafe Latte',
    price: 5.50,
    category_id: 1,
  },
  {
    product_name: 'Cappucino',
    price: 4.50,
    category_id: 1,
  },
  {
    product_name: 'Flat White',
    price: 5.50,
    category_id: 1,
  },
  {
    product_name: 'Piccolo Latte',
    price: 4.00,
    category_id: 1,
  },
  {
    product_name: 'Mocha',
    price: 5.00,
    category_id: 1,
  },
  {
    product_name: 'Affogato',
    price: 5.50,
    category_id: 1,
  },
  {
    product_name: 'Tea',
    price: 4.0,
    category_id: 1,
  },
  {
    product_name: 'Hot Chocolate',
    price: 4.50,
    category_id: 1,
  },
  {
    product_name: 'Croissant',
    price: 4.50,
    category_id: 2,
  },
  {
    product_name: 'Chouquette',
    price: 5.50,
    category_id: 2,
  },
  {
    product_name: 'Toast with butter & jam',
    price: 3.50,
    category_id: 2,
  },
  {
    product_name: 'Brioche',
    price: 5.50,
    category_id: 2,
  },
  {
    product_name: 'Tarte',
    price: 5.50,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
const { Product } = require('../models');

const productData = [
  {
    product_name: 'Expresso',
    price: 4.5,
    category_id: 1
  },
  {
    product_name: 'Macchiato',
    price: 5.5,
    category_id: 1
  },
  {
    product_name: 'Risteretto',
    price: 4.5,
    category_id: 1
  },
  {
    product_name: 'Americano',
    price: 4.5,
    category_id: 1
  },
  {
    product_name: 'Cafe Latte',
    price: 5.5,
    category_id: 1
  },
  {
    product_name: 'Cappucino',
    price: 4.5,
    category_id: 1
  },
  {
    product_name: 'Flat White',
    price: 5.5,
    category_id: 1
  },
  {
    product_name: 'Piccolo Latte',
    price: 4.0,
    category_id: 1
  },
  {
    product_name: 'Mocha',
    price: 5.0,
    category_id: 1
  },
  {
    product_name: 'Affogato',
    price: 5.5,
    category_id: 1
  },
  {
    product_name: 'Tea',
    price: 4.0,
    category_id: 1
  },
  {
    product_name: 'Hot Chocolate',
    price: 4.5,
    category_id: 1
  },
  {
    product_name: 'Croissant',
    price: 4.5,
    category_id: 2
  },
  {
    product_name: 'Chouquette',
    price: 5.5,
    category_id: 2
  },
  {
    product_name: 'Toast with butter & jam',
    price: 3.5,
    category_id: 2
  },
  {
    product_name: 'Brioche',
    price: 5.5,
    category_id: 2
  },
  {
    product_name: 'Tarte',
    price: 5.5,
    category_id: 2
  },
  {
    product_name: 'Standard Milk',
    price: 0.0,
    category_id: 3
  },
  {
    product_name: 'Semi-Skimmed Milk',
    price: 0.0,
    category_id: 3
  },
  {
    product_name: 'Oat Milk',
    price: 0.5,
    category_id: 3
  },
  {
    product_name: 'Almond Milk',
    price: 0.5,
    category_id: 3
  },
  {
    product_name: 'Soy Milk',
    price: 0.5,
    category_id: 3
  },
  {
    product_name: 'No Sugar',
    price: 0.0,
    category_id: 4
  },
  {
    product_name: '1 Sugar',
    price: 0.0,
    category_id: 4
  },
  {
    product_name: '2 Sugar',
    price: 0.0,
    category_id: 4
  },
  {
    product_name: '1 Sweetner',
    price: 0.0,
    category_id: 4
  },
  {
    product_name: '2 Sweetner',
    price: 0.0,
    category_id: 4
  },
  {
    product_name: 'Honey',
    price: 0.5,
    category_id: 4
  },
  {
    product_name: 'Normal Temperature',
    price: 0.0,
    category_id: 5
  },
  {
    product_name: 'Extra Hot',
    price: 0.0,
    category_id: 5
  },
  {
    product_name: 'Warm',
    price: 0.0,
    category_id: 5
  },
  {
    product_name: 'Regular',
    price: 0.0,
    category_id: 6
  },
  {
    product_name: 'Large',
    price: 1.0,
    category_id: 6
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

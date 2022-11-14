const { Product } = require('../models');
const { tableName } = require('../models/User');

const productData = [
  {
    name: 'Espresso',
    price: 4.5,
    description: 'Espresso is generally thicker than coffee brewed by other methods, with a viscosity similar to that of warm honey.',
    img: 'Espresso.jpg'
  },
  {
    name: 'Macchiato',
    price: 5.5,
    description: 'The caffè macchiato has the highest ratio of espresso to milk of any drink made with those ingredients.',
    img: 'Macchiato.jpg'
  },
  {
    name: 'Risteretto',
    price: 4.5,
    description: 'Risteretto is a short shot (30 ml from a double basket) of a more highly concentrated espresso coffee.',
    img: 'Risteretto.jpg'
  },
  {
    name: 'Americano',
    price: 4.5,
    description: 'Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.',
    img: 'Americano.jpg'
  },
  {
    name: 'Cafe Latte',
    price: 5.5,
    description: 'Cafe Latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk.',
    img: 'Cafe Latte.jpg'
  },
  {
    name: 'Cappucino',
    price: 4.5,
    description: 'Cappucino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam (microfoam).',
    img: 'Cappucino.jpg'
  },
  {
    name: 'Flat White',
    price: 5.5,
    description: 'A flat white is a coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency).',
    img: 'Flat White.jpg'
  },
  {
    name: 'Piccolo Latte',
    price: 4.0,
    description: 'Our most popular Latte is bound to make you happy.',
    img: 'Piccolo Latte.jpg'
  },
  {
    name: 'Mocha',
    price: 5.0,
    description: 'Mocha is a chocolate-flavoured warm beverage that is a variant of a caffè latte',
    img: 'Mocha.jpg'
  },
  {
    name: 'Affogato',
    price: 5.5,
    description: 'Affogato is an Italian coffee-based dessert.',
    img: 'Affogato.jpg'
  },
  {
    name: 'Tea',
    price: 4.0,
    description: 'You cannot go wrong with the Most popular beverage in the world.',
    img: 'Tea.jpg'
  },
  {
    name: 'Hot Chocolate',
    price: 4.5,
    description: 'It is a chocolate that is hot',
    img: 'Hot Chocolate.jpg'
  },
  {
    name: 'Croissant',
    price: 4.5,
    description: 'fastest way to get super fat is by eating these delicious Frensh pastry',
    img: 'Croissant.jpg'
  },
  {
    name: 'Chouquette',
    price: 5.5,
    description: 'Chouquette pastry employs its high moisture content to create steam, as the water in the dough evaporates when baked, puffing the pastry.',
    img: 'Chouquette.jpg'
  },
  {
    name: 'Toast with butter & jam',
    price: 3.5,
    description: 'This classic goes well with any hot beverages of your choice.',
    img: 'Toast with butter & jam.jpg'
  },
  {
    name: 'Brioche',
    price: 7.5,
    description: 'Brioche is a bread of French origin whose high egg and butter content gives it a rich and tender crumb.',
    img: 'Brioche.jpg'
  },
  {
    name: 'Tarte',
    price: 5.5,
    description: 'Tarte is a pastry in which the fruit (usually apples) is caramelized in butter and sugar before the tart is baked.',
    img: 'Tarte.jpg'
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

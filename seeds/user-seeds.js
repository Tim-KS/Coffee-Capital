const { User } = require('../models');

const userData = [
  {
    email: 'coffeecapital10000@gmail.com',
    password: 'cc10000!',
    first_name: 'Coffee',
    last_name: 'Capital',
    is_admin: true
  },
  {
    email: 'mevada87@gmail.com',
    password: 'Password1!',
    first_name: 'Bhavika',
    last_name: 'Mevada',
    is_admin: false
  },
  {
    email: 'sean.wallace.australia@gmail.com',
    password: 'Password2!',
    first_name: 'Sean',
    last_name: 'Wallace',
    is_admin: false
  },
  {
    email: 'tuxedocookie@gmail.com',
    password: 'Password3!',
    first_name: 'Tim',
    last_name: 'Kandon-Smmith',
    is_admin: false
  },
  {
    email: 'hellosanket@gmail.com',
    password: 'Password4!',
    first_name: 'Sanket',
    last_name: 'Sanket',
    is_admin: false
  },
  {
    email: 'ed@mycompany.com',
    password: 'Password5!',
    first_name: 'Ed',
    last_name: 'Franklin',
    is_admin: false
  },
  {
    email: 'fiona@mycompany.com',
    password: 'Password6!',
    first_name: 'Fiona',
    last_name: 'Griffith',
    is_admin: false
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

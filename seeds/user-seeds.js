const { User } = require('../models');

const userData = [
  {
    email: 'admin@coffeecapital.com',
    password: 'Password1!',
    first_name: 'Adam',
    last_name: 'Berry',
    is_admin: true
  },
  {
    email: 'ben@abc.com',
    password: 'Password2!',
    first_name: 'Ben',
    last_name: 'Chalmers',
    is_admin: false
  },
  {
    email: 'cathy@abc.com',
    password: 'Password3!',
    first_name: 'Cathy',
    last_name: 'Davidson',
    is_admin: false
  },
  {
    email: 'sean.wallace.australia@gmail.com',
    password: 'Password4!',
    first_name: 'Sean',
    last_name: 'Wallace',
    is_admin: false
  },
  {
    email: 'diane@mycompany.com',
    password: 'Password5!',
    first_name: 'Diane',
    last_name: 'Enterprise',
    is_admin: false
  },
  {
    email: 'ed@mycompany.com',
    password: 'Password6!',
    first_name: 'Ed',
    last_name: 'Franklin',
    is_admin: false
  },
  {
    email: 'fiona@mycompany.com',
    password: 'Password7!',
    first_name: 'Fiona',
    last_name: 'Griffith',
    is_admin: false
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

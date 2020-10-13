const randomNumber = require('../utilities/randomNumber');
// const app = require('../../app');

const peopleList = [
  {
    name: 'Scott',
    age: randomNumber(20, 85),
  },
  {
    name: 'Rachael',
    age: randomNumber(20, 85),
  },
  {
    name: 'Myron',
    age: randomNumber(20, 85),
  },
];

module.exports = peopleList;

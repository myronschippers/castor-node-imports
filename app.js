// list of People ?
const peopleList = require('./modules/people-list');

console.log('Hello');

// print people to the console
for (let i = 0; i < peopleList.length; i++) {
  console.log(`${peopleList[i].name} is ${peopleList[i].age} years old.`);
}

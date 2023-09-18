const storage = require('./lineStorage.js');

console.log(storage.lineOne[Math.floor(Math.random() * storage.lineOne.length)]);
console.log(storage.lineTwo[Math.floor(Math.random() * storage.lineTwo.length)]);
console.log(storage.lineThree[Math.floor(Math.random() * storage.lineThree.length)]);
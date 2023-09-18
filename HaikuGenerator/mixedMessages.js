const storage = require('./lineStorage.js');

//console.log(storage.lineOne[Math.floor(Math.random() * storage.lineOne.length)]);
//console.log(storage.lineTwo[Math.floor(Math.random() * storage.lineTwo.length)]);
//console.log(storage.lineThree[Math.floor(Math.random() * storage.lineThree.length)]);

const haiku = () => {
    console.log(
    `${storage.lineOne[Math.floor(Math.random() * storage.lineOne.length)]}\n${storage.lineTwo[Math.floor(Math.random() * storage.lineTwo.length)]}\n${storage.lineThree[Math.floor(Math.random() * storage.lineThree.length)]}`)
}
haiku();
const storage = require('./lineStorage.js');


const haiku = () => {
    console.log(
    `${storage.lineOne[Math.floor(Math.random() * storage.lineOne.length)]}\n${storage.lineTwo[Math.floor(Math.random() * storage.lineTwo.length)]}\n${storage.lineThree[Math.floor(Math.random() * storage.lineThree.length)]}`)
}

haiku();
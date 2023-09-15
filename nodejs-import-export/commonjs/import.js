// Impor trực tiếp nguyên file đó
const myModule = require('./export');
// Import từ functions, object, ...
const { addTwoNumbers, calculateBMI } = require('./export');

const myModule2 = require('./export2');
const { addTwoNumbers2, calculateBMI2 } = require('./export2');



// test
console.log(myModule.addTwoNumbers(1, 2));
console.log(myModule.calculateBMI(73, 172));
console.log(addTwoNumbers(1, 2));
console.log(calculateBMI(73, 172));


console.log(myModule2.addTwoNumbers2(1, 2));
console.log(myModule2.calculateBMI2(73, 172));
console.log(addTwoNumbers2(1, 2));
console.log(calculateBMI2(73, 172));


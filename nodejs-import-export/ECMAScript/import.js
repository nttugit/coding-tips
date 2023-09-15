// Sẽ bị lỗi, trừ khi bạn config "type": "module", trong package.json
import { addTwoNumbers, calculateBMI } from './export.js';
import myModuleDefault from './export_default.js'

// test
console.log(addTwoNumbers(1, 2));
console.log(calculateBMI(73, 172));

console.log(myModuleDefault.addTwoNumbers2(1, 2));
console.log(myModuleDefault.calculateBMI2(73, 172));

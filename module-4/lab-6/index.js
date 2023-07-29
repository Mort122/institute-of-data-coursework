
//Excercise A
const moment = require('moment');
const today= moment();
const birthday = moment('2023-12-20');
const days = birthday.diff(today, 'days');

console.log(days);

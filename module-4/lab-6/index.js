
//Excercise A
const moment = require('moment');
const today= moment();
const birthday = moment('2023-12-20');
const days = birthday.diff(today, 'days');

console.log(days);


//Excercise B

const moment = require('moment');
const birthday = moment('1994-12-20');
const today = moment();

const years = today.diff(birthday, 'years');
birthday.add(years, 'years');

const months = today.diff(birthday, 'months');
birthday.add(months, 'months');

const days = today.diff(birthday, 'days');

console.log(years + ' years ' + months + ' months ' + days + ' days ');
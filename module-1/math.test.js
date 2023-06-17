let num1 = 10;
let num2 = 5;

if (add(num1,num2) != 15) {
    throw new Error(`Add did'nt work`)
}

function add(num1, num2) {
     return num1 + num2;
}

if (subtract(num1,num2) != 5) {
    throw new Error(`Subtract did'nt work`)
}

function subtract(num1, num2) {
    return num1 - num2;
}

if (divide(num1,num2) != 2) {
   throw new Error(`Divide did'nt work`)
}

function divide(num1, num2) {
    return num1 / num2;
}

if (multiply(num1,num2) != 50) {
    throw new Error(`Multiply did'nt work`)
}

function multiply(num1, num2) {
    return num1 * num2;
}

function sayHello(name) {
    const greeting = 'Hello';
    const greetingString = greeting + " " + name;
    return greetingString
}


console.log(10+5);
console.log(10-5);
console.log(10/5);
console.log(10*5);

console.log(sayHello('Garrett'));

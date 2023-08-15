class Calculator {

    constructor(){}

    addNumbers(num1, num2) {
        return parseInt(num1) + parseInt(num2);   
    }

    subtractNumbers(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    multiplyNumbers(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    divideNumbers(num1, num2) {
        return parseInt(num1) / parseInt(num2); 
    }
}

module.exports = Calculator;
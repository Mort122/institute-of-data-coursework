class Calculator {
    constructor() {}

    addNumbers(req, res) {
        const {num1, num2} = req.query;
        const total = parseInt(num1) + parseInt(num2);
        return parseInt(num1) + parseInt(num2);
    }

    subtractNumbers(req, res) {
        const {num1, num2} = req.query;
        const total = parseInt(num1) - parseInt(num2);
        return parseInt(num1) - parseInt(num2);
    }

    multiplyNumbers(req, res) {
        const {num1, num2} = req.query;
        const total = parseInt(num1) * parseInt(num2);
        return parseInt(num1) * parseInt(num2);
    }

    divideNumbers(req, res) {
        const {num1, num2} = req.query;
        const total = parseInt(num1) / parseInt(num2);
        return parseInt(num1) / parseInt(num2);
    }
}

module.exports = Calculator;
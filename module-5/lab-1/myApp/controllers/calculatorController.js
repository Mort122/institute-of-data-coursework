
const Calculator = require('../libraries/calculator.js');
// const Logger = require('../libraries/logger.js');

const myCalc = new Calculator()

const addNumbers = (req, res) => {
    const {num1, num2} = req.query;
    const total = myCalc.addNumbers(num1, num2);

    // const sum = myCalc.addNumbers(num1, num2, sum);
    // myLogger.log(num1, num2, sum, operation);
    
    res.status(200);
    res.json({result:total});
}

const subtractNumbers = (req, res) => {
    const {num1, num2} = req.path;
    const total = myCalc.subtractNumbers(num1, num2);
    

    res.status(200);
    res.json({result:total});
}

const divideNumbers = (req, res) => {
    const {num1, num2} = req.body;
    const total = myCalc.divideNumbers(num1, num2);
    

    res.status(200);
    res.json({result:total});
}

const multiplyNumbers = (req, res) => {
    const {num1, num2} = req.body;
    const total = myCalc.multiplyNumbers(num1, num2);

    console.log({total})
    

    res.status(200);
    res.json({result:total});
}


module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers,
}
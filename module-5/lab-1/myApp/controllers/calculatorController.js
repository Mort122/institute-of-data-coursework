
const Calculator = require('../libraries/Calculator.js');

const myCalc = new Calculator()

const addNumbers = (req, res) => {
    const {num1, num2} = req.query;
    const total = myCalc.addNumbers(num1, num2);
    myCalc.addNumbers(req, res);
    
    res.status(200);
    res.json({result:total});
}

const subtractNumbers = (req, res) => {
    myCalc.subtractNumbers(req, res);
    

    res.status(200);
    res.json({result:total});
}

const divideNumbers = (req, res) => {
    myCalc.divideNumbers(req, res);
    

    res.status(200);
    res.json({result:total});
}

const multiplyNumbers = (req, res) => {
    myCalc.multiplyNumbers(req, res);
    

    res.status(200);
    res.json({result:total});
}


module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers,
}
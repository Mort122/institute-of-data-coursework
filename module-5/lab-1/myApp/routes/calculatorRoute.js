const express = require('express');
const router = express.Router();
const { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } = require('../controllers/calculatorController.js');
 


//Query Parameters
router.get('/add', (req, res) => {       // ✔
   addNumbers(req, res);
})
//Path Parameters
router.get('/subtract/:num1/:num2', (req, res) => {     // ✔
    subtractNumbers(req, res);
})
//Eventually Body
router.post('/multiply', (req, res) => {
    multiplyNumbers(req, res);
});

router.post('/divide', (req, res) => {
    divideNumbers(req, res);
});

module.exports = router;
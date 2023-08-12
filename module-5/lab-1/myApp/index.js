const express = require('express');
const testRoute = require('./routes/myTestRoute.js');
const calculatorRoute = require('./routes/calculatorRoute.js');
const { addNumbers } = require('./controllers/calculatorController.js');

const app = express()
const port = 3000
const public_dir = 'public'

app.use('/', express.static(public_dir));
app.use('/mytest', testRoute);
app.use('/calculator', calculatorRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
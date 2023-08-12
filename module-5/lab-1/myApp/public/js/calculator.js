// import { json } from "express";

document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');

    document.querySelector('.calculator').addEventListener('click', async function(event) {
        const btnValue = event.target.value;

        switch (btnValue) {
            case 'C':
                display.value = '';
                break;
            case 'DE':
                display.value = display.value.toString().slice(0,-1);
                break;
            case '=':
                display.value = await compute(display.value);
                break;
            default:
                display.value += btnValue;
                break;
        }
    });
});

async function compute(expression) {
    try {
        const operation = expression.split(/([+\-*/])/);

        let result = parseFloat(operation[0]);

        for(let i = 1; i < operation.length; i+=2) {
            let operator = operation[i];
            let nextNumber = parseFloat(operation[i+1]);

            switch(operator) {
                case '+':
                    await fetch(`./calculator/add?num1=${result}&num2=${nextNumber}`)
                        .then(res =>res.json())
                        .then(json => {
                            const result = json.result;
                            display.value = result})
                        .catch(e => console.log(e));
                    result += nextNumber;
                    break;
                case '-':
                    await fetch(`./calculator/subtract?num1=${result}&num2=${nextNumber}`)
                        .then(res =>res.json())
                        .then(json => {
                            const result = json.result;
                            display.value = result})
                        .catch(e => console.log(e));
                    result -= nextNumber;
                    break;
                case '*':
                    await fetch(`./calculator/multiply?num1=${result}&num2=${nextNumber}`)
                        .then(res =>res.json())
                        .then(json => {
                            const result = json.result;
                            display.value = result})
                        .catch(e => console.log(e))
                    result *= nextNumber;
                    break;
                case '/':
                    await fetch(`./calculator/divide?num1=${result}&num2=${nextNumber}`)
                        .then(res =>res.json())
                        .then(json => {
                            const result = json.result;
                            display.value = result})
                        .catch(e => console.log(e))
                    result /= nextNumber;
                    break;
                default:
                    return 'Error';
            }
        }

        return result;
    } catch(err) {
        console.error(err);
        return 'Error';
    }
}

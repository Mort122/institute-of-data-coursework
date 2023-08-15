
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
        
        let num1 = parseFloat(operation[0]);

        for(let i = 1; i < operation.length; i+=2) {
            let operator = operation[i];
            let num2 = parseFloat(operation[i+1]);
            let endpoint;
            let config;
            switch(operator) {
                case '+':
                    endpoint = `./calculator/add/?num1=${num1}&num2=${num2}`;  //Query ✔
                    console.log({num1, num2, operator: '+'});
                    break;
                case '-':
                    endpoint = `./calculator/subtract/${num1}/${num2}`; // Path  ✔
                    console.log({num1, num2, operator: '-'})
                    num1 -= num2;
                    break;
                case '*':
                    endpoint = `/calculator/multiply`; 
                    config = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({num1, num2})
                    }
                    console.log({num1, num2, operator: '*'})
                    break;
                case '/':
                    endpoint = `/calculator/divide`; 
                    config = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({num1, num2})
                    }
                    console.log({num1, num2, operator: '/'})
                    break;
                default:
                    return 'Error';
            }

            const res = await fetch(endpoint, config);
            const json = await res.json();
            console.log({json})
            const opResult = json.result;
            return opResult;
        }

    } catch(err) {
        console.error(err);
        return 'Error';
    }
}


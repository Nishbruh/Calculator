let input = [];
window.addEventListener('load', () => {
    let butons = document.getElementsByTagName('button');
    for (let i = 0; i < butons.length; i++) {
        butons[i].addEventListener('click', (e) => {
            let t = e.target.value
            if (t == '=') {
                calculator(input);
                input = []
                return;
            }

            if (t == 'all-clear') {
                input = [];
                return
            }
            input.push(t);
        })
    }
});

calculate = (input) => {
    let operands = [];
    let operator = [];
    input.forEach(element => {

        switch (element) {
            case '+':
                operator.push(element)
                break;
            case '-':
                operator.push(element)
                break;
            case '*':
                operator.push(element)
                break;
            case '/':
                operator.push(element)
                break;

            default:
                operands.push(parseInt(element));
        }
    });
    let output = 0;
    if (operator.length === 1 && operands.length === 2) {
        switch (operator) {
            case '+':
                output = operands[0] + operands[1];
                break;
            case '-':
                output = operands[0] - operands[1];
                break;
            case '*':
                output = operands[0] * operands[1];
                break;
            case '/':
                output = operands[0] / operands[1];
                break;

            default:
                break
        }
    }
}

calculator = (input) => {
    input.forEach(element => {
        switch (element) {
            case '+':
                operator.push(element)
                break;
            case '-':
                operator.push(element)
                break;
            case '*':
                operator.push(element)
                break;
            case '/':
                operator.push(element)
                break;

            default:
                operands.push(parseInt(element));
        }
    });
}
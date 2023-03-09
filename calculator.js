// Basic calculator functions

let displayValue = 0;

function sum(a, b) {
    currentCount += a + b;
}

function substract(a, b) {
    currentCount += a - b;
}

function multiply(a, b) {
    currentCount += a * b;
}

function divide(a, b) {
    currentCount += a / b;
}

function operate(operator, a, b) {

    switch(operator) {
        
        case '+':
            sum(a, b);
            break;
        
        case '-':
            substract(a, b);
            break;
        
        case '*':
            multiply(a, b);
            break;
        
        case '/':
            divide(a, b);
            break;

    }
}
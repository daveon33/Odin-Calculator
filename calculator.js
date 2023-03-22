// Basic calculator functions

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
let option  = '';


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

// Targeting the number buttons

const screenDisplay = document.querySelector('#displayContent');
const newPress = document.querySelectorAll(".numberBtns");
newPress.forEach(btn => {
    btn.addEventListener('click', e => {
        screenDisplay.innerHTML = e.target.textContent;
    });
})
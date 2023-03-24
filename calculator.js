// Basic calculator functions

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
let option  = '';


function sum(a, b) {
    displayValue += a + b;
}

function substract(a, b) {
    displayValue += a - b;
}

function multiply(a, b) {
    displayValue += a * b;
}

function divide(a, b) {
    displayValue += a / b;
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
const newPress = document.querySelectorAll(".numeric");
newPress.forEach(btn => {
    btn.addEventListener('click', e => {
        screenDisplay.innerHTML += e.target.textContent;
    });
});

// Targeting the operation buttons

const operationPress = document.querySelectorAll('.operative');
operationPress.forEach(btn => {
    btn.addEventListener('click', e => {
        screenDisplay.innerHTML += e.target.textContent;
        firstValue = screenDisplay.innerHTML.substring(0, screenDisplay.innerHTML.length - 1);
        option = screenDisplay.innerHTML.substring(screenDisplay.innerHTML.length - 1);
    });
});

// Make the operation happen

const enterPress = document.querySelector('#enter');
enterPress.addEventListener('click', e => {
    let currentOperation = screenDisplay.innerHTML;
    const regex = /[^0-9]+\d+/;
    secondValue = currentOperation.match(regex)[0].substring(1);
    operate(option, firstValue, secondValue);
    screenDisplay.innerHTML = displayValue;
});

// Make the clear button reset the display

const clearPress = document.querySelector('#clear');
clearPress.addEventListener('click', e => {
    screenDisplay.innerHTML = '';
});

// Make the delete button erase the last digit

const deletePress = document.querySelector('#delete');
deletePress.addEventListener('click', e => {
    screenDisplay.innerHTML = screenDisplay.innerHTML.substring(0, screenDisplay.innerHTML.length - 1);
})
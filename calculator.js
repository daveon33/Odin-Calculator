// Basic calculator functions

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
let option  = '';


function sum(a, b) {
    if(displayValue == 0) {
        displayValue = a + b;
    } else {
        displayValue += b;
    }
}

function substract(a, b) {
    if(displayValue == 0) {
        displayValue = a - b;
    } else {
        displayValue -= b;
    }
}

function multiply(a, b) {
    if(displayValue == 0) {
        displayValue = a * b;
    } else {
        displayValue *= b;
    }
}

function divide(a, b) {
    if(displayValue == 0) {
        if(b == 0) {
            screenDisplay.innerHTML = 'Error';
        } else {
            displayValue = a / b;
        }
    } else {
        if(b == 0) {
            screenDisplay.innerHTML = 'Error';
        } else {
            displayValue /= b;
        }
    }
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
    operate(option, parseFloat(firstValue), parseFloat(secondValue));
    screenDisplay.innerHTML = displayValue;
    firstValue = displayValue;
    option = '';
    secondValue = 0;
});

// Make the clear button reset the display

const clearPress = document.querySelector('#clear');
clearPress.addEventListener('click', e => {
    screenDisplay.innerHTML = '';
    displayValue = 0;
});

// Make the delete button erase the last digit

const deletePress = document.querySelector('#delete');
deletePress.addEventListener('click', e => {
    screenDisplay.innerHTML = screenDisplay.innerHTML.substring(0, screenDisplay.innerHTML.length - 1);
})
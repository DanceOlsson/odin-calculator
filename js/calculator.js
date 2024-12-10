// // Operation functions

// function addOperator(num1, num2) {
//     return num1 + num2;
// }

// function subtractOperator(num1, num2) {
//     return num1 - num2;
// }

// function multiplyOperator(num1, num2) {
//     return num1 * num2;
// }

// function divideOperator(num1, num2) {
//     return num1 / num2;
// }

// function calcOperator(operator, num1, num2) {
//     return operator(num1, num2);
// }

//Store operators in an object instead of having separate functions for each one
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : 'Error',
}

//Calculator state and logic

let currentInput = '';
let previousInput = '';
let operator = '';


function processInput(value) {
    if (!isNaN(value)) {
        clearOperatorHighlights();
        currentInput += value;
        return currentInput;
    }
    if (value === '.' && !currentInput.includes('.')) {
        currentInput += value;
        return currentInput;
    } 
    if (['-', '+', '/', '*'].includes(value)) {
        clearOperatorHighlights();
        const operatorButton = document.querySelector(`button[data-value="${value}"]`);
        operatorButton?.classList.add('operator-active');
        operator = value;
    }
    return currentInput; // Always return currentInput, even if we didn't change it
}
//not done
function clearOperatorHighlights() {
    document.querySelectorAll('.operator-active').forEach(button => {
        button.classList.remove('operator-active');
    });
}
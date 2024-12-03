// Operation functions

function addOperator(num1, num2) {
    return num1 + num2;
}

function subtractOperator(num1, num2) {
    return num1 - num2;
}

function multiplyOperator(num1, num2) {
    return num1 * num2;
}

function divideOperator(num1, num2) {
    return num1 / num2;
}

function calcOperator(operator, num1, num2) {
    return operator(num1, num2);
}

console.log(calcOperator(multiplyOperator, 5, 5))


//Calculator state and logic

let currentInput = '';
let previousInput = '';
let operator = '';


function processInput(value) {
    if (!isNaN(value)) {
        currentInput += value;
        return currentInput;
    }
   if (value === "." && !currentInput.includes(".")) {
        currentInput += value;
        return currentInput;
    } 
    return currentInput; // Always return currentInput, even if we didn't change it
}
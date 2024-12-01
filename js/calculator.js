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
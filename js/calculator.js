class Calculator {
    constructor() {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = '';
        this.operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => b !== 0 ? a / b : 'Error',
        };
    }

    processInput(value) {
        if (!isNaN(value)) {
            this.clearOperatorHighlights();
            this.currentInput += value;
            return this.currentInput;
        }
        if (value === '.' && !this.currentInput.includes('.')) {
            this.currentInput += value;
            return this.currentInput;
        } 
        if (['-', '+', '/', '*'].includes(value)) {
            this.clearOperatorHighlights();
            const operatorButton = document.querySelector(`button[data-value="${value}"]`);
            operatorButton?.classList.add('operator-active');
            this.operator = value;
        }
        return this.currentInput;
    }

    clearOperatorHighlights() {
        document.querySelectorAll('.operator-active').forEach(button => {
            button.classList.remove('operator-active');
        });
    }
}
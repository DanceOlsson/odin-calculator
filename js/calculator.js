class Calculator {
    constructor() {
        this.currentInput = '';
        this.previousInput = '';
        this.currentOperator = '';
        this.operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => b !== 0 ? a / b : 'Error',
            'AC': () => {
                this.currentInput = '';
                this.previousInput = '';
                this.currentOperator = '';
                return '';
            },
            '+/-': (a) => -a,
            '%': (a) => a / 100,
            '=': (a, b) => {
                if (this.currentOperator && this.previousInput && this.currentInput) {
                    this.currentOperator = '';
                    return this.operators[this.currentOperator](
                        parseFloat(this.previousInput), 
                        parseFloat(this.currentInput)
                    );
                }
               
            },

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

        
        //Try to handle all operators in one block of code...
        if (value in this.operators) {
            // Special handling for unary operators (+/- and %)
            if (value === '+/-' || value === '%') {
                const inputToUse = this.currentInput || this.previousInput;
                this.currentInput = String(this.operators[value](parseFloat(inputToUse)));
                return this.currentInput;
            }

            // If we have a previous calculation waiting
            if (this.previousInput && this.currentInput && this.currentOperator) {
                //perform that calculation first
                this.currentInput = String(this.operators[this.currentOperator](
                    parseFloat(this.previousInput),
                    parseFloat(this.currentInput)
                ));
            }


            // save current number and operator and prepare for next number input
            this.previousInput = this.currentInput;
            this.currentInput = '';
            this.currentOperator = value;

            return this.previousInput;
        }



        //future highlighting shit
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
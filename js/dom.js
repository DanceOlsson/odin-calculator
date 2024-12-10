const buttonsContainer = document.getElementById('buttons-container');
const calculatorContainer = document.getElementById('calculator-container');
const displayContainer = document.getElementById('display-container');


const buttonValues = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
]

const buttonTextContent = [
    ['AC', '+/-', '%', '➗'],
    ['7', '8', '9', '✖️'],
    ['4', '5', '6', '➖'],
    ['1', '2', '3', '➕'],
    ['0', '.', '=']
]


// Creates buttons and assigns content + value to each button
function createButtons() {
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        
        // For the last row (i === 4), only loop 3 times instead of 4
        const threeButtonsInLastRow = (i === 4) ? 3 : 4;
        for (let j = 0; j < threeButtonsInLastRow; j++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.textContent = buttonTextContent[i][j];
            
            button.dataset.value = buttonValues[i][j];

            if (buttonValues[i][j] === '0') {
                button.classList.add('zero-button');
            }
            
            if (['+', '-', '*', '/'].includes(buttonValues[i][j])) {
                button.classList.add('operator-button');
            }

            //When clicked it sends data to calculator.js logic
            button.addEventListener('click', () => {
                const result = processInput(buttonValues[i][j]);
                displayContainer.textContent = result;
            })
            
            row.appendChild(button);
        }
        buttonsContainer.appendChild(row);
    }
}


// Creates a nice container that looks like a physical calculator :D
function createCalculator() {
    createButtons();
}

createCalculator();

const buttonsContainer = document.getElementById("buttons-container");
const calculatorContainer = document.getElementById("calculator-container");
const displayContainer = document.getElementById("display-container");

const buttonValues = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', '.', '=', '/'],
]

const buttonTextContent = [
    ['7', '8', '9', '➕'],
    ['4', '5', '6', '➖'], 
    ['1', '2', '3', '✖️'],
    ['0', '.', '=', '➗']
]

// Creates buttons and assigns content + value to each button
function createButtons() {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");


        //nested loop creating divs for the buttons
        for (let j = 0; j < 4; j++) {
            const button = document.createElement("button");
            button.classList.add("grid-button");
            button.textContent = buttonTextContent[i][j];
            

            // Unique button ID
            button.id = `btn-${i+1}-${j+1}`;

            // Add event listener
            button.addEventListener("click", () => {
                console.log(`Button ${i+1}-${j+1} clicked`);
            })

            row.appendChild(button);
        }
        buttonsContainer.appendChild(row);
    }
}


// Creates a display that shows inputs and answer in realtime
function createDisplay() {
    
}

// Creates a nice container that looks like a physical calculator :D
function createCalculator() {
    createButtons();
    createDisplay();
}

createButtons();
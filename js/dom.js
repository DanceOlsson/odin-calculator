const container = document.getElementById("container");

function createButtons() {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");


        //nested loop creating divs for the buttons
        for (let j = 0; j < 4; j++) {
            const button = document.createElement("button");
            button.classList.add("grid-button");
            // add button.textcontent here? or in css??

            // Unique button ID
            button.id = `btn-${i+1}-${j+1}`;

            // Add event listener
            button.addEventListener("click", () => {
                console.log(`Button ${i+1}-${j+1} clicked`);
            })

            row.appendChild(button);
        }
        container.appendChild(row);
    }
}

createButtons();
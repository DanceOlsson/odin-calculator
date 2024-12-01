const container = document.getElementById("container");

function createButtons() {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");


        //nested loop creating the buttons
        for (let j = 0; j < 4; j++) {
            const button = document.createButtons();
            button.classList.add("grid-button");
            // add button.textcontent here? or in css??

            // Unique button ID
            button.id = `btn-${i}-${j}`;

            // Add event listener
            button.addEventListener("click", () => {
                console.log(`Button ${i}-${j} clicked`);
            })

            row.appendChild(button);
        }
        container.appendChild(row);
    }
}
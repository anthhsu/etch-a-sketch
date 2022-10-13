let n = 0;

const divMainContainer = document.getElementById("container");
const buttonParams = document.getElementById("params-btn");

buttonParams.addEventListener("click", () => {
    clearGrid();
    n = prompt("Please enter a value.", 10);
    generateGrid(n);
});

function generateGrid(n) {
    for (let i = 0; i < n; i++) {
        let divContainerRow = document.createElement("div");
        divContainerRow.classList.add("flex-container", "flex-container-row");
        divMainContainer.appendChild(divContainerRow);
        for (let j = 0; j < n; j++) {
            let divSquare = document.createElement("div");
            divSquare.classList.add("square");
            divContainerRow.appendChild(divSquare);
        }
    }
}

function clearGrid() {
    while (divMainContainer.firstChild) {
        divMainContainer.removeChild(divMainContainer.firstChild);
    }
}
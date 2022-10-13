let row = 16;
let col = 16;

const divMainContainer = document.getElementById("container");

function generateGrid() {
    for (let i = 0; i < row; i++) {
        let divContainerRow = document.createElement("div");
        divContainerRow.classList.add("flex-container", "flex-container-row");
        divMainContainer.append(divContainerRow);
        for (let j = 0; j < col; j++) {
            let divSquare = document.createElement("div");
            divSquare.classList.add("square");
            divContainerRow.appendChild(divSquare);
        }
    }
}

generateGrid();
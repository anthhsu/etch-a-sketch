divContainerColOne = document.createElement("div");
divContainerColOne.classList.add("flex-container", "flex-container-col");

divMainContainer = document.getElementById("container");
divMainContainer.appendChild(divContainerColOne);

function generateGrid() {
    for (let i = 0; i < 4; i++) {
        let divContainerRow = document.createElement("div");
        divContainerRow.classList.add("flex-container", "flex-container-row");
        divContainerColOne.append(divContainerRow);
        for (let j = 0; j < 4; j++) {
            let divSquare = document.createElement("div");
            divSquare.classList.add("square");
            divContainerRow.appendChild(divSquare);
        }
    }
}

generateGrid();
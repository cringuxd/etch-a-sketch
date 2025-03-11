//Divide the x by x grid by creating x "row" containers, each containing x squares


//Start with 16 containers as a default (use node list)
function createGrid(inputValue) {
    let rowList = [];
    let gridSquares = inputValue * inputValue;

    for(let i = 0; i < gridSquares; i++) {
        rowList[i] = document.createElement("div");
        rowList[i].setAttribute("class","square");
        container.appendChild(rowList[i]);
    }
}

//createGrid(16);

//function deleteGrid() {}

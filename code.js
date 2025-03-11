//Divide the x by x grid by creating x "row" containers, each containing x squares
const grid = document.querySelector(".grid")
let rowList = [];


//Start with 16 containers as a default (use node list)
function createGrid(inputValue, rowList) {
    let gridSquares = inputValue * inputValue;
    let squareSize = calculateSquareSize(inputValue);
    for(let i = 0; i < gridSquares; i++) {
        rowList[i] = document.createElement("div");
        rowList[i].setAttribute("class","square");
        rowList[i].style.width = squareSize.toString() +"%";
        rowList[i].style.height = squareSize.toString() +"%";
        console.log (rowList[i].style.width);
        grid.appendChild(rowList[i]);
    }
}
//Loops through the grid container and removes each child starting from the last, resets rowList
function deleteGrid() {
    rowList = []
    while(grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

function calculateSquareSize(n) {
    return Math.round((1/n)*100);
}

createGrid(10, rowList);



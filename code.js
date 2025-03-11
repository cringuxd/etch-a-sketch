//Divide the x by x grid by creating x "row" containers, each containing x squares

const grid = document.querySelector(".grid")
let rowList = [];
const grid_button = document.querySelector(".grid-button");
let gridSize = 16;

//Button code utilized for changing grid size
grid_button.onclick = () => {
    gridSize = prompt("Enter the new size of the grid. Minimum size 10x10, maximum 100x100. (Enter one number)");
    deleteGrid();
    createGrid(gridSize,rowList);
};

//This function also handles the color changing hover events
function createGrid(inputValue, rowList) {
    let gridSquares = inputValue * inputValue;
    let squareSize = calculateSquareSize(inputValue);
    for(let i = 0; i < gridSquares; i++) {
        rowList[i] = document.createElement("div");
        rowList[i].setAttribute("class","square");
        rowList[i].style.width = squareSize.toString() +"%";
        rowList[i].style.height = squareSize.toString() +"%";
        rowList[i].addEventListener('mouseover',() => {
            rowList[i].style["background-color"] = "black";
            console.log("Hovered!");
        });
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

//Initialize starting grid
createGrid(16, rowList);



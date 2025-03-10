//Divide the x by x grid by creating x "row" containers, each containing x squares


//* Create initial flexbox container (can play around with potential border value)
const body = document.querySelector("body")
body.setAttribute("class","container");
body.appendChild(initialContainer);

//Start with 16 containers as a default (use node list)
function createGrid() {
    let rowList = [];
    for(let i = 0; i < 16; i++) {
        //* create row container here (make it a flexbox container)
        rowList[i] = document.createElement("div");
        for(let j = 0; i < 16; j++) {
            //* create 16 "squares"
            
        }
        //*
    }
}

//function deleteGrid() {}

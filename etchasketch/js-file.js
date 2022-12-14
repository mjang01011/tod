let color = "000000";
let brush = true;

function makeGrid(size=16) {   
    let board = document.querySelector(".board");
    let tiles = board.querySelectorAll("div");
    tiles.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;   
    for(let i = 0; i < size*size; i++){
        let square = document.createElement('div');
        square.style.border = "1px solid";
        square.addEventListener("mouseover", () => {
            if(brush){
                square.style.backgroundColor = '#' + color;
            }
            else{
                square.style.backgroundColor = "#ffffff";
            }
        })
        square.style.backgroundColor = '#ffffff';
        board.insertAdjacentElement("beforeend", square);
    }
}

makeGrid();

function randomColor(){
    color = Math.floor(Math.random()*16777215).toString(16);
    let displayColor = document.querySelector(".dot");
    displayColor.style.backgroundColor = '#' + color;;
}

function setColor(userColorChoice){
    color = userColorChoice;
    let displayColor = document.querySelector(".dot");
    displayColor.style.backgroundColor = '#' + color;;
}

function activateBrush(){
    brush = true;
    let tool = document.querySelector(".tool");
    tool.textContent = "Brush";
}

function activateErase(){
    brush = false;
    let tool = document.querySelector(".tool");
    tool.textContent = "Eraser";
}

function clearGrid(){
    let board = document.querySelector(".board");
    let tiles = board.querySelectorAll("div");
    tiles.forEach((div) => div.style.backgroundColor = "#ffffff");
}
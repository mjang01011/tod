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
    console.log(color);
}

function setColor(userColorChoice){
    color = userColorChoice;
}

function activateBrush(){
    brush = true;
}

function activateErase(){
    brush = false;
}

function clearGrid(){
    let board = document.querySelector(".board");
    let tiles = board.querySelectorAll("div");
    tiles.forEach((div) => div.style.backgroundColor = "#ffffff");
}
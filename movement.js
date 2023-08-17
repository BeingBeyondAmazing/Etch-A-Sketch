newGrid(16);
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
addHover();


function addHover(){
    const grid = document.querySelectorAll(".gridPiece");
    grid.forEach(function(piece) {
        piece.addEventListener('mouseover',changeColor)
        piece.addEventListener('mousedown',changeColor)
    })
}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.classList.add("active");
}

function newGrid(gridSize = 16){
    const container = document.querySelector('#container');
    for(let i = 0; i< gridSize * gridSize; i++){
        const div = document.createElement("div");
        div.classList.add("gridPiece");
        let squareSize = "" + 1600/gridSize +"px";
        div.style.width = squareSize;
        div.style.height = squareSize;
        container.appendChild(div);
        console.log("ok");
    } 
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const container = document.querySelector('#container');

const button = document.querySelector('.button-23');
button.addEventListener('click', e => {
    let gridSize = prompt("Enter a Grid Size 0-100");
    removeAllChildNodes(container);
    newGrid(gridSize);
    addHover();
}); 
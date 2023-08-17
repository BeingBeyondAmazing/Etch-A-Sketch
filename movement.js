newGrid(16);
const grid = document.querySelectorAll(".gridPiece");
grid.forEach(function(piece) {
    piece.onmouseenter = function(){
        piece.classList.toggle("active")
    }
    piece.onmouseout = function(){
        piece.classList.toggle("active")
    }
})

function newGrid(gridSize = 16){
    const container = document.querySelector('#container');
    for(let i = 0; i< gridSize * gridSize; i++){
        const div = document.createElement("div");
        div.classList.add("gridPiece");
        div.style.width = "100px";
        div.style.height = "100px";
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

//removeAllChildNodes(container);

const button = document.querySelector('.button-23');
button.addEventListener('click', e => {
    let gridSize = prompt("Enter a Grid Size 0-100");
    newGrid(gridSize);
});
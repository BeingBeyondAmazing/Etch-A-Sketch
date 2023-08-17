const holder = document.createElement("div");
holder.classList.add("holder");
for(let i = 0; i< 16 * 16; i++){
    const div = document.createElement("div");
    div.classList.add("gridPiece");
    div.style.width = '100px';
    div.style.height = '100px';
    holder.appendChild(div);
}

document.body.appendChild(holder);

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
    const holder = document.createElement('div')
    holder.classList.add("holder");
    for(let i = 0; i < holder.childNodes.length; i++){
        holder.removeChild(holder.childNodes[i]);
    }

    for(let i = 0; i< gridSize * gridSize; i++){
        const div = document.createElement("div");
        div.classList.add("gridPiece");
        div.style.width = "100px";
        div.style.height = "100px";
        holder.appendChild(div);
    } 
}

const button = document.querySelector('.button-23');
button.addEventListener('click', e => {
    let gridSize = prompt("Enter a Grid Size 0-100");
    newGrid(gridSize);
});
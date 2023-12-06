const container = document.querySelector('.container');
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function(){
let numRows = parseInt(input.value);
let numCols = parseInt(input.value);

container.style.setProperty('--numCols', numCols)

for (let r = 0; r < numRows; r++){
    for (let c = 0; c < numCols; c++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square')
        container.appendChild(gridSquare);

        gridSquare.addEventListener('mouseenter', function(){
            this.style.backgroundColor = 'black';
        })
        
    } 
}})







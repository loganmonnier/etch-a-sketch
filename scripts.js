const container = document.querySelector('.container');

let numRows = 16;
let numCols = 16;

for (let r = 0; r < numRows; r++){
    for (let c = 0; c < numCols; c++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square')
        container.appendChild(gridSquare);

        gridSquare.addEventListener('mouseenter', function(){
            this.style.backgroundColor = 'black';
        })
        
    } 
};





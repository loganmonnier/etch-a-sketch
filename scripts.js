const container = querySelector('container');

let numRows = 16
let numCols = 16

for (let r = 0; r < 16; r++){
    for (let c = 0; c < 16; c++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-section')
        container.appendChild(gridSquare);
    }
}

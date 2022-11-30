const gridElement = document.getElementById('grid');

function createSquare (){
    const DivElement = document.createElement('div');
    DivElement.classList.add('square');
    return DivElement;
}

const newSquare = createSquare();

gridElement.appendChild(newSquare);
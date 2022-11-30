const gridElement = document.getElementById('grid');

function createSquare (){
    const DivElement = document.createElement('div');
    DivElement.classList.add('square');
    return DivElement;
}

for (let i = 1; i <= 100; i++){

    const newSquare = createSquare();
    newSquare.innerHTML = i;
    gridElement.appendChild(newSquare);
}


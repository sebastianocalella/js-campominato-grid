const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');

startElement.addEventListener('click', function(){
    for (let i = 1; i <= 100; i++){
        const newSquare = createSquare();
        newSquare.innerHTML = i;
        gridElement.appendChild(newSquare);
    }
})

function createSquare (){
    const DivElement = document.createElement('div');
    DivElement.classList.add('square');
    return DivElement;
}




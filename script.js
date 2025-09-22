

let titleContainer = document.createElement('div');
titleContainer.className = 'titleContainer';
let title = document.createElement('h1');
title.className = 'title'
title.textContent = 'Etch-a-Sketch';
titleContainer.appendChild(title);

let body = document.querySelector('body');
body.appendChild(titleContainer);


let squareSizeBtn = document.createElement('button');
squareSizeBtn.className = 'squareSizeBtn';
squareSizeBtn.textContent = 'Change Square Size';

let buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';
body.appendChild(buttonContainer);
buttonContainer.appendChild(squareSizeBtn);





// create the gamescreen and put in dom
let gameScreen = document.createElement('div');
gameScreen.className = 'gameScreen';
body.appendChild(gameScreen);

function squareCreator(squareSize){
    for (let i=0; i < (squareSize * squareSize); i++){
        let square = document.createElement('div');
        square.className = 'square';
        square.style.height = `calc(100% / ${squareSize})`;
        square.style.width = `calc(100% / ${squareSize})`;
        gameScreen.appendChild(square);


        square.addEventListener('mouseover', () => {
            let r = Math.floor((Math.random() * 128) + 127);
            let g = Math.floor((Math.random() * 128) + 127);
            let b = Math.floor((Math.random() * 128) + 127);
            square.style.backgroundColor = `rgb(${r},${g},${b})`
            title.style.color = `rgb(${g},${r},${b})`
        })
    }
}

squareCreator(16);

squareSizeBtn.addEventListener('click', () =>
{
    let inputNum;
    while (true) {
        let userInput = prompt('Please provide grid size (1-100):');
        if (userInput === null) return; // User pressed Cancel
        inputNum = Number(userInput);
        if (
            Number.isInteger(inputNum) &&
            inputNum >= 1 &&
            inputNum <= 100
        ) break;
    }

    while (gameScreen.firstChild) {
        gameScreen.removeChild(gameScreen.firstChild);
    }
    squareCreator(inputNum);
    
    
})


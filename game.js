const canvas = document.querySelector('#game')
const game = canvas.getContext('2d')

window.addEventListener('load', setCanvasSize)
window.addEventListener('resize', setCanvasSize)

let canvasSize
let elementSize

function setCanvasSize() {
    
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    elementSize = canvasSize / 10;

    startGame()
    
}

function startGame() {
    
    console.log({canvasSize, elementSize})

    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end'
     

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementSize, elementSize * i)   
    }
}



    //game.fillRect(0,0,100,100)
    //game.clearRect(37.5,37.5,25,25)

    // game.font= '25px Verdada'
    // game.fillStyle= 'purple'
    // game.textAlign= 'center'
    // game.fillText('Platzi', 25,25)
    

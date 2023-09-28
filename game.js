const canvas = document.querySelector('#game')
const game = canvas.getContext('2d')

window.addEventListener('load', startGame)

function startGame() {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    const elementSize = canvasSize / 10;
    console.log({canvasSize, elementSize})

    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end'
    

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementSize, elementSize * i)   
    }
    //window.innerWidth




    //game.fillRect(0,0,100,100)
    //game.clearRect(37.5,37.5,25,25)

    // game.font= '25px Verdada'
    // game.fillStyle= 'purple'
    // game.textAlign= 'center'
    // game.fillText('Platzi', 25,25)
    
}
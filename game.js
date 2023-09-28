const canvas = document.querySelector('#game')
const game = canvas.getContext('2d')

window.addEventListener('load', startGame)

function startGame() {
    //game.fillRect(0,0,100,100)
    //game.clearRect(37.5,37.5,25,25)

    game.font= '25px Verdada'
    game.fillStyle= 'purple'
    game.textAlign= 'center'
    game.fillText('Platzi', 25,25)
    
}
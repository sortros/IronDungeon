document.addEventListener('DOMContentLoaded', () => {
    let game;

    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', () => {

        document.querySelector('#initialScreen').style="display:none";
        document.querySelector('#gameScreen').style="display:block";
        let canvas = document.querySelector('#myCanvas');
        let ctx = canvas.getContext('2d');
        const ironGame = new Game(
            ctx = ctx,
            player= new Player(ctx),
            _gameOver,
            _gameWin
        );
        ironGame.start();
    })
    function _gameOver(){
        document.querySelector('#gameScreen').style="display:none";
        document.querySelector('#GameOver').style= "display: block";
    }

    function _gameWin(){
        document.querySelector('#GameOver').style= "display: none";
        document.querySelector('#gameScreen').style="display:none";
        document.querySelector('#GameWin').style= "display: block";
    }
      
});
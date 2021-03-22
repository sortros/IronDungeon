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
            _gameOver
         );
        ironGame.start();
    })
    function _gameOver(){
        document.querySelector('#gameScreen').style="display:none";
        document.querySelector('#GameOver').style= "display: block";
    }
      
});
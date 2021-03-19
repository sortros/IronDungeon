document.addEventListener('DOMContentLoaded', () => {
    let game;
    
    

    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', () => {

         document.querySelector('#initialScreen').style="display:none";
         document.querySelector('#gameScreen').style="display:block";
         const ctx = canvas.getContext('2d');
         Game.start();
    })
    
      
});
document.addEventListener('DOMContentLoaded', () => {
    let game;
    
    

    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', () => {

         document.querySelector('#imgStart').classList.add('hide');
         document.querySelector('#start').classList.add('hide');
         document.querySelector('#myCanvas').style = 'display : block';  
         const ctx = canvas.getContext('2d');
         Game.start();
    })
    
      
});
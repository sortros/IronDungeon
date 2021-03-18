class player{

    move() {
        document.onkeydown = movement;
      }


      _movement(e) {
        document.addEventListener('keydown', (event) => {
        let xPos = 5;
        let yPos = 263;
        if(e.keyCode === 68){ //tecla "d"
            xPos += 20;
            //alert("hola")
            ctx.fillRect(40, 263, 10, 10)
            ctx.stroke();
            
        }
        if(e.keyCode === 65){//tecla "a"
         newXPos = xPos -= 5;
         alert("adios")
        }
        }  
    )}

}
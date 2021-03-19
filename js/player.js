class Player {
    constructor(ctx){
        this.x = 5;
        this.y = 263;
        this.height = 10;
        this.width = 10;
        this.context = ctx;
    }

    _draw() { 
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.stroke();    
   }

   goRight(){
       this.x += 5;
   }
    goLeft(){
        this.x -= 5;
    }
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
        ctx.fillRect(xPos, yPos, 10, 10)
        ctx.stroke();
        }  
    )}

}
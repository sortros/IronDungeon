class Player {
    constructor(ctx){
        this.x = 5;
        this.y = 262;
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
       this.x += 10;
    }
    goLeft(){
        this.x -= 10;
    }

    jump(){
        let jumpUp = () => {
            if (this.y > 232) {
                this.y -= 2;
            } else {
                clearInterval(iUp);
                let jumpDown = () => {
                    if (this.y < 262) {
                        this.y += 2; 
                    } else {
                        clearInterval(iDown);
                    }
                }
                const iDown = setInterval(jumpDown, 25);
            }
        }
       const iUp = setInterval(jumpUp, 25); 
    }
}
class Player {
    constructor(ctx){
        this.x = 5;
        this.y = 240;
        this.height = 25;
        this.width = 20;
        this.context = ctx;
    }

    _draw() { 
        let knight = new Image();
        knight.src = 'images/knight.png';
        this.context.drawImage(knight, this.x, this.y, this.width, this.height); 
   }

    goRight(){
       this.x += 2;
    }
    goLeft(){
        this.x -= 2;
    }

    jump(){
        let jumpUp = () => {
            if (this.y > 190) {
                this.y -= 2;
            } else {
                clearInterval(iUp);
                let jumpDown = () => {
                    if (this.y < 240) {
                        this.y += 4; 
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
class Bullet{

    constructor(ctx){
        this.x = 590;
        this.y = 260;
        this.height = 10;
        this.width = 10;
        this.context = ctx;
    }

    _draw() { 
        this.context.fillStyle= 'blue';
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.stroke();    
   }
}
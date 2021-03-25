class Bullet{

    constructor(ctx){
        this.x = 590;
        this.y = 254;
        this.height = 10;
        this.width = 10;
        this.context = ctx;
    }

    _draw() { 
        let fireball = new Image();
        fireball.src = 'images/fireball2.png';
        this.context.drawImage(fireball, this.x, this.y, this.width, this.height);
        //this.context.fillStyle= 'blue';
        //this.context.fillRect(this.x, this.y, this.width, this.height);
        //this.context.stroke(); 
   }

   _goLeft(){
    this.x -=1;
   }

   _disappear(bulletArr){
       if (this.x === 0){
           bulletArr.shift();
       }
   }
   _colision(bullet, player){
        return !(
               ((bullet.y + bullet.height) < (player.y)) ||
               (bullet.y > (player.y + player.height)) ||
               ((bullet.x + bullet.width) < player.x) ||
               (bullet.x > (player.x + player.width))
                );
    
   } 
}
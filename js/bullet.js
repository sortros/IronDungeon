class Bullet{

   //constructor(ctx){
   //    this.x = 590;
   //    this.y = Math.floor(Math.random() * 200);
   //    this.height = 10;
   //    this.width = 10;
   //    this.context = ctx;
   //}
   constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

    _draw(context) { 
        let fireball = new Image();
        fireball.src = 'images/fireball2.png';
        context.drawImage(fireball, this.x, this.y, this.width, this.height);
   }

   _goLeft(){
    this.x -=1;
   }
   _goDown(){
    this.y +=1;
   }

   _disappear(bulletArr){
       if ((this.x === 0) || (this.y === 300)) {
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
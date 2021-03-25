class Win {

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    _draw(ctx, win) { 
        //let door = new Image();
        //door.src = 'images/DungeonDoor.png';
        //this.ctx.drawImage(door, this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.stroke();  
   }
   _colision(win, player){
    return !(
           ((win.y + win.height) < (player.y)) ||
           (win.y > (player.y + player.height)) ||
           ((win.x + win.width) < player.x) ||
           (win.x > (player.x + player.width))
            );
    } 
}
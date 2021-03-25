class Win {

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    _draw(ctx) { 
        let door = new Image();
        door.src = 'images/DungeonDoor.png';
        ctx.drawImage(door, this.x, this.y, this.width, this.height);
   }
   _colision(win, player){
    return !(
           ((win.y + win.height) < (player.y)) ||
           (win.y > (player.y + player.height)) ||
           ((win.x + win.width) < player.x) ||
           (win.x > (player.x + player.width))
            );
    } 

    _trollAway(player){
        let doorAway = (player) => {
         if((player.x) >= ( this.x -30)  && (this.x <= 530)){ 
                         this.x +=2;    
         }    else {
            clearInterval(trollDoor);
         }
        }
        const trollDoor = setInterval(doorAway, 25);
    }
}
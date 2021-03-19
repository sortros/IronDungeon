class Game {
    constructor(ctx, player) {
        this.ctx = ctx;
        this.player = player;
        //this.cb = callback;
    }

    _movement() {
        document.addEventListener('keydown', (e) => {
                //alert(e.code);
        if(e.code === "KeyD"){ //tecla "d"
            this.player.goRight();
            
        }
        if(e.code === "KeyA"){ //tecla "d"
        this.player.goLeft();
        
        }

        })
    }

   
    _clean() {
        this.ctx.clearRect(0, 0, 600, 300);
    }

    _update() {
        this._clean();
        this.player._draw();
        window.requestAnimationFrame(this._update.bind(this));
    }
    start() { 
        this.player._draw();
        this._movement();
        //this.player.move();
        window.requestAnimationFrame(this._update.bind(this));
    }
}








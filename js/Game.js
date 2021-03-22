class Game {
    constructor(ctx, player) {
        this.ctx = ctx;
        this.player = player;
        //this.cb = callback;
    }

    _movement() {
        document.addEventListener('keydown', (e) => {
            if(e.code === "KeyD"){ 
                this.player.goRight();    
            }
            if(e.code === "KeyA"){ 
                this.player.goLeft();
            }
            if(e.code === "Space") { 
                this.player.jump();
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








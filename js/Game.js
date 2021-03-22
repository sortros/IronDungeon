class Game {
    constructor(ctx, player, bullet) {
        this.ctx = ctx;
        this.player = player;
        this.bullet = bullet;

        //this.cb = callback;
    }

    _generateBullet(){
        this.bullet;

    }

    _goLeft(){
        this.bullet.x -=1;
        console.log(this.bullet.x);
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
        setInterval(this._goLeft.bind(this), 3000);
        this.bullet._draw();
        window.requestAnimationFrame(this._update.bind(this));
        
    }
    start() { 
        this.player._draw();
        this._movement();
        this._generateBullet();
        window.requestAnimationFrame(this._update.bind(this));
    }
}








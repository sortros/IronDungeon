class Game {
    constructor(ctx, player) {
        this.ctx = ctx;
        this.player = player;
        this.bulletArr = [];

        //this.cb = callback;
    }

    _generateBullet(){
        let bullet = new Bullet(this.ctx);
        this.bulletArr.push(bullet);
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
        this.bulletArr.forEach(bullet => bullet._draw());
        this.bulletArr.forEach(bullet => bullet._goLeft());
        this.bulletArr.forEach(bullet => bullet._disappear(this.bulletArr));
        window.requestAnimationFrame(this._update.bind(this));
        
    }
    start() { 
        this.player._draw();
        this._movement();
        const bulletSpawn = setInterval(this._generateBullet.bind(this), 1000);
        window.requestAnimationFrame(this._update.bind(this));
    }
}








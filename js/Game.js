class Game {
    constructor(ctx, player, gameOver, gameWin) {
        this.ctx = ctx;
        this.player = player;
        this.bulletArr = [];
        this.gameOver = gameOver;
        this.gameWin = gameWin;
        this.win = new Win(290, 230, 30, 35);
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
        })
        document.addEventListener('keypress', (e) => {
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
        this.win._draw(this.ctx, this.win);
        this.win._trollAway(this.player);
        this.bulletArr.forEach(bullet => bullet._draw());
        this.bulletArr.forEach(bullet => bullet._goLeft());
        this.bulletArr.forEach(bullet => bullet._goDown());
        this.bulletArr.forEach(bullet => bullet._disappear(this.bulletArr));
        this.bulletArr.forEach(bullet => {

            if(bullet._colision(bullet, this.player)){
                this.gameOver();
            };
        });
        if(this.win._colision(this.win, this.player)){
           this.gameWin();
           
        };
        window.requestAnimationFrame(this._update.bind(this));
        
    }

    start() { 
        this.player._draw();
        this._movement();
        //drawLevel1();
        const bulletSpawn = setInterval(this._generateBullet.bind(this), 500);        window.requestAnimationFrame(this._update.bind(this));
    }
}








class Game {
    constructor(ctx, player, gameOver, gameWin) {
        this.ctx = ctx;
        this.player = player;
        this.bulletArrLeft = [];
        this.bulletArrDown = [];
        this.gameOver = gameOver;
        this.gameWin = gameWin;
        this.win = new Win(290, 230, 30, 35);
    }

    _generateBulletArrayLeft(){
        let bullet = new Bullet(590, 250, 15, 15);
        this.bulletArrLeft.push(bullet);
    }
    _generateBulletArrayDown(){
        let bullet = new Bullet(Math.floor(Math.random() * 600), 0, 20, 20);
        this.bulletArrDown.push(bullet);
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
        this.bulletArrLeft.forEach(bullet => bullet._drawBulletLeft(this.ctx));
        this.bulletArrLeft.forEach(bullet => bullet._goLeft());
        this.bulletArrLeft.forEach(bullet => bullet._disappear(this.bulletArrLeft));
        this.bulletArrLeft.forEach(bullet => {

            if(bullet._colision(bullet, this.player)){
                this.gameOver();
            };
        });
        this.bulletArrDown.forEach(bullet => bullet._drawBulletDown(this.ctx));
        this.bulletArrDown.forEach(bullet => bullet._goDown());
        this.bulletArrDown.forEach(bullet => bullet._disappear(this.bulletArrDown));
        this.bulletArrDown.forEach(bullet => {

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
        const bulletSpawnLeft = setInterval(this._generateBulletArrayLeft.bind(this), 3000);
        const bulletSpawnDown = setInterval(this._generateBulletArrayDown.bind(this), 1500);       
        window.requestAnimationFrame(this._update.bind(this));
        
    }
}








class Game {
    constructor(ctx, player) {
        this.ctx = ctx;
        this.player = player;
        //this.cb = callback;
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
        //this._movement();
        //this.player.move();
        window.requestAnimationFrame(this._update.bind(this));
    }
}








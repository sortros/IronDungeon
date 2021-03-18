class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.player = options.player;
        this.cb = callback;
    }

    _drawPlayer() { 
         const ctx = document.querySelector('#myCanvas').getContext("2d");
         this.ctx.fillStyle = 'red';
         this.ctx.fillRect(25,25, 100, 100);
         this.ctx.stroke();    
         
    }

   
    _clean() {
        this.ctx.clearRect(0, 0, 600, 300);
    }

    _update() {
        this._clean();
        this._drawPlayer();
        window.requestAnimationFrame(this._update.bind(this));
    }
    start() {
        this._drawPlayer();
        this._movement();
        this.player.move();
        window.requestAnimationFrame(this._update.bind(this));
    }
}








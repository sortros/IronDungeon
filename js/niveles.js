 //--------------------------Dibujo de niveles---------------------
 function drawLevel1() {
    var ctx = document.querySelector('#myCanvas').getContext("2d");
    ctx.moveTo(0, 273);  // la posicion del personaje no puede bajar de (0, 263)
    ctx.lineTo(600, 273);
     ctx.stroke();
}

//function drawLevel2() {
//    var ctx = document.querySelector('#myCanvas').getContext("2d");
//    //this.ctx.fillStyle = 'yellow';
//    ctx.moveTo(0, 50);
//    ctx.lineTo(600, 50);
//    ctx.moveTo(0, 200);
//    ctx.lineTo(200, 200);
//    ctx.moveTo(200, 200);
//    ctx.lineTo(200, 300);
//    ctx.moveTo(200, 280);
//    ctx.lineTo(450, 280);
//    ctx.font = "18px Arial";
//    ctx.fillText("lava", 300, 300);
//    ctx.moveTo(450, 280);
//    ctx.lineTo(450, 300);
//    ctx.moveTo(450, 300);
//    ctx.lineTo(450, 200);
//    ctx.moveTo(450, 200);
//    ctx.lineTo(600, 200);
//
//    ctx.stroke();
//    
//}
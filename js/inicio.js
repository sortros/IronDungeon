

document.addEventListener('DOMContentLoaded', () => {
    

        const startButton = document.querySelector('#start');
        startButton.addEventListener('click', () => {

            document.querySelector('#imgStart').classList.add('hide');
            document.querySelector('#start').classList.add('hide');
            document.querySelector('#myCanvas').style = 'display : block';  
        })

        document.onkeydown = movement; //---es como un eventlistener, me detecta si pulso teclas----
        drawLevel1();
        drawPlayer();
        
});

     //--------------------------Dibujo de niveles---------------------
function drawLevel1() {
    var ctx = document.querySelector('#myCanvas').getContext("2d");
    ctx.moveTo(0, 275);  // la posicion del personaje no puede bajar de (0, 263)
    ctx.lineTo(600, 275);
    ctx.stroke();
}       

function drawLevel2() {
    var ctx = document.querySelector('#myCanvas').getContext("2d");
    ctx.moveTo(0, 50);
    ctx.lineTo(600, 50);
    ctx.moveTo(0, 200);
    ctx.lineTo(200, 200);
    ctx.moveTo(200, 200);
    ctx.lineTo(200, 300);
    ctx.moveTo(200, 280);
    ctx.lineTo(450, 280);
    ctx.font = "18px Arial";
    ctx.fillText("lava", 300, 300);
    ctx.moveTo(450, 280);
    ctx.lineTo(450, 300);
    ctx.moveTo(450, 300);
    ctx.lineTo(450, 200);
    ctx.moveTo(450, 200);
    ctx.lineTo(600, 200);
    ctx.stroke();  
}
function drawPlayer() { 
       // var img = document.getElementById("playerImg");
       // img.style = 'heigh : 10px' 'width';
       // ctx.drawImage(img,10,10);
        var ctx = document.querySelector('#myCanvas').getContext("2d");
        //var xPos = 5;
        //var yPos = 263;
        //ctx.rect(xPos, yPos, 10, 10);
        ctx.rect(5, 263, 10, 10);
        ctx.stroke();      
}
//------------------Movimiento del personaje-------------------------------------------------------------------------------------------------------------------------------

function movement(e) {
       //alert(e.keyCode);
    let xPos = 5;
    let yPos = 263;
    if(e.keyCode === 68){ //68---tecla d
            xPos += 20;
            //alert("hola")
            ctx.fillRect(40, 263, 10, 10)
            //ctx.stroke();
            //window.requestAnimationFrame(step);
    }
    if(e.keyCode === 65){
           newXPos = xPos -= 5;
           alert("adios")
    }
    if(e.keyCode === 32) {  //-----------por ahora nada de saltitos-----------
          for (let i=0; i<20; i++){
              clean();
              yPos -= 1;                  //-----salta para arriba--------
              ctx.rect(xPos, yPos, 10, 10);
              ctx.stroke();
          }
          for (let i=0; i<20; i++){
              clean();
              yPos += 1;                  //------salta para abajo---------
              ctx.rect(xPos, yPos, 10, 10);
              ctx.stroke();
          }    
    }  
}
function clean() {
        var ctx = document.querySelector('#myCanvas').getContext("2d");
        ctx.clearRect(0, 0, 600, 300);
}

    //function update() {
    //    clean();
    //    drawLevel1();
    //    drawPlayer();
    //    movement(e);
    //    window.requestAnimationFrame(update.bind());
    //}

    











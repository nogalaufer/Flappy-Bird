'use strict'

var pipeImg = new Image();
pipeImg.src = '../imgs/pipe12.png'

let pipe = Sprite({
    x: canvas.width,
    y: 400,

    image: pipeImg,
    scaleX: 0.2,
    scaleY: 0.2,
    
    
    dx: -1,

    update() {
        this.x += this.dx;
    }

})

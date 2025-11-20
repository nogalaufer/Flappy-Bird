'use strict'

var pipeUpImg = new Image();
pipeUpImg.src = '../imgs/pipe.up.png'

const PIPE_INTERVAL = 3.5;
let pipeTimer = 0
let pipes = []



// the top of the pipe
function makePipeUp() {  
    const maxY = 200
    const minY = 485
    const holeY = minY + Math.random() * (maxY - minY)


    let pipeUp = Sprite({
        x: canvas.width,
        y: holeY,

        image: pipeUpImg,
        scaleX: 0.2, 
        scaleY: 0.2,

        dx: -1,
        update() {
            this.x += this.dx;
        }

    })
    pipes.push(pipeUp)
}

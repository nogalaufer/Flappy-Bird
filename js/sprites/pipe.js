'use strict'

var bottomPipeImg = new Image()
bottomPipeImg.src = './imgs/pipe.top.png'
var topPipeImg = new Image()
topPipeImg.src = './imgs/pipe.bottom.png'

const PIPE_INTERVAL = 1.8
let pipeTimer = 1.5
let pipes = []


function restartPipes() {
    pipes.length = 0
}

function makePipes() {
    const BOTTOM_PIPE_MAX_Y = 200
    const BOTTOM_PIPE_MIN_Y = 420
    const TOP_PIPE_MAX_Y = -490
    const PIPE_GAP = -190

    const PIPES_SPEED = -2.5

    const randomHeight = Math.random() * (BOTTOM_PIPE_MAX_Y - BOTTOM_PIPE_MIN_Y)

    const bottomPipeHoleY = BOTTOM_PIPE_MIN_Y + randomHeight
    const topPipeholeY = TOP_PIPE_MAX_Y + bottomPipeHoleY + PIPE_GAP

    let topPipe = Sprite({
        x: canvas.width,
        y: topPipeholeY,

        image: topPipeImg,
        scaleX: 0.2,
        scaleY: 0.2,

        dx: PIPES_SPEED,
       
        update() {
            if (isGameOn) this.x += this.dx;
        }
    })

    let bottomPipe = Sprite({
        x: canvas.width,
        y: bottomPipeHoleY,

        image: bottomPipeImg,
        scaleX: 0.2,
        scaleY: 0.2,

        dx: PIPES_SPEED,

        update() {
            this.x += this.dx;
        }

    })
    pipes.push(bottomPipe, topPipe)
}

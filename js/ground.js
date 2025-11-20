'use strict'
let groundImg = new Image();
groundImg.src = './imgs/ground.frames3.png';

const groundAmination = SpriteSheet({
    image: groundImg,
    frameWidth: 566,
    frameHeight: 163,

    animations: {
        scroll: {
            frames: [0, 1, 2,],
            frameRate: 10
        }
    }
})

const ground = Sprite({
    x: 0,
    y: 484,
    scaleX: canvas.width / 566,
    scaleY: 0.8,
    animations: groundAmination.animations
})


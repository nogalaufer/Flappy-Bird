'use strict'
let groundImg = new Image();
groundImg.src = './imgs/ground.frames3.png';

const groundAmination = SpriteSheet({
    image: groundImg,
    frameWidth: 566,
    frameHeight: 163,
    // x: 0,
    // y: 485,
    // width: 400,
    // height: 2,

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
const logicGround = Sprite({
    x: 0,
    y: 484,             
    width: canvas.width,
    height: 20

})
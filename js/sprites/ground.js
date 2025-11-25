'use strict'
let groundImg = new Image();
groundImg.src = './imgs/ground.frames3.png';

function restartGround() {
    if (ground.currentAnimation) {
        ground.currentAnimation.reset()
        ground.playAnimation('scroll')
    }
}

const groundAmination = SpriteSheet({
    image: groundImg,
    frameWidth: 566,
    frameHeight: 163,


    animations: {
        scroll: {
            frames: [0, 1, 2],
            frameRate: 14,
        }
    }
})

const ground = Sprite({
  x: 0,
  y: 484,
  scaleX: canvas.width / 566,
  scaleY: 0.8,
  animations: groundAmination.animations,

  reset() {
    if (this.currentAnimation) {
      this.currentAnimation.reset()
    }

    this.playAnimation('scroll')
  }
})


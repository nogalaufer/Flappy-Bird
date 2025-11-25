'use strict'
let groundImg = new Image();
// groundImg.src = './imgs/ground.frames3.png';
groundImg.src = './imgs/ground.frames3.png';

function restartGround() {
    if (ground.currentAnimation) {
        ground.currentAnimation.reset()
        ground.playAnimation('scroll')
    }
}

const groundAmination = SpriteSheet({
    image: groundImg,
    // frameWidth: 566,
    frameWidth: 566,
    // frameHeight: 157,
    frameHeight: 163,
    // frameHeight: groundImg.height/4,


    animations: {
        scroll: {
            frames: [0, 1, 2],
            // frames: "3",
            frameRate: 14,
        }
    }
})

const ground = Sprite({
  x: 0,
  // y: 484,
  y: 487,
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


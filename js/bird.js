'use strict'

var birdImg = new Image();
birdImg.src = '../imgs/birdUp.png'

const jump = throttle(() => {
  if (isKeyDown) return
  isKeyDown = true
  bird.dy = -5.5;
}, jumpDelay)


const bird = Sprite({
  x: canvas.width / 3,
  y: canvas.height / 3,

  image: birdImg,
  scaleX: 0.1,
  scaleY: 0.1,

  dy: 0,

  update() {
    if (keyPressed('space')) {
      jump()
    }
    if (collides(logicGround, this)){
      onGameOver()
    }
    pipes.forEach(pipe => {
      if (!pipe.scored && pipe.x - this.x < 0) {
        gScore++
        pipe.scored = true

      }
      if (collides(pipe, this) ) {
     onGameOver()
      }
    })

    /*rotation: dy>0 (the bird is falling fast) → the angle returned by Math.atan2() is positive → the bird tilts downward.
    dy<0 (the bird is moving upward) → the angle is negative → the bird tilts upward.*/
    this.rotation = Math.atan2(this.dy, 11);
    this.dy += 0.3;
    this.y += this.dy;
  }
});


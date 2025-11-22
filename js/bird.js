'use strict'

var birdImg = new Image();
birdImg.src = '../imgs/birdUp.png'


function restartBird(){
  bird.x = canvas.width / 3;
  bird.y = canvas.height / 3;
  bird.dy = 0;
  bird.rotation = 0;
}

const jump = throttle(() => {
  if (isKeyDown) return
  isKeyDown = true
  bird.dy = -5.5;
}, jumpDelay)

function circleRectCollision(circle, rect) {
  const cx = circle.x;
  const cy = circle.y;

  const circleWidth = circle.width * (circle.scaleX || 1);
  const circleHeight = circle.height * (circle.scaleY || 1);

  const radius = (Math.min(circleWidth, circleHeight) / 2) * 1.1  

  const rectWidth = rect.width * (rect.scaleX || 1);
  const rectHeight = rect.height * (rect.scaleY || 1);

  const rectLeft   = rect.x;
  const rectRight  = rect.x + rectWidth;
  const rectTop    = rect.y;
  const rectBottom = rect.y + rectHeight;

  const nearestX = Math.max(rectLeft, Math.min(cx, rectRight));
  const nearestY = Math.max(rectTop, Math.min(cy, rectBottom));

  const dx = cx - nearestX;
  const dy = cy - nearestY;

  return dx * dx + dy * dy <= radius * radius;
}


const bird = Sprite({
  x: canvas.width / 3,
  y: canvas.height / 3,

  image: birdImg,
  scaleX: 0.1,
  scaleY: 0.1,
    anchor: { x: 0.5, y: 0.5 },

  dy: 0,

  update() {
    if (keyPressed('space')) {
      jump()
    }
    if (circleRectCollision(this, ground)) onGameOver()

    pipes.forEach(pipe => {
      if (!pipe.scored && pipe.x - this.x < 0) {
        pipe.scored = true
        gScore++
        
      }
      if (circleRectCollision(this, pipe)) onGameOver()

    })

    /*rotation: dy>0 (the bird is falling fast) → the angle returned by Math.atan2() is positive → the bird tilts downward.
    dy<0 (the bird is moving upward) → the angle is negative → the bird tilts upward.*/
    this.rotation = Math.atan2(this.dy, 11);
    this.dy += 0.3;
    this.y += this.dy;
  }
});


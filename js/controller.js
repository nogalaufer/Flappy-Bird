'use strict'
const { init, GameLoop, Sprite, keyPressed, initKeys } = kontra;

const { canvas } = init()
var birdImg = new Image();
birdImg.src = '../imgs/birdUp.png'


const birdWidth = canvas.width * 0.1;   // 10% מרוחב הקנבס
const birdHeight = canvas.height * 0.1;

function onInit() {
  initKeys()
keysListener()

}

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
    /*rotation: dy>0 (the bird is falling fast) → the angle returned by Math.atan2() is positive → the bird tilts downward.
    dy<0 (the bird is moving upward) → the angle is negative → the bird tilts upward.*/
    this.rotation = Math.atan2(this.dy, 11);
    this.dy += 0.3;
    this.y += this.dy;


  }

});

const loop = GameLoop({
  update: () => bird.update(),
  render: () => bird.render()
});

loop.start();

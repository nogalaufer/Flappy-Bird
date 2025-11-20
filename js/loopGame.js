'use strict'

function onInit() {
      gScore = 0
      initKeys()
      keysListener()

}

let groundImg = new Image();
groundImg.src = './imgs/ground.frames.png';

const bottomGreenLimit = SpriteSheet({
      image: groundImg,
      frameWidth: 200,
      frameHeight: 9,
      // x: 0,
      // y: 485,
      // width: 400,
      // height: 2,

      animations: {
            scroll: {
                  frames: [0,1,2,3],
                  frameRate: 10
            }
      }

})
const bottomLimit = Sprite({
      // color: '#4b433f',
      x: 0,
      y: 487,
      scaleX: 2,
      scaleY: 2.4,
   
      animations: bottomGreenLimit.animations
})
const brown = Sprite({
      color: '#4b433fdf',
      x: 0,
      y: 485,
      height:3.5,
      width:400,
      // scaleX: 2,
      // scaleY: 2.4,
   
      // animations: bottomGreenLimit.animations
})




const loop = GameLoop({
      update(dt) {
            if (!isGameOn) return
            pipeTimer += dt

            if (pipeTimer >= PIPE_INTERVAL) {
                  makePipeUp();
                  pipeTimer = 0;
            }
            bird.update()
            textScore.update()
            pipes.forEach(pipe => pipe.update())
            bottomLimit.update()



      },
      render: () => {
            // pipes.forEach(pipe => pipe.render());
            textScore.render()
            bird.render()
            bottomLimit.render()
            brown.render()
      }
});

loop.start();
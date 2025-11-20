'use strict'

function onInit() {
      gScore = 0
      initKeys()
      keysListener()

}



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
            logicGround.update()

            ground.update()



      },
      render: () => {
            pipes.forEach(pipe => pipe.render());
            textScore.render()
            bird.render()
            logicGround.render()
            ground.render()
      }
});

loop.start();
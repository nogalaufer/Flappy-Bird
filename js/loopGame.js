'use strict'

function onInit() {
      gScore = 0
      initKeys()
      keysListener()
      ground.playAnimation('scroll');

}

function onGameOver() {
      console.log('game over')
      isGameOn = false
      ground.currentAnimation.stop()
      bird.dy = bird.dy;
      pipes.forEach(pipe => {
            pipe.dx = 0, pipe.dy = 0
      })
      return
}

function keysListener() {
      window.addEventListener('keyup', e => {
            if (e.code === 'Space') {
                  isKeyDown = false
            }
      })
}

const loop = GameLoop({
      update(dt) {
            if (!isGameOn) return
            pipeTimer += dt

            if (pipeTimer >= PIPE_INTERVAL) {
                  makebottomPipe();
                  pipeTimer = 0;
            }
            bird.update()
            ground.update()
            textScore.update()
            pipes.forEach(pipe => pipe.update())

      },
      render: () => {
            pipes.forEach(pipe => pipe.render());
            textScore.render()
            ground.render()
            bird.render()
      }
});

loop.start();
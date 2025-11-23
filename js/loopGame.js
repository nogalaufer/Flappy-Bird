'use strict'


function onInit() {
      isGameOn = false;
      initKeys()
      keysListener()
      updateStartModal()
}
function onGameStart() {
      const elFadeScreen = document.querySelector('.fade-screen');
      elFadeScreen.style.opacity = 1

      setTimeout(() => {
            elFadeScreen.style.opacity = 0
            isGameOn = true
            gScore = 0
            updateStartModal()
            restartGround()
            restartPipes()
            restartBird()
            ground.playAnimation('scroll')
      }, 150);
  
}

function onGameOver() {
      console.log('game over')
      ground.currentAnimation.stop()
      pipes.forEach(pipe => {
            pipe.dx = 0,
                  pipe.dy = 0
      })

      if (bird.y = ground.y) {
            setTimeout(() => {
                  isGameOn = false
                  bird.isFalling = false
            }, 2000)
      }
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
            updateStartModal()
            console.log(isGameOn)
            if (!isGameOn) return
            pipeTimer += dt

            if (pipeTimer >= PIPE_INTERVAL) {
                  makePipes()
                  pipeTimer = 0
            }
            pipes.forEach(pipe => pipe.update())
            ground.update()
            bird.update()
            textScore.update()

      },
      render: () => {
            if (!isGameOn) return
            pipes.forEach(pipe => pipe.render())
            ground.render()
            textScore.render()
            bird.render()
      }
});

loop.start();
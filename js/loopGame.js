'use strict'


function onInit() {
      // updateStartModal()
      gScore = 0
      initKeys()
      keysListener()
      ground.playAnimation('scroll');
      restartGround()
      restartPipes()
      restartBird()
}

function onGameStart() {
      // updateStartModal()
      let elFadeScreen = document.querySelector('.fade-screen')
      elFadeScreen.style.opacity = 1
      
      setTimeout(() => {
            elFadeScreen.style.opacity = 0;
            isGameOn = true
            onInit()
      }, 10);
   
}

function onGameOver() {
      console.log('game over')
      isGameOn = false
      ground.currentAnimation.stop()
      bird.dy = bird.dy;
      pipes.forEach(pipe => {
            pipe.dx = 0,
                  pipe.dy = 0
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
            updateStartModal()
            if (!isGameOn) return
            pipeTimer += dt

            if (pipeTimer >= PIPE_INTERVAL) {
                  makebottomPipe();
                  pipeTimer = 0;
            }
            pipes.forEach(pipe => pipe.update())
            ground.update()
            bird.update()
            textScore.update()

      },
      render: () => {
            if (!isGameOn) return
            pipes.forEach(pipe => pipe.render());
            ground.render()
            textScore.render()
            bird.render()
      }
});

loop.start();
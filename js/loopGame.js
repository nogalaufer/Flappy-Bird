'use strict'

let bestScore = gameService.query() || 0


function onInit() {
      isGameOn = false
      isGameOver = false
      initKeys()
      initPointer()
      keysListener()
}

function onBackToStart() {
      isGameOver = false
      updateGameOverModal()
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

function renderSummary() {
      const currScore = gScore / 2
      if (currScore > bestScore) {
            gameService.post(currScore)
            bestScore = currScore
            let elMedal = document.querySelector('.medal')
            elMedal.style.backgroundColor = 'gold'
      }

      let elCurrScore = document.querySelector('.curr-score')
      elCurrScore.innerText = currScore
      let elHighScore = document.querySelector('.high-score')
      elHighScore.innerText = bestScore
}

function onGameOver() {
      ground.currentAnimation.stop()
      isGameOver = true

      pipes.forEach(pipe => {
            pipe.dx = 0,
                  pipe.dy = 0
      })

      if (bird.y >= ground.y) {
            setTimeout(() => {
                  updateGameOverModal()
                  renderSummary()
                  isGameOn = false
                  bird.isFalling = false
            }, 500)
      }
      return
}

function keysListener() {
      window.addEventListener('keyup', e => {
            if (e.code === 'Space') {
                  isKeyDown = false
            }
      })
      window.addEventListener('mouseup', () => {
            isKeyDown = false
      })
      window.addEventListener('touchend', () => {
            isKeyDown = false
      })
}

const loop = GameLoop({
      update(dt) {
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
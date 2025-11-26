'use strict'



function onInit() {
      isGameOn = false
      isGameOver = false
      isGetReadyOn = false

      initKeys()
      initPointer()
      keysListener()
}

function onBackToStart() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      isGameOver = false
      updateGameOverModal()
      updateStartModal()
}

function onGameStart() {
      const elFadeScreen = document.querySelector('.fade-screen');
      elFadeScreen.style.opacity = 1
      setTimeout(() => {
            elFadeScreen.style.opacity = 0
            // reset all
            isGameOn = true
            isGetReadyOn = true
            gScore = 0
            updateStartModal()
            ground.reset()
            tapAndPointer.reset()
            restartPipes()
            bird.reset()
            loop.start()
            ground.playAnimation('scroll')
      }, 150);
}



function renderSummary() {
      // in game-over modal
      const COUNT_UP_DURATION = 400
      const currScore = gScore / 2
      let elHighScore = document.querySelector('.high-score')
      elHighScore.innerText = bestScore

      let elCurrScore = document.querySelector('.curr-score')
      countUp(elCurrScore, currScore, COUNT_UP_DURATION)

      if (currScore > bestScore) {
            bestScore = currScore
            gameService.post(currScore)
            setTimeout(() => {
                  document.querySelector('.number-one').style.display = 'flex'
                  document.querySelector('.medal').style.backgroundColor = 'gold'
                  document.querySelector('.new-score').style.opacity = 1
                  elHighScore.innerText = bestScore
            }
                  , COUNT_UP_DURATION)
      } else {
            document.querySelector('.medal').style.backgroundColor = ''
            document.querySelector('.new-score').style.opacity = 0
            document.querySelector('.number-one').style.display = 'none'
      }


}

function onGameOver() {
      loop.stop()
      isGameOver = true
      setTimeout(() => {
            updateGameOverModal()
            renderSummary()
            isGameOn = false
            bird.isFalling = false
      }, 500)
}


const loop = GameLoop({
      update(dt) {
            if (isGameOn & isGetReadyOn ) {
                  tapAndPointer.update()
                  bird.update()
            }
            if (!isGameOn & !isGetReadyOn) return

            if (isGameOn & !isGetReadyOn & !bird.isFalling ) {
                  pipeTimer += dt

                  if (pipeTimer >= PIPE_INTERVAL ) {
                        makePipes()
                        pipeTimer = 0
                  }
                  pipes.forEach(pipe => pipe.update())
                  ground.update()
                  textScore.update()
            }
            bird.update()
      },
      render: () => {

            if (isGameOn & isGetReadyOn) {
                  tapAndPointer.render()
                     bird.render()
            }
            if (!isGameOn & isGetReadyOn) return

            if (isGameOn & !isGetReadyOn) {
                  pipes.forEach(pipe => pipe.render())
                  ground.render()
                  bird.render()
                  textScore.render()
            }
      }
});

loop.start();
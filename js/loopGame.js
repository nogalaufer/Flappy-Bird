'use strict'


function onInit() {
    isGameOn = false;    // <<< חובה!
    gScore = 0;
    initKeys();
    keysListener();
    updateStartModal();  // <<< חובה להציג את המסך
}
function onGameStart() {
    const elFadeScreen = document.querySelector('.fade-screen');

    // אם יש fade-screen → נעשה הבזק
    if (elFadeScreen) {
        elFadeScreen.style.opacity = 1;

        setTimeout(() => {
            elFadeScreen.style.opacity = 0;

            isGameOn = true;
            updateStartModal();

            ground.playAnimation('scroll');
            restartGround();
            restartPipes();
            restartBird();
        }, 150);
    }

    // אם אין fade-screen → פשוט להתחיל
    else {
        isGameOn = true;
        updateStartModal();
        ground.playAnimation('scroll');
        restartGround();
        restartPipes();
        restartBird();
    }
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
    updateStartModal();  // <<< חובה
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
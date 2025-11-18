'use strict'

function onInit() {
initKeys()
keysListener()

}

const loop = GameLoop({
  update: () => {
        if (isGameOn){
    pipe.update(),
    bird.update()}
        },
  render: () => {
        pipe.render()
        bird.render()}
});

loop.start();
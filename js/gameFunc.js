'use strict'
const { init, GameLoop, Sprite, keyPressed, initKeys,collides } = kontra;
const { canvas } = init()

let isKeyDown = false
const jumpDelay = 150
let isGameOn= true


function keysListener() {
    window.addEventListener('keyup', e => {
        if (e.code === 'Space') {
            isKeyDown = false
        }
    })
}


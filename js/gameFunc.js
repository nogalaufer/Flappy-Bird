'use strict'
const { init, GameLoop, Sprite, keyPressed, initKeys,initPointer, collides, Text, SpriteSheet ,pointerPressed} = kontra;
const { canvas } = init()

let isKeyDown = false
const jumpDelay = 150
let isGameOn = false
let gScore = 0

function updateStartModal() {
    const elModal = document.querySelector('.start-modal')
    if (isGameOn) {
        elModal.classList.add('hidden')
    } else {
        elModal.classList.remove('hidden')
    }
}

// function keysListener() {
//     window.addEventListener('keyup', e => {
//         if (e.code === 'Space') {
//             isKeyDown = false
//         }
//     })
// }


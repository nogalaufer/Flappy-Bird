'use strict'
const { init, GameLoop, Sprite, keyPressed, initKeys, initPointer, collides, Text, SpriteSheet, pointerPressed } = kontra;
const { canvas } = init()

let isKeyDown = false
const jumpDelay = 150
let isGameOn = false
let isGameOver = false
let gScore = 0

function updateStartModal() {
    const elModal = document.querySelector('.start-modal')
    elModal.classList.toggle('hidden', isGameOn)
}

function updateGameOverModal() {
    const elModal = document.querySelector('.game-over-modal')
  elModal.classList.toggle('hidden', !isGameOver)
}

// function keysListener() {
//     window.addEventListener('keyup', e => {
//         if (e.code === 'Space') {
//             isKeyDown = false
//         }
//     })
// }


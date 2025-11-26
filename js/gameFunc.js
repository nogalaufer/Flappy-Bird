'use strict'
const { init, GameLoop, Sprite, keyPressed, initKeys, initPointer, collides, Text, SpriteSheet, pointerPressed } = kontra;
const { canvas, context } = init()

let bestScore = gameService.query()
let isKeyDown = false
const jumpDelay = 150
let isGameOn = false
let isGameOver = false
let isGetReadyOn = false
let gScore = 0
let isSoundOn = true
let hasStarted = false


function updateStartModal() {
      const elModal = document.querySelector('.start-modal')
      elModal.classList.toggle('hidden', isGameOn)
}

function updateGameOverModal() {
      const elModal = document.querySelector('.game-over-modal')
      elModal.classList.toggle('hidden', !isGameOver)
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

// bird sound
function loadSound(src) {
      const sound = new Audio(src);
      sound.preload = 'auto';
      return sound;
}

function playSound(sound) {
      const s = sound.cloneNode()
      s.play()
}
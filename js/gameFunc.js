'use strict'

let prevPress = false
let isDown = false
const jumpDelay = 150

const jump = throttle(() => {
        if (isDown) return
        isDown = true
        bird.dy = -5.5;
}, jumpDelay)

function keysListener() {
    window.addEventListener('keyup', e => {
        if (e.code === 'Space') {
            isDown=false
        }
    })
}
 

'use strict'

let isCanJump = true
let isSpacePressed = false
let isSpaceUp = true
// let prevPress={prev: false, current:false}
let prevPress = false

const jumpDelay = 150

const jump = throttle(() => {
    if (isSpacePressed === true & isCanJump === true) {
         isSpacePressed = true
        isCanJump = false
        //  console.log('keysListener',keysListener())
        bird.dy = -5.5;
        setTimeout(() => {
            isCanJump = true
                isSpacePressed = false
        }, 10)

    } else return


}, jumpDelay)

function keysListener() {
    window.addEventListener('keydown', e => {
        if (e.code === 'Space') {
            isSpacePressed = true;
            // isSpaceUp= false;
        } 
    });
    window.addEventListener('keyup', e => {
        if (e.code === 'Space') {
            isSpaceUp= true;
            isSpacePressed = false;

            console.log(isSpaceUp)
        } if(isSpacePressed === true) {
            isSpaceUp = false
            isSpacePressed = false
            console.log(isSpaceUp)

        }
    });
}
 
// updatePressLog()
// function updatePressLog() {
//     if (prevPress === false & isSpacePressed === true) prevPress = true
//     if (prevPress === true & isSpacePressed === false)prevPress = false
//         console.log(prevPress,isSpacePressed )

// }
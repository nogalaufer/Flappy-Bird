'use strict'
let textScore = Text({
    text: gScore,
    font: '48px "Jersey 10"',
    color: 'white',
    x: canvas.width/2,
    y: 20,
    anchor: { x: 0.5, y: 0.5 },
    textAlign: 'center',
    strokeColor: 'black',
    lineWidth:2,

    update() {
        this.text = gScore.toString()
    }
})

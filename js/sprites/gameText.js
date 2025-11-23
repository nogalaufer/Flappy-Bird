'use strict'



let textScore = Text({
    text: gScore,
    font: '48px "Jersey 10"',
    color: 'white',
    x: canvas.width / 2,
    y: 20,
    anchor: { x: 0.5, y: 0.5 },
    textAlign: 'center',
    strokeColor: 'black',
    lineWidth: 3,

    update() {
        /* "/2" – because each pair of pipes counts as a single obstacle,
          and if we score each pipe separately, we need to divide by 2 */
          // gScore= gScore/2
        this.text = gScore.toString() / 2
    }
})

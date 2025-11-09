'use strict'

const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
const size = 10
var birdLoc


function onInit() {
  drawGrid()
  createBird()

}

function drawGrid() {
  ctx.strokeStyle = '#ccc'
  ctx.lineWidth = 0.5

  // קווים אנכיים
  for (let x = 0; x <= canvas.width; x += size) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
  }

  // קווים אופקיים
  for (let y = 0; y <= canvas.height; y += size) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
  }
}
const bird = new Image()

function createBird() {
  bird.src = './imgs/birdUp.png'
  console.log(bird.height)
  console.log(bird.width)

  bird.onload = () => {
    birdLoc = ctx.drawImage(bird, canvas.width / 3, canvas.height / 2, 100, 100)
  }

}

function move() {
  console.log(ctx)
  if (bird) {
    // ctx.rotate(3)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGrid()
    ctx.drawImage(bird, canvas.width / 3, canvas.height / 2 - 10, 100, 100)
    ctx.save()
    // ctx.translate(0,  canvas.height / 2-5)
    // ctx.drawImage(bird, -width / 2, -height / 2, width, height)
    // ctx.restore()

  }
  else console.log("ni")
}
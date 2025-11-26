'use strict'
var tapAndPointerImg = new Image();
tapAndPointerImg.src = './imgs/tapAndPointer1.png'



const tapAndPointer = Sprite({
    x: canvas.width / 1.7,
    y: canvas.height / 2.2,

    image: tapAndPointerImg,
    scaleX: 0.1,
    scaleY: 0.1,
    anchor: { x: 0.5, y: 0.5 },

    dy: 0,
    opacity: 1,
    isFading: false,

    reset() {
        this.x = canvas.width / 1.7
        this.y = canvas.height / 2.2
        this.opacity = 1
    },

    update() {
        if (isGetReadyOn && (keyPressed('space') || pointerPressed('left'))) {
            this.isFading = true;

        }
        if (this.isFading) {

            this.opacity -= 0.05

            if (this.opacity <= 0) {
                this.opacity = 0;
                this.isFading = false;
                this.ttl = 0;
                isGetReadyOn = false

            }
        }

    }
})



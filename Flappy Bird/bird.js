let startingBirdX = 50;
let moveY;

class Sprite {
    constructor(animation, speed, x, y) {
        this.dy = 2.75
        this.animation = animation;
        this.speed = speed;
        this.x = x
        this.y = y
        this.index = 0;
        this.len = this.animation.length;
    }
    show() {
        image(this.animation[this.index % this.len], this.x, this.y, 75, 75);
    }
    animate() {
        this.y += this.dy

        for(let i = 0; i < arrayTopBlocks.length; i++) {
            if(this.x == arrayTopBlocks[i].x) {
                scoreSound.play()
                score++
            }
            if(this.x + 64 == arrayTopBlocks[i].x && this.y + 6 <= (arrayTopBlocks[i].y + arrayTopBlocks[i].height)) {
                deathSound.play()
                reset()
            }
        }
        for(let i = 0; i < arrayBottomBlocks.length; i++) {
            if(this.x + 64 == arrayBottomBlocks[i].x && this.y + 64 >= arrayBottomBlocks[i].y) {
                deathSound.play()
                reset()
            }
        }
        // Checking if it hit the ground
        if(this.y + 64 >= window.innerHeight) {
            deathSound.play()
            reset()
        } 
        this.index += this.speed;
    }
};

function keyPressed() {
    if(keyCode == 32) {
        birdJump.play(-10)
        allBirdAnimations.y -= 80
    }
}
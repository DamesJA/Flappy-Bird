let yGap = 200
let maxYFromGrass = 50

let topBlockWidth = 50;
let topBlockSpeed = -4
let topBlockMinHeight = 150
function generateNumber() { // used to set max and min height
    let number = Math.floor(Math.random() * window.innerHeight)
    if(number < (window.innerHeight / 5)) {
        return (window.innerHeight / 5)
    } else if(number > window.innerHeight - grassHeight - maxYFromGrass - yGap) {
        return (window.innerHeight - grassHeight - maxYFromGrass - yGap)
    } else {
        return number
    }
}
class TopBlock {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = topBlockWidth
        this.height = generateNumber()
    }
    draw() {
        // fill('#11DE11')
        rect(this.x, this.y, this.width, this.height)
        noFill()
    }
    animate() {
        this.x += topBlockSpeed
    }
}


let bottomBlockWidth = 50;
let bottomBlockMinHeight = 150
let bottomBlockSpeed = -4
function generateBYpos() {
    let number;
    for(let i = 0; i < arrayTopBlocks.length; i++) {
        number = arrayTopBlocks[i].height + yGap
    }
    return number
}
class BottomBlock {
    constructor(x, y) {
        this.x = x
        this.y = y // The randomized number
        this.width = bottomBlockWidth
        this.height = window.innerHeight - this.y
    }
    draw() {
        // fill('#11DE11')
        rect(this.x, this.y, this.width, this.height)
        noFill()
    }
    animate() {
        this.x += bottomBlockSpeed
    }
}

let startingX = window.innerWidth - 50

// CREATING BLOCKS
function createTopBlock() {
    arrayTopBlocks.push(new TopBlock(startingX + topBlockWidth, 0))
}
function createBottomBlock() {
    arrayBottomBlocks.push(new BottomBlock(startingX + bottomBlockWidth, generateBYpos()))
}

// PUTTING TO ARRAY EVERY () SECONDS
setInterval(createTopBlock, 3000)
setInterval(createBottomBlock, 3000)
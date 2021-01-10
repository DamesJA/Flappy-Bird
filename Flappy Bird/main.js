let stopButton = document.getElementById('stopButton')

// Creating Sound Variables
let birdJump;
let deathSound;
let scoreSound;

// COUNTING SCORE
let score = 0
let scoreText;

let grassHeight = 178

let arrayTopBlocks = []
let arrayBottomBlocks = []

// BIRD
let bird;
let birdSprite1;
let birdSprite2;
let birdSprite3;
let birdSprite4;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

// VIDEO
let spritesheet;
let spritedata;
let animation = []

function preload() {
    spritesheet = loadImage('sprites/flappyBirdDesignFinal.png')
    backgroundImage = loadImage('background/flappyBirdBackground.png')
    // bird = loadImage('sprites/flappyBird.png')

     // GETTING ALL IMAGES FROM SPRITE
    //  birdSprite1 = bird.get(0, 0, 32, 32);
    //  birdSprite2 = bird.get(32, 0, 32, 32);
    //  birdSprite3 = bird.get(0, 32, 32, 32);
    //  birdSprite4 = bird.get(32, 32, 32, 32);

    // SOUNDS
    birdJump = loadSound('sounds/birdJump.wav')
    deathSound = loadSound('sounds/deathSound.wav')
    deathSound.setVolume(.3)
    scoreSound = loadSound('sounds/scoreSound.mp3')
    scoreSound.setVolume(.15)
};
let allBirdAnimations;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0, 0)
    canvas.style('z-index', '-1')

    let img1 = spritesheet.get(0, 0, 32, 32)
    let img2 = spritesheet.get(32, 0, 32, 32)
    let img3 = spritesheet.get(64, 0, 32, 32)
    let img4 = spritesheet.get(0, 32, 32, 32)
    let img5 = spritesheet.get(32, 32, 32, 32)
    let img6 = spritesheet.get(64, 32, 32, 32)
    let img7 = spritesheet.get(0, 64, 32, 32)
    
    animation.push(img1)
    animation.push(img2)
    animation.push(img3)
    animation.push(img4)
    animation.push(img5)
    animation.push(img6)
    animation.push(img7)

    allBirdAnimations = new Sprite(animation, 1, 200, (window.innerHeight / 2) - 64);

    masterVolume(8)
 };

function reset() { 
    arrayTopBlocks = []
    arrayBottomBlocks = []
    allBirdAnimations = new Sprite(animation, 1, 200, (window.innerHeight / 2) - 64)
    score = 0
}

function draw() {
    background(backgroundImage);

        for(let i = 0; i < arrayTopBlocks.length; i++) {
            arrayTopBlocks[i].draw()
            arrayTopBlocks[i].animate()
        }
        for(let i = 0; i < arrayBottomBlocks.length; i++) {
            arrayBottomBlocks[i].draw()
            arrayBottomBlocks[i].animate()
        }
    
        allBirdAnimations.show()
        allBirdAnimations.animate()

    fill('green')
    textSize(75)
    scoreText = text(`Score: ${score}`, window.innerWidth - (window.innerWidth / 5) , 100)
    noFill()
};


// stopButton.addEventListener('click', function() {
//     noLoop()
// });
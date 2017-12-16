function sprite(options){
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.loop = options.loop;

    // Initial sprite rendering
    that.render = function () {
        that.context.clearRect(0, 0, that.width, that.height);
        if (that.initial){
            that.initial = false;

        }
        // context.drawImage(img, sourcex, sourcey, sourcewidth, sourceheight, destinationx, destinationy, destinationwidth, destinationheight)
        that.context.drawImage(
            that.image,
            frameIndex * that.width / numberOfFrames,
            0,
            that.width / numberOfFrames,
            that.height,
            0,
            0,
            that.width / numberOfFrames,
            that.height);
    };
    // Updating sprite frame
    that.update = function () {
        tickCount++;

        if(tickCount > ticksPerFrame) {
            tickCount = 0;

            if (frameIndex < numberOfFrames - 1) {
                frameIndex++;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    }

    return that;
}

var canvas = document.getElementById("animTest");
var ctx = canvas.getContext("2d");
canvas.width = 2452;
canvas.height = 3064;

var hrzMoveLeft = sprite({
    context: canvas.getContext("2d"),
    width: 920,
    height: 90,
    image: leftCarriage,
    numberOfFrames: 5,
    ticksPerFrame: 7,
    initial: true,
    loop: true
});

var hrzMoveRight = sprite({
    context: canvas.getContext("2d"),
    width: 920,
    height: 90,
    image: rightCarriage,
    numberOfFrames: 5,
    ticksPerFrame: 7,
    loop: true
});

leftCarriage.onload = canvas.drawImage(leftCarriage.src, $castleBlackPos[0], $castleBlackPos[1]);
// leftCarriage.onload = hrzMoveLeft.render;
// rightCarriage.onload = hrzMoveRight.render;

function gameLoop(){
    window.requestAnimationFrame(gameLoop);

    var spriteToUse = hrzMoveLeft;
    spriteToUse.update();
    spriteToUse.render();
    }

leftCarriage.addEventListener('load', gameLoop);
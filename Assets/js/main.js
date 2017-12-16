$(document).ready(function () {
    
    var horizCarriage = new Image();
    horizCarriage.src = './Assets/img/horizCarriage-transparent.png';

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
        that.render = function () {
            that.context.clearRect(0, 0, that.width, that.height);
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
    canvas.width = 184;
    canvas.height = 90;

    var hrzMove = sprite({
        context: canvas.getContext("2d"),
        width: 920,
        height: 90,
        image: horizCarriage,
        numberOfFrames: 5,
        ticksPerFrame: 7,
        loop: true
    });


    horizCarriage.onload = hrzMove.render;

    function gameLoop(){
        window.requestAnimationFrame(gameLoop);

        hrzMove.update();
        hrzMove.render();
    }

    horizCarriage.addEventListener('load', gameLoop);
});

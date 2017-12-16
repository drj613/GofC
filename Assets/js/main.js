$(document).ready(function () {
    
    // Prevent map area clicks from refreshing the page
    $('map[name=map] area').on('click',function(e){
        e.stopPropagation();
        return false;
    });

    var leftCarriage = new Image();
    leftCarriage.src = './Assets/img/horizCarriage-transparent.png';

    var rightCarriage = new Image();
    rightCarriage.src = './Assets/img/horizCarriageRt-transparent.png';

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
    canvas.width = 2452;
    canvas.height = 3064;

    var hrzMove = sprite({
        context: canvas.getContext("2d"),
        width: 920,
        height: 90,
        image: leftCarriage,
        numberOfFrames: 5,
        ticksPerFrame: 7,
        loop: true
    });


    leftCarriage.onload = hrzMove.render;

    function gameLoop(){
        window.requestAnimationFrame(gameLoop);

        hrzMove.update();
        hrzMove.render();
    }

    leftCarriage.addEventListener('load', gameLoop);
});

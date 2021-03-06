// 1) Add popup on city click that allows option to go or cancel (maybe see CURRENT price?)
// 2) If/else of currentPos.x - destinationPos.x to decide which avatar to use
// 3) incrementally change position of sprite until reaching destination (JQUERY .ANIMATE() move destPos.x  currPos.X, slow)
// 4) set "choke points" on map, where canvas has to go to avoid jankiness going through bays and whatnot
// 5) functions to skip and stop animation
$(document).ready(function () {


    //Coordinates for cities on areamap
    var $castleBlackPos = $("#castleBlack").attr('coords').split(',');
    var $winterfellPos = $("#winterfell").attr('coords').split(',');
    var $theTwinsPos = $("#theTwins").attr('coords').split(',');
    var $pykePos = $("#pyke").attr('coords').split(',');
    var $theEyriePos = $("#theEyrie").attr('coords').split(',');
    var $harrenhalPos = $("#harrenhal").attr('coords').split(',');
    var $dragonstonePos = $("#dragonstone").attr('coords').split(',');
    var $kingsLandingPos = $("#kingsLanding").attr('coords').split(',');
    var $pentosPos = $("#pentos").attr('coords').split(',');

    // Init sprite sheets for carriage
    var leftCarriage = new Image();
    leftCarriage.src = './Assets/img/horizCarriage-transparent.png';
    leftCarriage.id = 'leftCarriage';

    var rightCarriage = new Image();
    rightCarriage.src = './Assets/img/horizCarriageRt-transparent.png';
    rightCarriage.id = 'rightCarriage';

    function sprite(options) {
        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;

        that.position = options.position;
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        // Sprite rendering
        that.render = function (x, y) {
            that.context.clearRect(x, y, that.width, that.height);
            // context.drawImage(img, sourcex, sourcey, sourcewidth, sourceheight, destinationx, destinationy, destinationwidth, destinationheight)
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                x,
                y,
                that.width / numberOfFrames,
                that.height);
        };
        // Updating sprite frame
        that.update = function () {
            tickCount++;

            if (tickCount > ticksPerFrame) {
                tickCount = 0;

                if (frameIndex < numberOfFrames - 1) {
                    frameIndex++;
                } else if (that.loop) {
                    frameIndex = 0;
                }
            }
        };
    }

        var hrzMoveLeft = sprite({
            context: canvas.getContext("2d"),
            width: 920,
            height: 90,
            image: leftCarriage,
            numberOfFrames: 5,
            ticksPerFrame: 10,
            initial: true,
            loop: true
        });

        var hrzMoveRight = sprite({
            context: canvas.getContext("2d"),
            width: 920,
            height: 90,
            image: rightCarriage,
            numberOfFrames: 5,
            ticksPerFrame: 10,
            loop: true
        });

        var canvas = document.getElementById("animTest");

        var currentPosition = {
            x: $kingsLandingPos[0],
            y: $kingsLandingPos[1]
        };

        var spriteToUse = hrzMoveLeft;



        function gameLoop() {
            window.requestAnimationFrame(gameLoop);

            spriteToUse.update();
            spriteToUse.render(currentPosition.x, currentPosition.y);
        }


        leftCarriage.addEventListener('load', gameLoop);


        // Trigger movement of sprite
        $(".clickable").on("click", function () {
            var clickedPos = $(this).attr("coords").split(",");


            if (currentPosition.x - clickedPos[0] > 0) {
                spriteToUse = hrzMoveLeft;
            } else {
                spriteToUse = hrzMoveRight;
            }
            ctx.clearRect(currentPosition.x, currentPosition.y, 184, 90);
            currentPosition.x = clickedPos[0];
            currentPosition.y = clickedPos[1];


            var modalId = "#" + $(this).attr("id") + "modal";


        });

    });
$(document).ready(function () {
    
    // Prevent map area clicks from refreshing the page
    $('map[name=map] area').on('click',function(e){
        e.stopPropagation();
        return false;
    });

    // Init sprite sheets for carriage
    var leftCarriage = new Image();
    leftCarriage.src = './Assets/img/horizCarriage-transparent.png';

    var rightCarriage = new Image();
    rightCarriage.src = './Assets/img/horizCarriageRt-transparent.png';

    //Coordinates for cities on areamap
    var $castleBlackPos = $("#castleBlack").attr('coords').split(',');
    var $winterfellPos = $("#winterfell").attr('coords').split(',');
    var $theTwinsPos = $("#theTwins").attr('coords').split(',');
    var $pykePos = $("#pyke").attr('coords').split(',');
    var $theEyriePos = $("#theEyrie").attr('coords').split(',');
    var $harrenhalPos = $("#harrenhal").attr('coords').split(',');
    var $dragonstonePos = $("#dragonstone").attr('coords').split(',');
    var $kingsLandingPos = $("#kingsLanding").attr('coords').split(',');
    var $firstMenPos = $("#firstMen").attr('coords').split(',');
    var $pentosPos = $("#pentos").attr('coords').split(',');  

    
});

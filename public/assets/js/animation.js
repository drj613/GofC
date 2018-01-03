console.log('animation.js loaded');

//Run once code

$(document).one('ready', function() {

    coordrecalc();

});
   
   


$(window).resize(function() {
    
    coordrecalc();


       
});

function coordrecalc () {
    var $map = $('#map');
    //Sets ratio to calculate coordinates
    console.log($(document).width());
    var ratio = $(document).width() / 1560;

    // Runs update on each element in the map
    $map.children('.clickable').each(function () {

    var $coords =  $(this).attr('data-coords').split(',');

    var coordsstring = '';

    for (i=0; i < $coords.length; i++) {
        $coords[i] = parseInt($coords[i]*ratio);

        if (i===0) {
            coordsstring += $coords[i];
        }
        else {
            coordsstring += ', ' + $coords[i];
        }

    }

    //Resets coordinates back to the element
    $(this).attr('coords',coordsstring);

    });

}

function movecarriage(destination, distance,timefactor) {
    var $carriage = $('#carriage');
    var ratio = $(document).width() / 1560;

    var leftorigin = parseInt($carriage.css('left').substr(0,$carriage.css('left').length-2));

    // Time adjustment variable, designed for travel from The Wall to Winterfell to take three weeks of in game time
    var constant = 4.74;

    var time = (distance * ratio) * constant / timefactor;

    console.log(time);


    var coords = $(destination).attr('data-carriage').split(',');

    if (leftorigin > parseInt(coords[0]*ratio)) {
        $carriage.attr('src','./assets/img/horses-left.gif');
    }
    else {
        $carriage.attr('src','./assets/img/horses-right.gif');
    }
    
    var targetx = parseInt(coords[0])*ratio;
    var targety = parseInt(coords[1])*ratio;
    console.log(distance);

    console.log('Target left: ' + targetx);
    console.log('Target top: ' + targety);

    $carriage.animate({
        left: parseInt(coords[0]*ratio),
        top: parseInt(coords[1]*ratio)
    }, time, function() {
        $carriage.attr('src','./assets/img/horses-left-still.png');
        console.log('Left: ' + $carriage.css('left'));
        console.log('Top: ' + $carriage.css('top'));
    });

    
}

function placeplayer(player) {

    var $carriage = $('#carriage');
    var ratio = $(document).width() / 1560;

    var destination = $('area[data-cityid=\'' + player.cityid + '\']').attr('data-carriage').split(',');

   
    console.log(destination);

    $carriage.css({
        top: parseInt(destination[1]*ratio),
        left: parseInt(destination[0]*ratio)
    });



    
}
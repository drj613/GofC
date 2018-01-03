console.log('animation.js loaded');

$(document).ready(function () {
    
   console.log($(document).width());
   console.log($(document).height());

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

function movecarriage(destination) {
    var $carriage = $('#carriage');
    var ratio = $(document).width() / 1560;

    var coords = $(destination).attr('data-carriage').split(',');

    

    $carriage.animate({
        left: parseInt(coords[0]*ratio),
        top: parseInt(coords[1]*ratio)
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
    })



    
}
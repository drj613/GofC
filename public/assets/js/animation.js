console.log('animation.js loaded');

$(document).ready(function () {
    
   console.log($(document).width());
   console.log($(document).height());

   coordrecalc();
});

$(window).resize(function() {
    console.log('Resize');
    console.log($('#castleBlack').attr('coords'));
    coordrecalc();

    setTimeout(function() {
        console.log($('#castleBlack').attr('coords'));
    },2000);

    
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
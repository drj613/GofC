

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
    
    var ratio = findratio ();
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

function movecarriage(routepoint, player) {
    var $carriage = $('#carriage');
    var ratio = findratio();

    //Possible variable for speed up time
    var timefactor = 1;

    //Get current position from the carriage itself
    var originx = parseInt($carriage.css('left').substr(0,$carriage.css('left').length-1));
    
    var originy = parseInt($carriage.css('top').substr(0,$carriage.css('left').length-1));
    

    //Find coordinates of routepoint destination
    var $city = $('area[data-cityid=\'' + routepoint + '\']');
    var coords = $city.attr('data-carriage').split(',');

    var destx = parseInt(coords[0]*ratio);
    var desty = parseInt(coords[1]*ratio);

    //Calculate distance via pythagorean theorum
    
    var distance = Math.sqrt(Math.pow(originx-destx,2) + Math.pow(originy-desty,2));

    // Time adjustment variable, designed for travel from The Wall to Winterfell to take three weeks of in game time
    var constant = 8.06;

    var time = (distance) * constant / timefactor;

    if (originx > destx) {
        $carriage.attr('src','./assets/img/horses-left.gif');
    }
    else {
        $carriage.attr('src','./assets/img/horses-right.gif');
    }
    
    $carriage.animate({
        left: destx,
        top: desty
    }, time, function() {
        //After movement completed, send back to route function
        
        route();       
        
    });

    
}

function placeplayer(player) {

    var $carriage = $('#carriage');

    var ratio = findratio();

    var destination = $('area[data-cityid=\'' + player.cityid + '\']').attr('data-carriage').split(',');

  

    var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
   
    var placex = parseInt(destination[0]) * ratio;
    var placey = parseInt(destination[1]) * ratio;

    
    
    
    $carriage.css({
        top: placey,
        left: placex
    });



    
}

//Determines ratio to be applied to coordinates, built off initial 1560px width map
function findratio () {
    // Determines if scrollbar exists to remove it from calculations
    var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

    
    
    if (hasScrollbar) {
        //Subtract width of scrollbar from ratio calculation
        var ratio = ($(document).width()-17)/1560;
    }
    else {
        var ratio = $(document).width()/1560;
    }

   
    return ratio;
}
console.log('animation.js loaded');

$(document).ready(function () {
    
    setTimeout(function () {
    var $image = $('#carriage');
    var $div = $('.jquery');

    console.log($image);

    $image.animate({top: '500px'});
    },2000);
});
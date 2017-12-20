$(document).ready(function () {
    
    // Prevent map area clicks from refreshing the page
    $('map[name=map] area').on('click',function(e){
        e.stopPropagation();
        return false;
    });

    
    

    
});

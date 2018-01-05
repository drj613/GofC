$(document).ready(function(){


    $("#splash-username").hide();


    $("#agree").click(function(){
        $("#splash-username").toggle();
    });


    $('#namesubmit').click(function() {

        event.preventDefault();

        var username = $('#username').val();

        //Check existence of username in db
        $.ajax('/player/'+ username, {
            type: 'GET'
        }).then( function(data) {

        if (data === null) {

           $('#splash-username').append("<p>We have no record of this username. Would you like to create a new player?</p>");
           $('#splash-username').append('<button id=\'create\'>Yes</button>    <button class=\'cancel\'>No</button>');
           
        } else {

            $('#splash-username').append("<p>We already have that username on record. Would you like to continue?</p>");
            $('#splash-username').append('<button id=\'continue\'>Yes</button>    <button class=\'cancel\'>No</button>');  
        }

    });

    });

    $(document).on('click','#create', function() {
        var username = $('#username').val();

        $.ajax('/player/' + username, {
            type: 'POST'
        }).then(function(data) {
            window.location.href = '/' + username;
        });
    });

    $(document).on('click','#continue', function() {
        var username = $('#username').val();
        window.location.href= '/' + username;
    });

    $(document).on('click','.cancel', function() {
        document.location.reload();
    });
});

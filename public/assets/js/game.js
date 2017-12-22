//Set username in background for testing purposes
var playername = 'SamplePlayer';

// Create empty global variable to hold player data
var player;

$(document).ready(function () {
    // Determine player for current session
    getPlayer();
});

function getPlayer() {

    $.ajax('/player/' + playername, {
        type: 'GET'
    }).then( (data) => {

        if (data === null) {

            $.ajax('/player/' + playername, {
                type: 'POST'
            }).then( (data) => {
                console.log('Added new player');
                console.log(data);
            });
        }
        else {

            console.log('Found existing player');
            console.log(data);

        }


    })

}
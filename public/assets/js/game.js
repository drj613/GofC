//Set username in background for testing purposes
var playername = location.pathname.substr(1);

// set up empty variable to receive events data (only called once)
var events;


// Empty global variable to hold player data
var player;

//  Empty global variables to hold clock interval and timecount 
var clockid;

//Do not confuse timecounter with player.timecount. Timecounter is measured in deciseconds (10 for each second)
//player.timecount is measured in seconds and is how time will be reflected in and passed to the database
//with each second in player.timecount = one week of in-game time.
var timecounter = 0;

// Toggles view of inventory
function showHideInv(){
    if($('.dBody').hasClass('hidden')){
        $('.dBody').removeClass('hidden');
    } else {
        $('.dBody').addClass('hidden');
    }
}

// Get's most recent player data from db
function updatePlayer() {

    return new Promise(function (res, rej) {

        $.ajax('/player/' + playername, {
            type: 'GET'
        }).then((data) => {

            player = data;
            displayPlayer(player);


            res(data);
        });



    });
};

function findtotal(playerdata) {
    return playerdata.grain + playerdata.fish + playerdata.cloth + playerdata.metal + playerdata.silk + playerdata.wood +
        playerdata.weapons + playerdata.gems + playerdata.medicine + playerdata.poison + playerdata.dragon_glass + playerdata.wine;
}

// Updates player display
function displayPlayer(playerdata) {

    var url = '/game/priceupdate/' + playerdata.username;

    console.log(url);

    $.ajax(url, {
        type: 'GET'
    }).then(function (data) {
        // Calculate total inventory
        var totalinventory = findtotal(playerdata);

        //Get city data from map
        var currentcity = $('area[data-cityid=\'' + playerdata.cityid + '\']').attr('alt');
        console.log(currentcity);

        var destination = $('area[data-cityid=\'' + playerdata.destinationid + '\']').attr('alt');
        console.log(destination);

        $('#playerdata').text(playerdata.username);
        $('#golddata').text(playerdata.gold);

        //Determine if carriage is moving
        var carriageimage = $('#carriage').attr('src')

        if (carriageimage.indexOf('still') >= 0) {
            $('#citydata').text(currentcity);
        } else {
            $('#citydata').text('Traveling to ' + currentcity);
        }


        //Determine if new destination has been set
        if (playerdata.destinationid === 0) {
            $('#destinationdata').text('None');
        } else {
            $('#destinationdata').text(destination);
        }

        $('#timedata').text(calendar(playerdata.timecount));
        $('#currentdata').text(totalinventory);
        $('#maxdata').text(playerdata.max_space);
        $('#graindata').text(playerdata.grain);
        $('#fishdata').text(playerdata.fish);
        $('#clothdata').text(playerdata.cloth);
        $('#metaldata').text(playerdata.metal);
        $('#winedata').text(playerdata.wine);
        $('#silkdata').text(playerdata.silk);
        $('#wooddata').text(playerdata.wood);
        $('#weaponsdata').text(playerdata.weapons);
        $('#gemsdata').text(playerdata.gems);
        $('#medicinedata').text(playerdata.medicine);
        $('#poisondata').text(playerdata.poison);
        $('#dragonglassdata').text(playerdata.dragon_glass);

    });


}

// Builds HTML form for buy and sell transactions
function buildtransaction(type, host) {



    //Assign parent modal to a variable to allow for usage in ajax call
    var currentelement = $(host).parents('.modal');

    //Build HTML form for buy transaction
    var transactionform = $('<div/>', {
        'class': 'transaction'
    });
    var $goodsmenu = $('<select>', {
        id: type + 'select'
    });

    //Create list of goods dropdown from array of keys in player object
    var playerkeys = Object.keys(player);
    var optionsstring = '';

    for (i = 8; i < playerkeys.length; i++) {
        optionsstring += '<option value=\'' + playerkeys[i] + '\'>' + playerkeys[i] + '</option>';

    }

    $goodsmenu.html(optionsstring);

    // Build transaction form
    transactionform.html('<p>What would you like to ' + type + '?</p>');
    transactionform.children().append($goodsmenu);
    transactionform.append('<p> How much would you like to ' + type + '? <input type="text" name="quantity" id="quantity"></p>');
    transactionform.append('<button type=\'submit\' class=\'' + type + 'submit\'> Complete Transaction </button>');
    currentelement.find('.modal-footer').append(transactionform);


};

function buylogic(host) {

    //Assign transaction form and form values to variables
    var currentelement = $(host).parents('.transaction');
    var currentgood = currentelement.find('#buyselect').val();
    var currentquantity = currentelement.find('#quantity').val();

    // Validate transaction
    //Confirm quantity is a positive number
    var numberregex = /^\d*$/;

    if (numberregex.test(currentquantity) && parseInt(currentquantity) >= 0) {

        currentquantity = parseInt(currentquantity);

        //Get price of good in current market
        var currentprice = parseInt(currentelement.parents('.modal').find('.' + currentgood + 'price').text());

        //Check player has enough gold to complete transaction
        if ((currentprice * currentquantity) < player.gold) {

            //Check player has enough space to complete transaction
            if (player.max_space >= findtotal(player) + currentquantity) {

                player.gold -= (currentprice * currentquantity);
                player[currentgood] += currentquantity;

                currentelement.remove();
                sendPlayerUpdate(player);

            } else {
                alert('Not a valid transaction, player doesn\'t have enough space');
            }

        } else {
            alert('Not a valid transaction, player doesn\'t have enough money to complete');
        }
    } else { //Result of number checking logic
        alert('Not a valid transaction, quantity must be a number above 0');
    }

};

function selllogic(host) {

    //Assign transaction form and form values to variables
    var currentelement = $(host).parents('.transaction');
    var currentgood = currentelement.find('#sellselect').val();
    var currentquantity = currentelement.find('#quantity').val();


    // Validate transaction
    //Confirm quantity is a positive number
    var numberregex = /^\d*$/;

    if (numberregex.test(currentquantity) && parseInt(currentquantity) >= 0) {

        currentquantity = parseInt(currentquantity);
        var currentprice = parseInt(currentelement.parents('.modal').find('.' + currentgood + 'price').text());

        //Confirm player has enough good to sell
        if (player[currentgood] >= currentquantity) {

            player.gold += (currentprice * currentquantity);
            player[currentgood] -= currentquantity;

            currentelement.remove();
            sendPlayerUpdate(player);

        } else {
            alert('Not a valid transaction, you don\'t have enough ' + currentgood + ' to sell.');
        }



    } else { //Result of number checking logic
        alert('Not a valid transaction, quantity must be a number above 0');
    }



}

function startClock() {

    clockid = setInterval(timer, 100);

}

function timer() {
    timecounter++;
    if (timecounter === 10) {
        //Update calendar every 10 cycles (1 second)
        player.timecount++;
        checkevent(player.timecount);
        sendPlayerUpdate(player);
        timecounter = 0;
    }
}

function checkevent(timecount) {

    for (i = 0; i < events.length; i++) {
        if (timecount === events[i].timecountstart) {
            if (events[i].goodaffected === 'city') {
                disablecity(events[i]);
            } else {
                startgoodevent(events[i]);
            }

        }
        if (timecount === events[i].timecountend) {
            endevent(events[i]);
        }
    }

}

function startgoodevent(event) {
    console.log(event);
    console.log(event.title + ' has started');

    $.ajax('/cities/event/' + player.username, {
        type: 'PUT',
        data: event
    }).then(function (data) {

        var $div = $('<div/>', {
            id: 'event' + event.id,
            class: 'events'
        });
        $div.hide().append('<h4 id="eventName">' + event.title + '</h4><hr><p> ' + event.description + '</p>');
        $div.show();

        console.log($div.text());
        $('#eventbox').append($div);
        $('#eventbox').fadeIn("slow");

        setTimeout(function () {
            $div.remove();
            if ($('#eventbox').is(':visible')) {
                $('#eventbox').fadeOut('slow');
            }
        }, 15000);

    });
}

function disablecity(event) {
    //A function to disable cities as the White Walkers march down the continent
    console.log('This isn\'t built yet.');
}

function endevent(event) {

    //change eventeffect to 0 in event object so that it can be sent to the API
    event.eventeffect = 0;

    $.ajax('/cities/event/' + player.username, {
        type: 'PUT',
        data: event
    }).then(function (data) {

        var $div = $('<div/>', {
            id: 'event' + event.id + 'end',
            class: 'events'
        });

        $div.append('<h4>' + event.title + ' has ended.</h4><p>' + event.goodaffected + ' prices have returned to normal</p>');
    });

}

function calendar(counter) {
    // Add 298 to years count because game starts in 298 AC


    var years = Math.floor((counter - 1) / 48) + 298;
    counter -= ((years - 298) * 48);


    var months = Math.floor((counter - 1) / 4) + 1;
    counter -= ((months - 1) * 4);

    var datestring = '';
    switch (counter) {
        case 1:
            datestring += 'First';
            break;

        case 2:
            datestring += 'Second';
            break;

        case 3:
            datestring += 'Third';
            break;

        default:
            datestring += 'Fourth';

    }

    datestring += ' Week of the ' + months;

    switch (months) {
        case 1:
            datestring += 'st';
            break;

        case 2:
            datestring += 'nd';
            break;

        case 3:
            datestring += 'rd';
            break;

        default:
            datestring += 'th';
    }

    datestring += ' Moon, ' + years + ' AC';

    return datestring;
}

function stopClock() {
    clearInterval(clockid);
}

function sendPlayerUpdate(player) {



    $.ajax('/player/update', {
        method: 'PUT',
        data: player
    }).then((data) => {
        updatePlayer();
    });

}

function upgradeinventory() {

    var upgradecost = [1000, 5000, 10000, 50000, 100000];
    var upgradeinventory = [100, 500, 1000, 5000, 10000];
    var index = -1;
    if (player.max_space === 20) {
        index = 0;
    } else {
        for (i = 0; i < upgradeinventory.length; i++) {
            if (player.max_space === upgradeinventory[i]) {
                if (i === 5) {
                    alert('You already have the maximum allowed inventory.');
                } else {
                    index = i + 1;
                }
            }
        }
    }

    if (index !== -1) {
        //Validate player has enough gold to complete transaction
        if (player.gold < upgradecost[index]) {
            alert('You don\'t have enough gold to upgrade your inventory at this time');
        } else {
            player.gold -= upgradecost[index];
            player.max_space = upgradeinventory[index];


            sendPlayerUpdate(player);
        }
    }


}

function route() {
    var routepoint;

    var cityid = parseInt(player.cityid)
    var destinationid = parseInt(player.destinationid);
    //Recurring function will keep going until player arrives at destination
    if (cityid !== destinationid) {

        //All travel from Castle Black (id 1) routed through Winterfell (id 2)
        //All travel from The Twins (id 3) going north routed through Winterfell (id 2)
        if (cityid === 1 || (cityid === 3 && destinationid <= 2)) {
            routepoint = 2;
        }
        //All travel from Winterfell (id 2) going south routed through The Twins (id 3)
        //All travel from the Crossroads going north routed through The Twins
        else if ((cityid === 2 && destinationid !== 1) || (cityid === 4 && destinationid < 4)) {
            routepoint = 3;
        }
        //All travel from The Twins (id 3) to any southern city (ids 5-11) routed through the crossroads (id 4)
        //All travel from all southern cities (ids 6-11) to all northern cities (id 1-3) + The Eyrie (id 5) routed through the crossroads (id 4)
        //All travel from the Eyrie period
        //All travel from King's Landing to Riverrun, and vice versa
        else if ((cityid === 3 && destinationid > 4) || (cityid > 5 && destinationid < 6) || (cityid === 5)
                || (cityid === 8 && destinationid === 6) || (cityid === 6 && destinationid === 8)) {
            routepoint = 4;
        }
        //Route from Casterly Rock(id 10) to Dragonstone (id 11), and vice versa, routed through King's Landing (id 8) 
        else if ((cityid === 10 && destinationid === 11) || (cityid === 11 && destinationid === 10)) {
            routepoint = 8;
        }
        //All other travel simply routed to destination
        else {
            routepoint = destinationid;
        }

        $.ajax()
        player.cityid = routepoint;
        sendPlayerUpdate(player);
        movecarriage(routepoint, player);


    }
    //If carriage has reached destination, change image to still image, fulfilling jquery .done function in original call
    else {
        arrival(player);
    }


}
//Function for when carriage arrives at final destination
function arrival(player) {

    stopClock();
    var $carriage = $('#carriage').attr('src');

    if ($carriage.indexOf('right') > 0) {
        $('#carriage').attr('src', './assets/img/horses-right-still.png');
    } else {
        $('#carriage').attr('src', './assets/img/horses-left-still.png');
    }

    // Set player cityid to new location and update player in db
    player.destinationid = 0;
    sendPlayerUpdate(player);

    //Get prices for goods
    displayprices(player.cityid,true);

    
    
}

function displayprices(cityid,display) {

    var $city = $('area[data-cityid=\'' + cityid + '\']');
    var targetmodal = '#' + $city.attr('id') + 'Modal';
    var index = player.cityid - 1;
    $.get('/game/priceupdate/' + player.username).then((data) => {

        var priceobject = data[index].prices;


        for (var key in priceobject) {

            $(targetmodal).find('.' + key + 'price').text(priceobject[key]);

        }
        
        if (display) {
            $(targetmodal).modal({
                show: true
            });
        }

        if($('.dBody').hasClass('hidden')){
            showHideInv();
        }

    });
}

// Run once to bring player data into page 
$(document).one('ready', function () {

    updatePlayer().then(function () {

        placeplayer(player);
        displayprices(player.cityid,false);
    });

    $.ajax('/game/events', {
        type: 'GET'
    }).then(function (data) {
        events = data;

    });

})



//Begin live code and listeners
$(document).ready(function () {




    // When user clicks on a map location
    $('.clickable').click(function () {

        
        //Check to see if player is moving to new city or just wants to see the city he just left
        if (parseInt($(this).attr('data-cityid')) === player.cityid) {
            console.log('Skip update');
            var targetmodal = '#' + $(this).attr('id') + 'Modal';
            $(targetmodal).modal({
                show: true
            });
        } else {

            startClock();
            player.destinationid = $(this).attr('data-cityid');
            sendPlayerUpdate(player);
            route(player);
        }

    });


    // Listeners for buy and sell requests
    $(document).on('click', '.buy', function () {
        buildtransaction('buy', this);
    });


    $(document).on('click', '.sell', function () {
        buildtransaction('sell', this);
    });

    $(document).on('click', '.buysubmit', function () {
        buylogic(this);
    });

    $(document).on('click', '.sellsubmit', function () {
        selllogic(this);
    });

    $(document).on('click', '#upgrade', function () {
        upgradeinventory();
    });

    // Show and hide inventory
    $(".dHead").on("click", function () {
<<<<<<< HEAD
        showHideInv();
=======
        if ($('.dBody').hasClass('hidden')) {
            $('.dBody').removeClass('hidden');
        } else {
            $('.dBody').addClass('hidden');
        }
>>>>>>> 42bb481fcbed552f11b72a9487e4b9a426b0a399
    });

    // Dismissal of event pop-up
    $(".events").on("click", function () {
        $(".events").fadeOut("slow");
    })

<<<<<<< HEAD
    $(".modal").on("hidden.bs.modal", function(){
        showHideInv();
=======
    $('#upgrade').on('mouseover', function () {

        console.log('Trying');

        var upgradecost = [1000, 5000, 10000, 50000, 100000];
        var upgradeinventory = [100, 500, 1000, 5000, 10000];
        var index = -1;
        if (player.max_space === 20) {
            index = 0;
        } else {
            for (i = 0; i < upgradeinventory.length; i++) {
                if (player.max_space === upgradeinventory[i]) {
                    if (i === 5) {
                        alert('You already have the maximum allowed inventory.');
                    } else {
                        index = i + 1;
                    }
                }
            }
        }

        var tooltiptext = "Spend " + upgradecost[index] + " gold to increase <br> inventory to " + upgradeinventory[index] + ".";

        var $span = $('<span/>', {
            id: 'tooltip',
            style: 'margin-left: 10px; background: black; font-color: white; font-family: Times-New-Roman'
        });

        $span.append(tooltiptext);

        $('#upgradep').append($span);

    });

    $('#upgrade').on('mouseleave', function () {
        $('#tooltip').remove();
>>>>>>> 42bb481fcbed552f11b72a9487e4b9a426b0a399
    })

});
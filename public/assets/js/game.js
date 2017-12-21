//Set username in background for testing purposes
var playername = 'Chris';

// Create empty global variable to hold player data
var player;

console.log('Game.js loaded');

// Get's most recent player data from db
function updatePlayer() {

    $.ajax('/player/' + playername, {
        type: 'GET'
    }).then((data) => {

        if (data === null) {

            $.ajax('/player/' + playername, {
                type: 'POST'
            }).then((data) => {
                console.log('Added new player');
                player = data;
                displayPlayer(player);
            });
        } else {

            console.log('Found existing player');
            player = data;
            displayPlayer(player);

        }


    });



};

function findtotal(playerdata) {
    return playerdata.grain + playerdata.fish + playerdata.cloth + playerdata.metal + playerdata.silk + playerdata.wood +
        playerdata.weapons + playerdata.gems + playerdata.medicine + playerdata.poison + playerdata.dragon_glass;
}

// Updates player display
function displayPlayer(playerdata) {

    // Calculate total inventory
    var totalinventory = findtotal(playerdata);
    $('#playerdata').text(playerdata.username);
    $('#golddata').text(playerdata.gold);
    $('#citydata').text(playerdata.cityid);
    $('#currentdata').text(totalinventory);
    $('#maxdata').text(playerdata.max_space);
    $('#graindata').text(playerdata.grain);
    $('#fishdata').text(playerdata.fish);
    $('#clothdata').text(playerdata.cloth);
    $('#metaldata').text(playerdata.metal);
    $('#silkdata').text(playerdata.silk);
    $('#wooddata').text(playerdata.wood);
    $('#weaponsdata').text(playerdata.weapons);
    $('#gemsdata').text(playerdata.gems);
    $('#medicinedata').text(playerdata.medicine);
    $('#poisondata').text(playerdata.poison);
    $('#dragonglassdata').text(playerdata.dragon_glass);


}

// Builds HTML form for buy and sell transactions
function buildtransaction(type, host) {

    console.log('running');

    //Assign parent modal to a variable to allow for usage in ajax call
    var currentelement = $(host).parents('.modal');

    //Build HTML form for buy transaction
    var transactionform = $('<div/>', {
        'class': 'transaction'
    });
    var $goodsmenu = $('<select>', {
        id: type+'select'
    });

    //Create list of goods dropdown from array of keys in player object
    var playerkeys = Object.keys(player);
    var optionsstring = '';

    for (i = 7; i < playerkeys.length; i++) {
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
            if (player.max_space > findtotal(player) + currentquantity) {

                $.ajax('/goods/update', {
                    method: 'PUT',
                    data: {
                        good: currentgood,
                        inventory: player[currentgood], //Current inventory of specific good being purchased
                        gold: player.gold,
                        transaction: 'buy',
                        player: player.username,
                        quantity: currentquantity,
                        price: currentprice
                    }
                }).then(function (data) {
                    currentelement.remove();
                    updatePlayer();

                });

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
    console.log(currentelement);
    console.log($(currentelement));

    // Validate transaction
    //Confirm quantity is a positive number
    var numberregex = /^\d*$/;

    if (numberregex.test(currentquantity) && parseInt(currentquantity) >= 0) {

        currentquantity = parseInt(currentquantity);
        var currentprice = parseInt(currentelement.parents('.modal').find('.' + currentgood + 'price').text());

        //Confirm player has enough good to sell
        if (player[currentgood] >= currentquantity) {

            $.ajax('/goods/update', {
                method: 'PUT',
                data: {
                    good: currentgood,
                    inventory: player[currentgood], //Current inventory of specific good being purchased
                    gold: player.gold,
                    transaction: 'sell',
                    player: player.username,
                    quantity: currentquantity,
                    price: currentprice
                }
            }).then(function (data) {
                currentelement.remove();
                updatePlayer();

            });

        }

        else {
            alert('Not a valid transaction, you don\'t have enough ' + currentgood + ' to sell.');
        }

    

    }
    else { //Result of number checking logic
        alert('Not a valid transaction, quantity must be a number above 0');
    }



}


//Begin live code and listeners
$(document).ready(function () {
    // Determine player for current session
    updatePlayer();

    // When user clicks on a map location
    $('.clickable').click(function () {

        //Set element to be updated = to target of clickable map
        var currentelement = $(this).attr('data-target');

        // Subtract one from id to get index because array starts from 0
        var index = $(this).attr('data-cityid') - 1;

        //Update player location
        $.ajax('/location/update', {
            method: 'PUT',
            data: {
                player: player.username,
                cityid: $(this).attr('data-cityid')
            }
        }).then((data) => {
            updatePlayer();
        });

        //Get prices for goods
        $.get('/priceupdate').then((data) => {

            var priceobject = data[index].prices;

            for (var key in priceobject) {

                $(currentelement).find('.' + key + 'price').text(priceobject[key]);

            }
        });
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

});
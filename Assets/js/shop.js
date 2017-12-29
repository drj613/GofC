function buy (shop) {

    var html = "<button class = 'close' onclick = 'modal()'></button><ul>";
 
    html += "<li>" +
    "<h3>Grain</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='grain' type='button' " +
    "onclick='buyGrain(\"grain\", "")' /></button>" +
    "</li>"; 
 
    html += "<li>" +
    "<h3>Wood</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='wood' type='button' " +
    "onclick='buyWood(\"wood\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Fish</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='fish' type='button' " +
    "onclick='buyFish(\"fish\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Cloth</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='cloth' type='button' " +
    "onclick='buyCloth(\"cloth\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Metal</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='metal' type='button' " +
    "onclick='buyMetal(\"metal\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Wine</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='wine' type='button' " +
    "onclick='buyWine(\"wine\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Medicine</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='medicine' type='button' " +
    "onclick='buyMedicine(\"medicine\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Weapons</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='weapons' type='button' " +
    "onclick='buyWeapons(\"weapons\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Silk</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='silk' type='button' " +
    "onclick='buySilk(\"silk\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Poison</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='poison' type='button' " +
    "onclick='buyPoison(\"poison\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Gems</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='gems' type='button' " +
    "onclick='buyGems(\"gems\", "")' /></button>" +
    "</li>"; 
    
 	html += "<li>" +
    "<h3>Dragonglass</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='dragonglass' type='button' " +
    "onclick='buyDragonglass(\"dragonglass\", "")' /></button>" +
    "</li>";               
 
    html += "</ul>";
    shop.innerHTML = html;
 
    modal();
};

function sell (shop) {

	var html = "<button class = 'close' onclick = 'modal()'></button><ul>";
 
    html += "<li>" +
    "<h3>Grain</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='grain' type='button' " +
    "onclick='sellGrain(\"grain\", "")' /></button>" +
    "</li>"; 
 
    html += "<li>" +
    "<h3>Wood</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='wood' type='button' " +
    "onclick='buyWood(\"wood\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Fish</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='fish' type='button' " +
    "onclick='buyFish(\"fish\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Cloth</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='cloth' type='button' " +
    "onclick='buyCloth(\"cloth\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Metal</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='metal' type='button' " +
    "onclick='buyMetal(\"metal\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Wine</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='wine' type='button' " +
    "onclick='buyWine(\"wine\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Medicine</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='medicine' type='button' " +
    "onclick='buyMedicine(\"medicine\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Weapons</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='weapons' type='button' " +
    "onclick='buyWeapons(\"weapons\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Silk</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='silk' type='button' " +
    "onclick='buySilk(\"silk\", "")' /></button>" +
    "</li>"; 
     
    html += "<li>" +
    "<h3>Poison</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='poison' type='button' " +
    "onclick='buyPoison(\"poison\", "")' /></button>" +
    "</li>"; 

 	html += "<li>" +
    "<h3>Gems</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='gems' type='button' " +
    "onclick='buyGems(\"gems\", "")' /></button>" +
    "</li>"; 
    
 	html += "<li>" +
    "<h3>Dragonglass</h3>" +
    "<p><img src = '' /> </p>" +
    "<button id='dragonglass' type='button' " +
    "onclick='buyDragonglass(\"dragonglass\", "")' /></button>" +
    "</li>";               
 
    html += "</ul>";
    shop.innerHTML = html;
};

function modal() {
    shop = document.getElementById("modal");
    shop.style.visibility = (shop.style.visibility == "visible") ? "hidden" : "visible";
};

function purchaseFromDatabase(ID, quantityNeeded) {
    //check quantity of desired purchase. Minus quantity of the itemID from database if possible. 
    //Else inform user "Quantity desired not in stock" 
	connection.query('SELECT * FROM Products WHERE ItemID = ' + ID, function(error, response) {
        if (error) { console.log(error) };

        //if in stock
        if (quantityNeeded <= response[0].max_space) {
            //calculate cost
            var totalCost = response[0].Price * quantityNeeded;
            //inform user
            console.log("We have what you need! Your order is coming up!");
            console.log("Your total cost for " + quantityNeeded + " " + response[0].ProductName +
                " is " + totalCost + ". Thank you for your Business!");
            //update database, minus purchased quantity
            connection.query('UPDATE Products SET max_space = max_space - ' +
                quantityNeeded + ' WHERE ItemID = ' + ID);
        } else {
            html += "<span>" + ;
        };


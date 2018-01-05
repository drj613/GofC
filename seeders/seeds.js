function seedModel1(db) {
    const returnablePromise = Promise.all([
        db.Cities.create({
            city_name: 'Castle Black',
            regionid: 1,
            xcoord: 100,
            ycoord: 500,
            grain_low: 9,
            grain_high: 17,
            fish_low: 17,
            fish_high: 32,
            cloth_low: 28,
            cloth_high: 52,
            metal_low: 35,
            metal_high: 65,
            silk_low: 297,
            silk_high: 553,
            wood_low: 13,
            wood_high: 25,
            weapons_low: 201,
            weapons_high: 375,
            gems_low: 875,
            gems_high: 1625,
            medicine_low: 84,
            medicine_high: 156,
            poison_low: 420,
            poison_high: 780,
            dragonglass_low: 4025,
            dragonglass_high: 7475,
            wine_low: 45,
            wine_high: 85
        }),
        db.Cities.create({
            city_name: 'Winterfell',
            regionid: 1,
            xcoord: 100,
            ycoord: 500,
            grain_low: 8,
            grain_high: 12,
            fish_low: 27,
            fish_high: 39,
            cloth_low: 28,
            cloth_high: 45,
            metal_low: 30,
            metal_high: 40,
            silk_low: 144,
            silk_high: 656,
            wood_low: 12,
            wood_high: 24,
            weapons_low: 167,
            weapons_high: 373,
            gems_low: 851,
            gems_high: 1604,
            medicine_low: 49,
            medicine_high: 182,
            poison_low: 387,
            poison_high: 733,
            dragonglass_low: 7878,
            dragonglass_high: 8210,
            wine_low: 191,
            wine_high: 646

        }),
        db.Cities.create({
            city_name: 'The Twins',
            regionid: 1,
            xcoord: 450,
            ycoord: 500,
            grain_low: 9,
            grain_high: 14,
            fish_low: 10,
            fish_high: 29,
            cloth_low: 40,
            cloth_high: 48,
            metal_low: 49,
            metal_high: 58,
            silk_low: 206,
            silk_high: 545,
            wood_low: 10,
            wood_high: 25,
            weapons_low: 235,
            weapons_high: 316,
            gems_low: 608,
            gems_high: 1196,
            medicine_low: 99,
            medicine_high: 150,
            poison_low: 252,
            poison_high: 549,
            dragonglass_low: 3538,
            dragonglass_high: 8906,
            wine_low: 99,
            wine_high: 654

        }),
        db.Cities.create({
            city_name: 'The Crossroads',
            regionid: 2,
            xcoord: 100,
            ycoord: 500,
            grain_low: 14,
            grain_high: 18,
            fish_low: 14,
            fish_high: 33,
            cloth_low: 35,
            cloth_high: 51,
            metal_low: 29,
            metal_high: 51,
            silk_low: 297,
            silk_high: 553,
            wood_low: 13,
            wood_high: 25,
            weapons_low: 201,
            weapons_high: 375,
            gems_low: 875,
            gems_high: 1625,
            medicine_low: 84,
            medicine_high: 156,
            poison_low: 420,
            poison_high: 780,
            dragonglass_low: 4025,
            dragonglass_high: 7475,
            wine_low: 45,
            wine_high: 85

        }),
        db.Cities.create({
            city_name: 'The Eyrie',
            regionid: 2,
            xcoord: 100,
            ycoord: 500,
            grain_low: 7,
            grain_high: 13,
            fish_low: 13,
            fish_high: 25,
            cloth_low: 38,
            cloth_high: 58,
            metal_low: 40,
            metal_high: 51,
            silk_low: 316,
            silk_high: 670,
            wood_low: 19,
            wood_high: 25,
            weapons_low: 116,
            weapons_high: 335,
            gems_low: 764,
            gems_high: 1445,
            medicine_low: 67,
            medicine_high: 145,
            poison_low: 273,
            poison_high: 658,
            dragonglass_low: 3079,
            dragonglass_high: 4255,
            wine_low: 131,
            wine_high: 386

        }),
        db.Cities.create({
            city_name: 'Riverrun',
            regionid: 2,
            xcoord: 100,
            ycoord: 500,
            grain_low: 14,
            grain_high: 18,
            fish_low: 14,
            fish_high: 33,
            cloth_low: 35,
            cloth_high: 51,
            metal_low: 29,
            metal_high: 51,
            silk_low: 297,
            silk_high: 553,
            wood_low: 13,
            wood_high: 25,
            weapons_low: 201,
            weapons_high: 375,
            gems_low: 875,
            gems_high: 1625,
            medicine_low: 84,
            medicine_high: 156,
            poison_low: 420,
            poison_high: 780,
            dragonglass_low: 4025,
            dragonglass_high: 7475,
            wine_low: 45,
            wine_high: 85

        }),
        db.Cities.create({
            city_name: 'Pyke',
            regionid: 2,
            xcoord: 50,
            ycoord: 700,
            grain_low: 12,
            grain_high: 17,
            fish_low: 8,
            fish_high: 13,
            cloth_low: 39,
            cloth_high: 50,
            metal_low: 25,
            metal_high: 46,
            silk_low: 288,
            silk_high: 541,
            wood_low: 24,
            wood_high: 26,
            weapons_low: 101,
            weapons_high: 269,
            gems_low: 552,
            gems_high: 718,
            medicine_low: 56,
            medicine_high: 145,
            poison_low: 459,
            poison_high: 648,
            dragonglass_low: 4601,
            dragonglass_high: 6070,
            wine_low: 215,
            wine_high: 604

        }),
        db.Cities.create({
            city_name: 'King\'s Landing',
            regionid: 2,
            xcoord: 500,
            ycoord: 500,
            grain_low: 12,
            grain_high: 16,
            fish_low: 24,
            fish_high: 32,
            cloth_low: 32,
            cloth_high: 42,
            metal_low: 40,
            metal_high: 52,
            silk_low: 520,
            silk_high: 676,
            wood_low: 11,
            wood_high: 15,
            weapons_low: 213,
            weapons_high: 277,
            gems_low: 750,
            gems_high: 975,
            medicine_low: 80,
            medicine_high: 104,
            poison_low: 400,
            poison_high: 520,
            dragonglass_low: 2436,
            dragonglass_high: 3781,
            wine_low: 35,
            wine_high: 46
        }),
        
        db.Cities.create({
            city_name: 'Highgarden',
            regionid: 2,
            xcoord: 100,
            ycoord: 500,
            grain_low: 6,
            grain_high: 11,
            fish_low: 17,
            fish_high: 22,
            cloth_low: 38,
            cloth_high: 44,
            metal_low: 25,
            metal_high: 43,
            silk_low: 216,
            silk_high: 334,
            wood_low: 12,
            wood_high: 24,
            weapons_low: 297,
            weapons_high: 384,
            gems_low: 1072,
            gems_high: 1537,
            medicine_low: 64,
            medicine_high: 95,
            poison_low: 394,
            poison_high: 753,
            dragonglass_low: 2576,
            dragonglass_high: 5961,
            wine_low: 496,
            wine_high: 524

        }),
       
        db.Cities.create({
            city_name: 'Casterly Rock',
            regionid: 2,
            xcoord: 100,
            ycoord: 500,
            grain_low: 9,
            grain_high: 17,
            fish_low: 17,
            fish_high: 32,
            cloth_low: 28,
            cloth_high: 52,
            metal_low: 35,
            metal_high: 65,
            silk_low: 297,
            silk_high: 553,
            wood_low: 13,
            wood_high: 25,
            weapons_low: 201,
            weapons_high: 375,
            gems_low: 875,
            gems_high: 1625,
            medicine_low: 84,
            medicine_high: 156,
            poison_low: 420,
            poison_high: 780,
            dragonglass_low: 4025,
            dragonglass_high: 7475,
            wine_low: 45,
            wine_high: 85

        }),
        db.Cities.create({
            city_name: 'Dragonstone',
            regionid: 3,
            xcoord: 100,
            ycoord: 500,
            grain_low: 9,
            grain_high: 17,
            fish_low: 17,
            fish_high: 32,
            cloth_low: 28,
            cloth_high: 52,
            metal_low: 35,
            metal_high: 65,
            silk_low: 297,
            silk_high: 553,
            wood_low: 13,
            wood_high: 25,
            weapons_low: 201,
            weapons_high: 375,
            gems_low: 875,
            gems_high: 1625,
            medicine_low: 84,
            medicine_high: 156,
            poison_low: 420,
            poison_high: 780,
            dragonglass_low: 4025,
            dragonglass_high: 7475,
            wine_low: 45,
            wine_high: 85

        })


    ]);

    return returnablePromise;
}

function seedModel2(db) {
    return Promise.all([
        db.Player.create({
            username: 'SamplePlayer'
        })
    ]);
}

function seedModel3(db) {
    return Promise.all([
        db.Region.create({
            description: 'The North'
        }),
        db.Region.create({
            description: 'The South'
        }),
        db.Region.create({
            description: 'Dragonstone'
        })


    ]);
}

function seedModel4(db) {
    return Promise.all([
        db.Events.create({
            title: 'Robert Baratheon dead!',
            description: 'King Robert Baratheon has been gored by a wild boar because he was too drunk to hunt. Everybody stops to consider whether they really need that next drink. Wine prices plummet in the South.',
            regionaffected: 2,
            goodaffected: 'wine',
            eventeffect: -1,
            timecountstart: 16,
            timecountend: 32
        }),
        db.Events.create({
            title: 'White Walkers spotted!',
            description: 'There are reports of frozen undead monsters with blue eyes. Lord Commander of the Night\'s Watch orders all bodies must be burned. Wood prices in the North skyrocket.',
            regionaffected: 1,
            goodaffected: 'wood',
            eventeffect: 1,
            timecountstart: 24,
            timecountend: 40
        }),
        db.Events.create({
            title: 'Ned Stark Beheaded!',
            description: 'King Joffrey\'s impulsive decision to execute Ned Stark causes The North to secede and The War of the Five Kings to begin. Metal prices skyrocket in the South as weaponsmiths begin preparing for war.',
            regionaffected: 2,
            goodaffected: 'metal',
            eventeffect: 1,
            timecountstart: 44,
            timecountend: 60
        }),
        db.Events.create({
            title: 'Winter is coming!',
            description: 'The maesters have declared that the longest summer in memory is now over. Grain prices soar in the North as people start preparing for an equally long winter',
            regionaffected: 1,
            goodaffected: 'grain',
            eventeffect: 1,
            timecountstart: 50,
            timecountend: 66
        }),
        db.Events.create({
            title: 'Margaery Tyrell engaged!',
            description: 'Margaery Tyrell is engaged to Renly Baratheon as part of a marriage-alliance seeking to overthrow Joffrey "Baratheon" as king. Due to the large number of lavish jewelrey given to Ms. Tyrell, gem prices soar in the South. Everyone is sure this marriage will last forever.',
            regionaffected: 2,
            goodaffected: 'gems',
            eventeffect: 1,
            timecountstart: 56,
            timecountend: 80
        }),
        db.Events.create({
            title: 'Renly Baratheon dead!',
            description: 'A dark and mysterious creature kills Renly Baratheon in the night, strangely before his marriage to Margaery Tyrell can be consummated. Magic replaces poison as the preferred method of assassination, causing poison prices to plummet in Dragonstone',
            regionaffected: 3,
            goodaffected: 'poison',
            eventeffect: -1,
            timecountstart: 64,
            timecountend: 80
        }),
        db.Events.create({
            title: 'Battle of Blackwater Bay',
            description: 'The forces of Stannis Baratheon storm King\'s Landing, but are defeated when a lone ship filled with Dragonfire is exploded amidst their fleet. The explosion also takes out all the fish in the bay, causing fish prices in the South to skyrocket',
            regionaffected: 2,
            goodaffected: 'fish',
            eventeffect: 1,
            timecountstart: 84,
            timecountend: 100
        }),
        db.Events.create({
            title: 'Margaery Tyrell engaged again!',
            description: 'Margaery Tyrell is now engaged to Joffrey Baratheon as part of a marriage-alliance seeking to maintain Joffrey "Baratheon" as king. Due to the large number of lavish jewelrey given to Ms. Tyrell again, gem prices soar in the South. Surely, this marriage will be more successful.',
            regionaffected: 2,
            goodaffected: 'gems',
            eventeffect: 1,
            timecountstart: 120,
            timecountend: 136
        }),
        db.Events.create({
            title: 'The Red Wedding!',
            description: 'Robb Stark, Catelyn Stark and most of the Northern army are brutally betrayed and slaughtered by Walder Frey and the Boltons after observing the ritual of guest right. Grain prices in the North plummet, because bread and salt aren\'t worth what they used to.',
            regionaffected: 1,
            goodaffected: 'grain',
            eventeffect: -1,
            timecountstart: 132,
            timecountend: 148
        }),
        db.Events.create({
            title: 'The Purple Wedding!',
            description: 'Joffrey Baratheon has been poisoned at his own wedding feast. The popularity (and price) of poison goes through the roof, because everybody hated that guy. Margaery Tyrell is now 0 for 2 on the consumated marriages front.',
            regionaffected: 2,
            goodaffected: 'poison',
            eventeffect: 1,
            timecountstart: 150,
            timecountend: 166
        }),
        db.Events.create({
            title: 'The Lannister mines run dry!',
            description: 'Reports emerge that there is no more gold to be mined at Casterly Rock. Out of work gold miners move on to less lucrative metals, flooding the ore market in the South until prices collapse',
            regionaffected: 2,
            goodaffected: 'metal',
            eventeffect: -1,
            timecountstart: 160,
            timecountend: 176
        }),
        db.Events.create({
            title: 'The Wildlings are coming!',
            description: 'A huge wildling army has been spotted north of The Wall. As preparations for battle are made, weapons become a very hot commodity in the North',
            regionaffected: 1,
            goodaffected: 'weapons',
            eventeffect: -1,
            timecountstart: 172,
            timecountend: 188
        }),
        db.Events.create({
            title: 'Oberyn Martell killed!',
            description: 'Oberyn Martell has died in single combat, fighting The Mountain to defend Tyrion Lannister in trial by combat. Oberyn\'s warddrobe is looted, flooding the South with excess silk robes',
            regionaffected: 2,
            goodaffected: 'silk',
            eventeffect: -1,
            timecountstart: 184,
            timecountend: 200
        }),
        db.Events.create({
            title: 'Tyrion Lannister escapes!',
            description: 'Having just been sentenced to death, Tyrion Lannister murders his father and flees King\'s Landing, apparently taking all the wine in Westeros with him. Wine prices in the South skyrocket',
            regionaffected: 2,
            goodaffected: 'wine',
            eventeffect: 1,
            timecountstart: 198,
            timecountend: 214
        }),
        db.Events.create({
            title: 'Margaery Tyrell engaged AGAIN',
            description: 'Margaery Tyrell is now engaged to TOMMEN Baratheon as part of a marriage-alliance seeking to maintain the Lannis ... er Baratheon line. She really seems to have a thing for Baratheon kings. Due to the large number of lavish jewelrey given to Ms. Tyrell AGAIN, gem prices soar once more in the South. Third time is the charm, right?',
            regionaffected: 2,
            goodaffected: 'gems',
            eventeffect: 1,
            timecountstart: 208,
            timecountend: 224
        }),
        db.Events.create({
            title: 'Rise of the Sparrows',
            description: 'Mistreatment of the commonfolk has caused a fanatical religious sect called \'The Sparrows\' to rise and take control of the Faith of the Seven. Humble clothing is in, driving the price of cloth through the roof in the South',
            regionaffected: 2,
            goodaffected: 'cloth',
            eventeffect: 1,
            timecountstart: 218,
            timecountend: 234
        }),
        db.Events.create({
            title: 'Massacre at Hardhome',
            description: 'The Night\'s Watch has just witnessed the full power of the White Walkers at the massacre of Hardhome. The North concludes that weapons are worthless.',
            regionaffected: 2,
            goodaffected: 'cloth',
            eventeffect: 1,
            timecountstart: 218,
            timecountend: 234
        }),
        db.Events.create({
            title: 'Wildlings allowed into the North',
            description: 'Mistreatment of the commonfolk has caused a fanatical religious sect called \'The Sparrows\' to rise and take control of the Faith of the Seven. Humble clothing is in, driving the price of cloth through the roof in the South',
            regionaffected: 2,
            goodaffected: 'cloth',
            eventeffect: 1,
            timecountstart: 218,
            timecountend: 234
        })

      
    ]);
}

function seed(db) {
    
    //Run seed functions to populate db
    console.log('Trying seeds');
    return Promise.all([

        seedModel1(db),
        seedModel2(db),
        seedModel3(db),
        seedModel4(db)

    ]);
}

module.exports = seed;

/*

//in the other file

const seed = require('./seed/seed');

db.sync({ force: true }).then(seed()).then(function () {
    //start listening
})

*/
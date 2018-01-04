function seedModel1(db) {
    const returnablePromise = Promise.all([
        db.Cities.create({
            city_name: 'Castle Black',
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
            description: 'The Middle'
        })

    ]);
}

function seedModel4(db) {
    return Promise.all([
        db.Events.create({
            title: 'White Walkers spotted!',
            description: 'There are reports of frozen undead monsters with blue eyes. Lord Commander of the Night\'s Watch orders all bodies must be burned. Wood prices in the North skyrocket.',
            region: 1,
            goodaffected: 'wood',
            eventeffect: 1,
            timecountstart: 36,
            timecountend: 60

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
        // seedModel4(db)

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
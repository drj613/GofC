'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Cities', [{
        city_name: 'King\'s Landing',
        xcoord: 500,
        ycoord: 500,
        grain_low: 400,
        grain_high: 600,
        fish_low: 400,
        fish_high: 600,
        cloth_low: 400,
        cloth_high: 600,
        metal_low: 400,
        metal_high: 600,
        silk_low: 400,
        silk_high: 600,
        wood_low: 400,
        wood_high: 600,
        weapons_low: 400,
        weapons_high: 600,
        gems_low: 400,
        gems_high: 600,
        medicine_low: 400,
        medicine_high: 600,
        poison_low: 400,
        poison_high: 600,
        dragonglass_low: 400,
        dragonglass_high: 600,
        wine_low: 400,
        wine_high: 600
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Cities', null, {});
  }
};

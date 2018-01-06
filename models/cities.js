module.exports = function (sequelize, DataTypes) {
  var Cities = sequelize.define("Cities", {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    regionid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    player_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    xcoord: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    ycoord: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    grain_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    grain_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    grain_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    wood_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wood_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wood_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    fish_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    fish_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    fish_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    cloth_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    cloth_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    cloth_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    metal_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },    
    metal_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    metal_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    wine_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wine_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wine_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    medicine_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    medicine_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    medicine_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    weapons_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    weapons_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    weapons_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    silk_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    silk_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    silk_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    poison_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    poison_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    poison_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    gems_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    gems_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    gems_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    dragonglass_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    dragonglass_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    dragonglass_event: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    }


  }, {
    timestamps: false
  });

  // Cities.associate = function (models) {
  //   Cities.belongsTo(models.Region, {
  //     foreignkey: 'regionid',
  //     targetKey: 'id'
  //   });
    
  //   console.log('Trying associate');
  //   Cities.update({
  //       RegionId: 1
  //     }, {
  //       where: {
  //         id: [2,3]
  //       }
  //     });

    
  // };

  return Cities;
};
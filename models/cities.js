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
    wood_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wood_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    fish_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    fish_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    cloth_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    cloth_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    metal_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    metal_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wine_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    wine_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    medicine_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    medicine_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    weapons_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    weapons_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    silk_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    silk_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    poison_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    poison_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    gems_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    gems_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    dragonglass_low: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    dragonglass_high: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    }


  }, {
    timestamps: false
  });

  Cities.associate = function (models) {
    Cities.belongsTo(models.Region, {
      foreignkey: 'regionid',
      targetKey: 'id'
    });
    
    console.log('Trying associate');
    Cities.update({
        RegionId: 1
      }, {
        where: {
          id: [2,3]
        }
      });

    
  };

  return Cities;
};
module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
    goodaffected: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    eventeffect: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    regionaffected: {
      type: DataTypes.INTEGER(25),
      allowNull: false
    },
    timecountstart: {
        type: DataTypes.INTEGER(5),
        allowNull: false
    },
    timecountend: {
        type: DataTypes.INTEGER(5),
        allowNull: false
    }

  }, {
    timestamps: false
  });

  return Events;
};
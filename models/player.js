module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
      },
      username: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validation: {
            len: [5,25]
        
        }
      },
      max_space: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 20
      },
      defense: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      //Current location
      cityid: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 8
      },
      //Destination
      destinationid: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      gold: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 100
      },
      timecount: {
          type: DataTypes.INTEGER(10),
          allowNull: false,
          defaultValue: 1
      },
      grain: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      fish: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      cloth: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      metal: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      silk: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      wood: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      weapons: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      gems: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      medicine: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      poison: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      dragon_glass: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      },
      wine: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0
      }
      

    },{
        timestamps: false
    });

      return Player;
  };
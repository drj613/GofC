module.exports = function (sequelize, DataTypes) {
    var Region = sequelize.define("Region", {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        grain_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        fish_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        cloth_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        metal_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        silk_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        wood_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        weapons_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        gems_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        medicine_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        poison_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        dragon_glass_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        wine_event: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        }

    }, {
        timestamps: false
    });

    return Region;
};
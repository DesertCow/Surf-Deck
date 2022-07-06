const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Surfboard extends Model { }

Surfboard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    board_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1000,
        max: 9999
      }
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    board_model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    length_inch: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    checked_out: {
      type: DataTypes.BOOLEAN,
    },
    damaged: {
      type: DataTypes.BOOLEAN
    },
    fin_setup: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    fin_count: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location',
        key: 'id',
      }
    },
    img: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'surfboard',
    underscored: true,

  }


)

module.exports = Surfboard
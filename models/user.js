const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'user',
    underscored: true,

  }

)

module.exports = User
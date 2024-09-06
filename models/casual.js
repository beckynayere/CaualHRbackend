'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Casual.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    idNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    department: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Casual',
  });
  return Casual;
};
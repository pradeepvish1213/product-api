'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN,
    productViewed: DataTypes.INTEGER,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
    deletedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
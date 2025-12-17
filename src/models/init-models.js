var DataTypes = require("sequelize").DataTypes;
var _DbProduct = require("./db-product");
var _DbProductDescription = require("./db-product-description");
var _DbProductToCategory = require("./db-product-to-category");

function initModels(sequelize) {
  var DbProduct = _DbProduct(sequelize, DataTypes);
  var DbProductDescription = _DbProductDescription(sequelize, DataTypes);
  var DbProductToCategory = _DbProductToCategory(sequelize, DataTypes);


  return {
    DbProduct,
    DbProductDescription,
    DbProductToCategory,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

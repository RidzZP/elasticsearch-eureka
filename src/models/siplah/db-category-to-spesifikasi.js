const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCategoryToSpesifikasi', {
    idCategoryToSpesifikasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_category_to_spesifikasi'
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_category'
    },
    idSpesifikasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_spesifikasi'
    },
    spesifikasi: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_category_to_spesifikasi',
    timestamps: false
  });
};

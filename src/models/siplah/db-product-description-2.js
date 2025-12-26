const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductDescription2', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'language_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    metaDescription: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'meta_description'
    },
    metaKeyword: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'meta_keyword'
    },
    tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_product_description2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "seo",
        using: "BTREE",
        fields: [
          { name: "seo" },
        ]
      },
    ]
  });
};

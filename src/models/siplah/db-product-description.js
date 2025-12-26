const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductDescription', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'db_product_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "language_id" },
        ]
      },
      {
        name: "idx_product_id",
        unique: true,
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
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_product_description_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_db_product_description_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_description_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_product_desc_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_product_desc_search",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "name" },
        ]
      },
      {
        name: "idx_name_desc",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_fulltext_name",
        type: "FULLTEXT",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_description",
        type: "FULLTEXT",
        fields: [
          { name: "description" },
        ]
      },
    ]
  });
};

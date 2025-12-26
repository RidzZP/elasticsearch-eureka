const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCategoryDescription', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'category_id'
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
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    metaDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'meta_description'
    },
    metaKeyword: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'meta_keyword'
    },
    seo: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_category_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
          { name: "language_id" },
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
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "slug",
        using: "BTREE",
        fields: [
          { name: "slug" },
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
        name: "meta_keyword",
        using: "BTREE",
        fields: [
          { name: "meta_keyword" },
        ]
      },
    ]
  });
};

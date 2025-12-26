const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCategory', {
    categoryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'category_id'
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
      field: 'parent_id'
    },
    top: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    column: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sort_order'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    megaMenu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'mega_menu'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_added'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_modified'
    }
  }, {
    sequelize,
    tableName: 'db_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
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
        name: "parent_id",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "parent_id_2",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "idx_category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};

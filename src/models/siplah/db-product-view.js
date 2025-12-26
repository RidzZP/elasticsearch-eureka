const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductView', {
    idProductView: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_product_view'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bulan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_product_view',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_product_view" },
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
        name: "view",
        using: "BTREE",
        fields: [
          { name: "view" },
        ]
      },
      {
        name: "bulan",
        using: "BTREE",
        fields: [
          { name: "bulan" },
        ]
      },
      {
        name: "tahun",
        using: "BTREE",
        fields: [
          { name: "tahun" },
        ]
      },
      {
        name: "product_id_2",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id_3",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderUlasan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "rating_angka"
    },
    ket: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    ulasan: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ulasan_produk"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_ulasan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "rate",
        using: "BTREE",
        fields: [
          { name: "rate" },
        ]
      },
    ]
  });
};

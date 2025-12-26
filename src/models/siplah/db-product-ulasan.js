const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductUlasan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
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
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    }
  }, {
    sequelize,
    tableName: 'db_product_ulasan',
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
          { name: "product_id" },
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
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "idx_product_ulasan_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_ulasan_product",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_db_product_ulasan_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_ulasan_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_ulasan_product_id_rate",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "rate" },
          { name: "customer_id" },
        ]
      },
      {
        name: "idx_product_review",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "rate" },
        ]
      },
    ]
  });
};

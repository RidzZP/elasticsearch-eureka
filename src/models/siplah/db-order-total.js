const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderTotal', {
    orderTotalId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_total_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      defaultValue: 0
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sort_order'
    }
  }, {
    sequelize,
    tableName: 'db_order_total',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_total_id" },
        ]
      },
      {
        name: "idx_orders_total_orders_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
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
        name: "value",
        using: "BTREE",
        fields: [
          { name: "value" },
        ]
      },
      {
        name: "title",
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "text",
        using: "BTREE",
        fields: [
          { name: "text" },
        ]
      },
      {
        name: "idx_order_total_order_code",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "code" },
        ]
      },
      {
        name: "idx_order_id_code",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "code" },
        ]
      },
    ]
  });
};

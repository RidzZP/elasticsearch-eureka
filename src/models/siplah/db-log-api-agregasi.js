const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogApiAgregasi', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_id'
    },
    ip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'user_agent'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    praTransaksi: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'pra_transaksi'
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    orderStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'order_status_id'
    },
    event: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    occurredAt: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_log_api_agregasi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "order_id" },
          { name: "order_status_id" },
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
        name: "idx_order_status_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "order_status_id",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
      {
        name: "event",
        using: "BTREE",
        fields: [
          { name: "event" },
        ]
      },
    ]
  });
};

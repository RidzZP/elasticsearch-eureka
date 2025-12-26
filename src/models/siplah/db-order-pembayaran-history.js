const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderPembayaranHistory', {
    historyId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'history_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    idStatusPembayaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_status_pembayaran'
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    user: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    statusDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'status_date'
    }
  }, {
    sequelize,
    tableName: 'db_order_pembayaran_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_id" },
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
        name: "id_status_pembayaran",
        using: "BTREE",
        fields: [
          { name: "id_status_pembayaran" },
        ]
      },
      {
        name: "history_id",
        using: "BTREE",
        fields: [
          { name: "history_id" },
        ]
      },
      {
        name: "status_date",
        using: "BTREE",
        fields: [
          { name: "status_date" },
        ]
      },
    ]
  });
};

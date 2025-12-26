const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderHistory', {
    orderHistoryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_history_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    orderStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_status_id'
    },
    notify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    awb: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_added'
    },
    idUserMall: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_user_mall'
    },
    invoice: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    aggregasi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    responseAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_history_id" },
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
        name: "order_status_id",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
      {
        name: "aggregasi",
        using: "BTREE",
        fields: [
          { name: "aggregasi" },
        ]
      },
      {
        name: "idx_order_id_date_added",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "date_added" },
        ]
      },
      {
        name: "idx_order_id_status",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "order_status_id" },
        ]
      },
    ]
  });
};

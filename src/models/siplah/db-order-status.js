const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderStatus', {
    orderStatusId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_status_id'
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'language_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_stat'
    },
    komentar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    statusTransaksi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'status_transaksi'
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastEventName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'last_event_name'
    },
    collectorEventName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'collector_event_name'
    }
  }, {
    sequelize,
    tableName: 'db_order_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
      {
        name: "order_status_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
      {
        name: "id_stat",
        using: "BTREE",
        fields: [
          { name: "id_stat" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "order_status_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbStatusPembayaran', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statusPembayaran: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'status_pembayaran'
    },
    idStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_stat'
    },
    singkat: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_status_pembayaran',
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
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
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
        name: "singkat",
        using: "BTREE",
        fields: [
          { name: "singkat" },
        ]
      },
    ]
  });
};

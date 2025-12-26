const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbStatusPembayaranKomentar', {
    idKomentar: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_komentar'
    },
    idOrderPembayaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_order_pembayaran'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    kategori: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    konten: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tglAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_added'
    }
  }, {
    sequelize,
    tableName: 'db_status_pembayaran_komentar',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_komentar" },
        ]
      },
    ]
  });
};

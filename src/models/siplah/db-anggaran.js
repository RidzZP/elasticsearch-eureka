const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbAnggaran', {
    anggaranId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'anggaran_id'
    },
    anggaranNo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'anggaran_no'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    mall: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mallBank: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'mall_bank'
    },
    sekolah: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pemesan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    invoiceNo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'invoice_no'
    },
    dateOrder: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_order'
    },
    datePembayaran: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_pembayaran'
    },
    dateTransferkecv: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_transferkecv'
    },
    totalInvoice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_invoice'
    },
    totalPembayaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_pembayaran'
    },
    totalSelisih: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_selisih'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_anggaran',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anggaran_id" },
        ]
      },
    ]
  });
};

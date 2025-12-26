const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPaymentConfirmation', {
    idConfirmation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_confirmation'
    },
    nama: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    invoiceNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'invoice_no'
    },
    noOrder: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'no_order'
    },
    tglTransfer: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'tgl_transfer'
    },
    jumlah: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    bank: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    confirmDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'confirm_date'
    }
  }, {
    sequelize,
    tableName: 'db_payment_confirmation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_confirmation" },
        ]
      },
      {
        name: "no_order",
        using: "BTREE",
        fields: [
          { name: "no_order" },
        ]
      },
      {
        name: "invoice_no",
        using: "BTREE",
        fields: [
          { name: "invoice_no" },
        ]
      },
      {
        name: "tgl_transfer",
        using: "BTREE",
        fields: [
          { name: "tgl_transfer" },
        ]
      },
      {
        name: "email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};

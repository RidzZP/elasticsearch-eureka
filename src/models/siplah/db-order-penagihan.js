const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderPenagihan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoiceNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'invoice_no'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    tglPenagihan: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_penagihan'
    },
    totalPenagihan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_penagihan'
    },
    statusBalasan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_balasan'
    },
    tglBayar: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'tgl_bayar'
    },
    approved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    approvedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'approved_date'
    },
    sudahKonfirm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'sudah_konfirm'
    },
    tglCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_created'
    },
    top: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_order_penagihan',
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
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
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
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
    ]
  });
};

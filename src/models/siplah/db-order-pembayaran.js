const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderPembayaran', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoiceNo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'invoice_no'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    metode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "bank_dki"
    },
    noRekPembeli: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'no_rek_pembeli'
    },
    anRekPembeli: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'an_rek_pembeli'
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idPenagihan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_penagihan'
    },
    tglKonfirmasi: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_konfirmasi'
    },
    tglPembayaran: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'tgl_pembayaran'
    },
    totalPembayaran: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'total_pembayaran'
    },
    biayaAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'biaya_admin'
    },
    ppn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ketBiayaAdmin: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'ket_biaya_admin'
    },
    imgUpload: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'img_upload'
    },
    idStatusPembayaran: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'id_status_pembayaran'
    },
    bank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    namaPenerima: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'nama_penerima'
    },
    noRekening: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'no_rekening'
    },
    tglTransfer: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_transfer'
    },
    tglUpdate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_update'
    },
    idUserTransfer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_user_transfer'
    },
    idTransfer: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      field: 'id_transfer'
    },
    admId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'adm_id'
    },
    approveAdm: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "0",
      field: 'approve_adm'
    },
    admDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'adm_date'
    },
    approveKeu: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "0",
      field: 'approve_keu'
    },
    keuDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'keu_date'
    },
    approveFnc: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      field: 'approve_fnc'
    },
    fncDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fnc_date'
    },
    approveMgr: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      field: 'approve_mgr'
    },
    mgrDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'mgr_date'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    },
    imgUploadRekKoran: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'img_upload_rek_koran'
    },
    imgUploadRekKoranDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'img_upload_rek_koran_date'
    },
    noRefBank: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'no_ref_bank'
    }
  }, {
    sequelize,
    tableName: 'db_order_pembayaran',
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
        name: "id_penagihan",
        using: "BTREE",
        fields: [
          { name: "id_penagihan" },
        ]
      },
      {
        name: "tgl_pembayaran",
        using: "BTREE",
        fields: [
          { name: "tgl_pembayaran" },
        ]
      },
      {
        name: "total_pembayaran",
        using: "BTREE",
        fields: [
          { name: "total_pembayaran" },
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
        name: "approve_adm",
        using: "BTREE",
        fields: [
          { name: "approve_adm" },
        ]
      },
      {
        name: "mgr_date",
        using: "BTREE",
        fields: [
          { name: "mgr_date" },
        ]
      },
      {
        name: "approve_mgr",
        using: "BTREE",
        fields: [
          { name: "approve_mgr" },
        ]
      },
      {
        name: "approve_fnc",
        using: "BTREE",
        fields: [
          { name: "approve_fnc" },
        ]
      },
      {
        name: "fnc_date",
        using: "BTREE",
        fields: [
          { name: "fnc_date" },
        ]
      },
      {
        name: "keu_date",
        using: "BTREE",
        fields: [
          { name: "keu_date" },
        ]
      },
      {
        name: "approve_keu",
        using: "BTREE",
        fields: [
          { name: "approve_keu" },
        ]
      },
      {
        name: "adm_date",
        using: "BTREE",
        fields: [
          { name: "adm_date" },
        ]
      },
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "tgl_transfer",
        using: "BTREE",
        fields: [
          { name: "tgl_transfer" },
        ]
      },
    ]
  });
};

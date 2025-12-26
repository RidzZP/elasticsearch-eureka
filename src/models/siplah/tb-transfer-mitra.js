const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TbTransferMitra', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      field: 'order_id'
    },
    invoice: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tglTransferSekolah: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_transfer_sekolah'
    },
    tglTransferMitra: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_transfer_mitra'
    },
    namaBankRekeningTujuan: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'nama_bank_rekening_tujuan'
    },
    namaPenerimaRekeningTujuan: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'nama_penerima_rekening_tujuan'
    },
    namaCv: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'nama_cv'
    },
    idCv: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      field: 'id_cv'
    },
    nomorRekeningTujuan: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'nomor_rekening_tujuan'
    },
    totalOrderSkolah: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'total_order_skolah'
    },
    totalTransferFinance: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'total_transfer_finance'
    },
    totalPpn: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'total_ppn'
    },
    totalPph: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'total_pph'
    },
    totalBiayaAdmin: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'total_biaya_admin'
    },
    idCabang: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      field: 'id_cabang'
    },
    namaCabang: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'nama_cabang'
    },
    idUserTransfer: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      field: 'id_user_transfer'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'tb_transfer_mitra',
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
        name: "idx_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "idx_invoice",
        using: "BTREE",
        fields: [
          { name: "invoice" },
        ]
      },
      {
        name: "idx_id_cv",
        using: "BTREE",
        fields: [
          { name: "id_cv" },
        ]
      },
      {
        name: "idx_nomor_rekening",
        using: "BTREE",
        fields: [
          { name: "nomor_rekening_tujuan" },
        ]
      },
      {
        name: "idx_nama_penerima",
        using: "BTREE",
        fields: [
          { name: "nama_penerima_rekening_tujuan" },
        ]
      },
      {
        name: "idx_id_cabang",
        using: "BTREE",
        fields: [
          { name: "id_cabang" },
        ]
      },
      {
        name: "idx_nama_cabang",
        using: "BTREE",
        fields: [
          { name: "nama_cabang" },
        ]
      },
      {
        name: "idx_invoice_order",
        using: "BTREE",
        fields: [
          { name: "invoice" },
          { name: "order_id" },
        ]
      },
      {
        name: "idx_cv_rekening",
        using: "BTREE",
        fields: [
          { name: "id_cv" },
          { name: "nomor_rekening_tujuan" },
        ]
      },
      {
        name: "idx_cabang_penerima",
        using: "BTREE",
        fields: [
          { name: "id_cabang" },
          { name: "nama_penerima_rekening_tujuan" },
        ]
      },
      {
        name: "idx_tgl_transfer_mitra",
        using: "BTREE",
        fields: [
          { name: "tgl_transfer_mitra" },
        ]
      },
    ]
  });
};

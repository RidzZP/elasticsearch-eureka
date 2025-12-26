const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TbAnggaran', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idAnggaran: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "uk_id_anggaran",
      field: 'id_anggaran'
    },
    invoice: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00
    },
    totalTransfer: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'total_transfer'
    },
    ppn: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pph: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00
    },
    biayaFeeVa: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'biaya_fee_va'
    },
    biayaFeeBank: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'biaya_fee_bank'
    },
    biayaFeeKirimTotal: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'biaya_fee_kirim_total'
    },
    uploadFinance1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'upload_finance_1'
    },
    uploadFinance1Path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'upload_finance_1_path'
    },
    uploadFinance2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'upload_finance_2'
    },
    uploadFinance2Path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'upload_finance_2_path'
    },
    approveAnggaran1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'approve_anggaran_1'
    },
    approveAnggaran2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'approve_anggaran_2'
    },
    isDownload: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'is_download'
    },
    tanggalDianggarkan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'tanggal_dianggarkan'
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
    tableName: 'tb_anggaran',
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
        name: "uk_id_anggaran",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_anggaran" },
        ]
      },
      {
        name: "idx_ready_download",
        using: "BTREE",
        fields: [
          { name: "upload_finance_1" },
          { name: "upload_finance_2" },
          { name: "approve_anggaran_1" },
          { name: "approve_anggaran_2" },
          { name: "is_download" },
        ]
      },
      {
        name: "idx_tanggal",
        using: "BTREE",
        fields: [
          { name: "tanggal_dianggarkan" },
          { name: "id_anggaran" },
        ]
      },
    ]
  });
};

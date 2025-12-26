const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderBast', {
    idOrderBast: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_order_bast'
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
    penerimaNama: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'penerima_nama'
    },
    bastCetak: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'bast_cetak'
    },
    bastNo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'bast_no'
    },
    bastNama: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'bast_nama'
    },
    bastJabatan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'bast_jabatan'
    },
    tglBuat: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_buat'
    },
    imageScanBast: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'image_scan_bast'
    },
    tglUpload: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_upload'
    },
    tglPengajuan: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_pengajuan'
    },
    setujuTerima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'setuju_terima'
    },
    dibaca: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bastNip: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'bast_nip'
    },
    imageBastGoodCondition: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'image_bast_good_condition'
    }
  }, {
    sequelize,
    tableName: 'db_order_bast',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_order_bast" },
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
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
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
        name: "id_order_bast",
        using: "BTREE",
        fields: [
          { name: "id_order_bast" },
        ]
      },
      {
        name: "bast_no",
        using: "BTREE",
        fields: [
          { name: "bast_no" },
        ]
      },
    ]
  });
};

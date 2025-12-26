const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RekapProvinsi', {
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rekProvinsiId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'rek_provinsi_id'
    },
    provinsiId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'provinsi_id'
    },
    provinsi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    jmlSekolah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_sekolah'
    },
    jmlSekolahTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_sekolah_transaksi'
    },
    jmlTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_transaksi'
    },
    totalTransaksi: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'total_transaksi'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'rekap_provinsi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rek_provinsi_id" },
        ]
      },
      {
        name: "rek_provinsi_id",
        using: "BTREE",
        fields: [
          { name: "rek_provinsi_id" },
        ]
      },
      {
        name: "provinsi_id",
        using: "BTREE",
        fields: [
          { name: "provinsi_id" },
        ]
      },
      {
        name: "provinsi",
        using: "BTREE",
        fields: [
          { name: "provinsi" },
        ]
      },
      {
        name: "jml_sekolah",
        using: "BTREE",
        fields: [
          { name: "jml_sekolah" },
        ]
      },
      {
        name: "jml_transaksi",
        using: "BTREE",
        fields: [
          { name: "jml_transaksi" },
        ]
      },
      {
        name: "total_transaksi",
        using: "BTREE",
        fields: [
          { name: "total_transaksi" },
        ]
      },
    ]
  });
};

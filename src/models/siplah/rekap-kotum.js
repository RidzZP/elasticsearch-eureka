const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RekapKotum', {
    rekKotaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'rek_kota_id'
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kotaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kota_id'
    },
    kota: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provinsiId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'provinsi_id'
    },
    provinsi: {
      type: DataTypes.STRING(50),
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
    tableName: 'rekap_kota',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rek_kota_id" },
        ]
      },
      {
        name: "rek_provinsi_id",
        using: "BTREE",
        fields: [
          { name: "rek_kota_id" },
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
          { name: "kota" },
        ]
      },
    ]
  });
};

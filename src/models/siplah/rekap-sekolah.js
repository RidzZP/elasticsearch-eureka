const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RekapSekolah', {
    rekSekolahId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'rek_sekolah_id'
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sekolahId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sekolah_id'
    },
    sekolah: {
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
    jmlProduk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_produk'
    },
    jmlTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_transaksi'
    },
    totalTransaksi: {
      type: DataTypes.INTEGER,
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
    tableName: 'rekap_sekolah',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rek_sekolah_id" },
        ]
      },
      {
        name: "rek_provinsi_id",
        using: "BTREE",
        fields: [
          { name: "rek_sekolah_id" },
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPengawasWilKec', {
    idWilDetail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_wil_detail'
    },
    idReport: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_report'
    },
    idProv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_prov'
    },
    idKab: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_kab'
    },
    idWilayah: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_wilayah'
    },
    namaWilayah: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'nama_wilayah'
    },
    jmlSekolah: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'jml_sekolah'
    },
    jmlTransaksi: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'jml_transaksi'
    },
    nilaiTransaksi: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'nilai_transaksi'
    }
  }, {
    sequelize,
    tableName: 'db_pengawas_wil_kec',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_wil_detail" },
        ]
      },
    ]
  });
};

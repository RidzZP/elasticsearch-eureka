const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbRencanaBelanja', {
    idRencanaBelanja: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_rencana_belanja'
    },
    idSekolah: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'id_sekolah'
    },
    idKategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_kategori'
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tahunAnggaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tahun_anggaran'
    },
    bulan: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_rencana_belanja',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_rencana_belanja" },
        ]
      },
    ]
  });
};

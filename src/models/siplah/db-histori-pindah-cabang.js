const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbHistoriPindahCabang', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    namaCabang: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nama_cabang'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    mallName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'mall_name'
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cabang_id'
    },
    alasanPindah: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'alasan_pindah'
    },
    namaCabangLama: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nama_cabang_lama'
    },
    cabangIdLama: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cabang_id_lama'
    },
    tglPindah: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'tgl_pindah'
    }
  }, {
    sequelize,
    tableName: 'db_histori_pindah_cabang',
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
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
    ]
  });
};

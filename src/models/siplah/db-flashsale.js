const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbFlashsale', {
    idFlashsale: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_flashsale'
    },
    namaFlashsale: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nama_flashsale'
    },
    seoFlashsale: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'seo_flashsale'
    },
    syaratKetentuan: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'syarat_ketentuan'
    },
    aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jadwal: {
      type: DataTypes.ENUM('00:00','08:00','16:00',''),
      allowNull: true
    },
    tglMulai: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_mulai'
    },
    tglAkhir: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_akhir'
    }
  }, {
    sequelize,
    tableName: 'db_flashsale',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_flashsale" },
        ]
      },
    ]
  });
};

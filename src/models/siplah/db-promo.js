const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPromo', {
    idPromo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_promo'
    },
    idPromoKategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_promo_kategori'
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    judulPromo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'judul_promo'
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    subjudulPromo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'subjudul_promo'
    },
    minimumPembelian: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'minimum_pembelian'
    },
    berlakuDi: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'berlaku_di'
    },
    berlakuMulai: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'berlaku_mulai'
    },
    berlakuSampai: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'berlaku_sampai'
    },
    syaratKetentuan: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'syarat_ketentuan'
    }
  }, {
    sequelize,
    tableName: 'db_promo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_promo" },
        ]
      },
    ]
  });
};

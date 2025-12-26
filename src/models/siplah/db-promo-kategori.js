const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPromoKategori', {
    idPromoKategori: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_promo_kategori'
    },
    namaPromoKategori: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'nama_promo_kategori'
    }
  }, {
    sequelize,
    tableName: 'db_promo_kategori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_promo_kategori" },
        ]
      },
    ]
  });
};

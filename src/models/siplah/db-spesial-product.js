const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbSpesialProduct', {
    idSpesialProduct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_spesial_product'
    },
    idSpesial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_spesial'
    },
    jenis: {
      type: DataTypes.ENUM('produk','kategori'),
      allowNull: false
    },
    idProduk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_produk'
    },
    idKategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_kategori'
    }
  }, {
    sequelize,
    tableName: 'db_spesial_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_spesial_product" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductVariation', {
    idProductVariation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_product_variation'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    namaVariasi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'nama_variasi'
    },
    pilihan: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_product_variation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_product_variation" },
        ]
      },
    ]
  });
};

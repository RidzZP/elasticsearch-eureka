const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductRiwayatStok', {
    stokId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'stok_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cabang_id'
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_update'
    }
  }, {
    sequelize,
    tableName: 'db_product_riwayat_stok',
    timestamps: false
  });
};

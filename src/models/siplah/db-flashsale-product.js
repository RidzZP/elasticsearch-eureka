const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbFlashsaleProduct', {
    idFlashsaleProduct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_flashsale_product'
    },
    idFlashsale: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_flashsale'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    qtyFlashsale: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'qty_flashsale'
    },
    lakuFlashsale: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'laku_flashsale'
    },
    discountFlashsale: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'discount_flashsale'
    },
    priceFlashsale: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'price_flashsale'
    }
  }, {
    sequelize,
    tableName: 'db_flashsale_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_flashsale_product" },
        ]
      },
    ]
  });
};

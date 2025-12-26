const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderProductHistory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'db_order',
        key: 'order_id'
      },
      field: 'order_id'
    },
    orderProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'db_order_product',
        key: 'order_product_id'
      },
      field: 'order_product_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemMinQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'item_min_quantity'
    },
    itemPriceType: {
      type: DataTypes.ENUM('PRICE_RETAIL','PRICE_WHOLESALE'),
      allowNull: false,
      field: 'item_price_type'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'db_order_product_history',
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
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "order_product_id",
        using: "BTREE",
        fields: [
          { name: "order_product_id" },
        ]
      },
    ]
  });
};

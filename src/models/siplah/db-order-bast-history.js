const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderBastHistory', {
    orderBastHistoryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_bast_history_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    orderProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_product_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amountGoodCondition: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'amount_good_condition'
    },
    amountBadCondition: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'amount_bad_condition'
    },
    dateArrive: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_arrive'
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_order_bast_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_bast_history_id" },
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMallChat', {
    chatId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'chat_id'
    },
    from: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "user"
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'customer_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'mall_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'product_id'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_time'
    },
    showSender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'show_sender'
    },
    showReceiver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'show_receiver'
    },
    statusNego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_nego'
    }
  }, {
    sequelize,
    tableName: 'db_mall_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "chat_id" },
        ]
      },
    ]
  });
};

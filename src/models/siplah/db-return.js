const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbReturn', {
    returnId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'return_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    images: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    product: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    opened: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    returnReasonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'return_reason_id'
    },
    returnActionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'return_action_id'
    },
    returnStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'return_status_id'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateOrdered: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_ordered'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_added'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_modified'
    }
  }, {
    sequelize,
    tableName: 'db_return',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "return_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'order_id'
    },
    vaNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'va_number'
    },
    bankCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'bank_code'
    },
    bankName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'bank_name'
    },
    amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    customerName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'customer_name'
    },
    customerEmail: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'customer_email'
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expired_at'
    },
    status: {
      type: DataTypes.ENUM('pending','paid','expired','partial'),
      allowNull: true,
      defaultValue: "pending"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_at'
    },
    paidAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'paid_at'
    },
    paymentChannel: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'payment_channel'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paidAmmount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'paid_ammount'
    }
  }, {
    sequelize,
    tableName: 'payments',
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
        name: "va_number",
        using: "BTREE",
        fields: [
          { name: "va_number" },
        ]
      },
    ]
  });
};

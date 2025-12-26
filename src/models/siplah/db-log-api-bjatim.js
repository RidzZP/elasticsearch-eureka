const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogApiBjatim', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'order_id'
    },
    fromApi: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'from_api'
    },
    env: {
      type: DataTypes.ENUM('sandbox','production'),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    endpoint: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    paymentVa: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'payment_va'
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('failed','passed'),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'db_log_api_bjatim',
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
    ]
  });
};

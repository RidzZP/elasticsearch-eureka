const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EuPaymentSettled', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transactionMpid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'transaction_mpid'
    },
    aggregation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    action: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "waiting"
    }
  }, {
    sequelize,
    tableName: 'eu_paymentSettled',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};

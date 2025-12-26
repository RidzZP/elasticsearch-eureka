const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogBankFix2025', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'bank_name'
    },
    methode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'create_at'
    },
    noVa: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'no_va'
    }
  }, {
    sequelize,
    tableName: 'db_log_bank_fix_2025',
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
        name: "bank_name",
        using: "BTREE",
        fields: [
          { name: "bank_name" },
        ]
      },
    ]
  });
};

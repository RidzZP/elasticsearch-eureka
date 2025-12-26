const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbBankCode', {
    bankId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'bank_id'
    },
    bank: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sandi: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    rtgs: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    singkat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bankKode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'bank_kode'
    }
  }, {
    sequelize,
    tableName: 'db_bank_code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_id" },
        ]
      },
    ]
  });
};

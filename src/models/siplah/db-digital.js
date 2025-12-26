const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbDigital', {
    pulsaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'pulsa_id'
    },
    pulsaCode: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'pulsa_code'
    },
    pulsaOp: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'pulsa_op'
    },
    pulsaNominal: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'pulsa_nominal'
    },
    pulsaDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'pulsa_description'
    },
    pulsaPriceBuy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'pulsa_price_buy'
    },
    pulsaPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pulsa_price'
    },
    pulsaJenis: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'pulsa_jenis'
    },
    masaaktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_digital',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pulsa_id" },
        ]
      },
    ]
  });
};

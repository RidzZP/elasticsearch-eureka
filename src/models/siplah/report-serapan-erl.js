const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportSerapanErl', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cabang_id'
    },
    cabangName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'cabang_name'
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amountYearBefore: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'amount_year_before'
    },
    amountYearNow: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'amount_year_now'
    }
  }, {
    sequelize,
    tableName: 'report_serapan_erl',
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
        name: "cabang_id",
        using: "BTREE",
        fields: [
          { name: "cabang_id" },
        ]
      },
    ]
  });
};

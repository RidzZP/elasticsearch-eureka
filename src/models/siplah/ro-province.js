const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoProvince', {
    provinceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'province_id'
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    provinceKd: {
      type: DataTypes.STRING(6),
      allowNull: false,
      field: 'province_kd'
    }
  }, {
    sequelize,
    tableName: 'ro_province',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
    ]
  });
};

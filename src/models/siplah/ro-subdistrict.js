const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoSubdistrict', {
    subdistrictId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'subdistrict_id'
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'province_id'
    },
    provinceKd: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'province_kd'
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'city_id'
    },
    cityKd: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'city_kd'
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    subdistrict: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subdistrictKd: {
      type: DataTypes.STRING(6),
      allowNull: false,
      field: 'subdistrict_kd'
    }
  }, {
    sequelize,
    tableName: 'ro_subdistrict',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subdistrict_id" },
        ]
      },
    ]
  });
};

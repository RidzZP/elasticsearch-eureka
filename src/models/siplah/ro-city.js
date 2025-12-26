const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoCity', {
    cityId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'city_id'
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
    cityName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'city_name'
    },
    cityKd: {
      type: DataTypes.STRING(7),
      allowNull: false,
      field: 'city_kd'
    },
    postalCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'postal_code'
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ro_city',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "city_id",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "province_id",
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
      {
        name: "province",
        using: "BTREE",
        fields: [
          { name: "province" },
        ]
      },
    ]
  });
};

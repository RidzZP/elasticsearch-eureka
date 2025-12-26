const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbManufacturerToMall', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pmall_id'
    },
    manufacturerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'manufacturer_id'
    },
    rak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_manufacturer_to_mall',
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
        name: "pmall_id",
        using: "BTREE",
        fields: [
          { name: "pmall_id" },
        ]
      },
      {
        name: "manufacturer_id",
        using: "BTREE",
        fields: [
          { name: "manufacturer_id" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};

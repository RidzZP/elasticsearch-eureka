const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbRegion', {
    regionsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'regions_id'
    },
    id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    kabKota: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'kab_kota'
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provinceId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'province_id'
    },
    island: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    islandId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'island_id'
    }
  }, {
    sequelize,
    tableName: 'db_regions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regions_id" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status", length: 191 },
        ]
      },
      {
        name: "province_id",
        using: "BTREE",
        fields: [
          { name: "province_id", length: 191 },
        ]
      },
      {
        name: "island_id",
        using: "BTREE",
        fields: [
          { name: "island_id", length: 191 },
        ]
      },
    ]
  });
};

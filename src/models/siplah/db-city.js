const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCity', {
    cityId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'city_id'
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'zone_id'
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    kodeKota: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kode_kota'
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estimasi: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'sort_order'
    }
  }, {
    sequelize,
    tableName: 'db_city',
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
    ]
  });
};

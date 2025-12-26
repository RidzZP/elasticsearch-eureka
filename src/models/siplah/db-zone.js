const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbZone', {
    zoneId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'zone_id'
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'country_id'
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'db_zone',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "zone_id" },
        ]
      },
    ]
  });
};

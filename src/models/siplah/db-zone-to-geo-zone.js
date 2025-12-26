const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbZoneToGeoZone', {
    zoneToGeoZoneId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'zone_to_geo_zone_id'
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'country_id'
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'zone_id'
    },
    geoZoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'geo_zone_id'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_added'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_modified'
    }
  }, {
    sequelize,
    tableName: 'db_zone_to_geo_zone',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "zone_to_geo_zone_id" },
        ]
      },
    ]
  });
};

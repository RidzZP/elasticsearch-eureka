const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCountry', {
    countryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'country_id'
    },
    idRajacountry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_rajacountry'
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    isoCode2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      field: 'iso_code_2'
    },
    isoCode3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'iso_code_3'
    },
    addressFormat: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'address_format'
    },
    postcodeRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'postcode_required'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'db_country',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbShipping', {
    addressId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'address_id'
    },
    idRajaongkir: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_rajaongkir'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    companyId: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'company_id'
    },
    company: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    taxId: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'tax_id'
    },
    address1: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'address_1'
    },
    address2: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'address_2'
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
      field: 'country_id'
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "Indonesia"
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'province_id'
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'city_id'
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'zone_id'
    },
    zone1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'zone_1'
    },
    zone2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'zone_2'
    },
    postcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    lintang: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false
    },
    bujur: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_shipping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};

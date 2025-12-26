const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbAddress', {
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
    company: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    companyId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'company_id'
    },
    taxId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'tax_id'
    },
    address1: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'address_1'
    },
    address2: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'address_2'
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'country_id'
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'zone_id'
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'db_address',
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
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "id_rajaongkir",
        using: "BTREE",
        fields: [
          { name: "id_rajaongkir" },
        ]
      },
    ]
  });
};

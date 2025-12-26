const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbManufacturer', {
    manufacturerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'manufacturer_id'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    imgKtp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'img_ktp'
    },
    bankName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'bank_name'
    },
    bankNumber: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'bank_number'
    },
    dateRegister: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_register'
    },
    vendor: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    official: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    reseller: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sort_order'
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    }
  }, {
    sequelize,
    tableName: 'db_manufacturer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "manufacturer_id" },
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
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "kategori",
        using: "BTREE",
        fields: [
          { name: "kategori" },
        ]
      },
      {
        name: "idx_manufacturer_id",
        using: "BTREE",
        fields: [
          { name: "manufacturer_id" },
        ]
      },
      {
        name: "idx_manufacturer_slug",
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};

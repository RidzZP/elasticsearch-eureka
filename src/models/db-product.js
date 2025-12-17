const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProduct', {
    productId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    upc: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ean: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    jan: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    isElibu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'is_elibu'
    },
    isElibuInventory: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'is_elibu_inventory'
    },
    isbn: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    idAuthor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_author'
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mpn: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "Indonesia"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stockStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'stock_status_id'
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    manufacturerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'manufacturer_id'
    },
    manufacturer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true,
      defaultValue: 0
    },
    grosirMin1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_min1'
    },
    grosirPrice1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_price1'
    },
    grosirMin2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_min2'
    },
    grosirPrice2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_price2'
    },
    grosirMin3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_min3'
    },
    grosirPrice3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_price3'
    },
    grosirMin4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_min4'
    },
    grosirPrice4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_price4'
    },
    grosirMin5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_min5'
    },
    grosirPrice5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'grosir_price5'
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    diskon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taxClassId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tax_class_id'
    },
    dateAvailable: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_available'
    },
    weight: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: false,
      defaultValue: 0.000
    },
    weightClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'weight_class_id'
    },
    length: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    width: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    height: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    lengthClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'length_class_id'
    },
    subtract: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    minimum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'sort_order'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    },
    viewed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    storageQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'storage_quantity'
    },
    storeQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'store_quantity'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'mall_id'
    },
    layout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    idSupply: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_supply'
    }
  }, {
    sequelize,
    tableName: 'db_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "model",
        using: "BTREE",
        fields: [
          { name: "model" },
        ]
      },
      {
        name: "sku",
        using: "BTREE",
        fields: [
          { name: "sku" },
        ]
      },
      {
        name: "quantity",
        using: "BTREE",
        fields: [
          { name: "quantity" },
        ]
      },
      {
        name: "stock_status_id",
        using: "BTREE",
        fields: [
          { name: "stock_status_id" },
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
        name: "price",
        using: "BTREE",
        fields: [
          { name: "price" },
        ]
      },
      {
        name: "weight",
        using: "BTREE",
        fields: [
          { name: "weight" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
    ]
  });
};

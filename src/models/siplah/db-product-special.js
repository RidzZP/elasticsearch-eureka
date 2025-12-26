const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductSpecial', {
    productSpecialId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_special_id'
    },
    productCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'product_code'
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'product_name'
    },
    productCategory: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'product_category'
    },
    price: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      defaultValue: 0
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    jenisPromo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'jenis_promo'
    },
    keteranganPromo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'keterangan_promo'
    },
    diskon: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateStart: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      field: 'date_start'
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      field: 'date_end'
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    customerGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_group_id'
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    productSpecialCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_special_category_id'
    }
  }, {
    sequelize,
    tableName: 'db_product_special',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_special_id" },
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
        name: "product_code",
        using: "BTREE",
        fields: [
          { name: "product_code" },
        ]
      },
      {
        name: "price",
        using: "BTREE",
        fields: [
          { name: "price" },
        ]
      },
    ]
  });
};

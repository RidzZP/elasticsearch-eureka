const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductSpecialCategory', {
    productSpecialCategoryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_special_category_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
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
    price: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'db_product_special_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_special_category_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};

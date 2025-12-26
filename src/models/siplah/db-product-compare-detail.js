const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductCompareDetail', {
    idCompareDetail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_compare_detail'
    },
    idCompare: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_compare'
    },
    idCompareParent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_compare_parent'
    },
    idCompareChild: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_compare_child'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_product'
    },
    idKategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_kategori'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    priceType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'price_type'
    },
    ppn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    berat: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    expedisi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ongkir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    packing: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    biayaPacking: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'biaya_packing'
    },
    compareIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'compare_index'
    },
    wrapping: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    selected: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_product_compare_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compare_detail" },
        ]
      },
      {
        name: "id_compare",
        using: "BTREE",
        fields: [
          { name: "id_compare" },
        ]
      },
      {
        name: "id_product",
        using: "BTREE",
        fields: [
          { name: "id_product" },
        ]
      },
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
    ]
  });
};

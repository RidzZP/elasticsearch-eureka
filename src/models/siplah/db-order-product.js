const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderProduct', {
    orderProductId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_product_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    imageBastBadCondition: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'image_bast_bad_condition'
    },
    idNego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_nego'
    },
    idBanding: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_banding'
    },
    priceInclude: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      field: 'price_include'
    },
    dppNilaiLain: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      field: 'dpp_nilai_lain'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    itemMinQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "for aggregation",
      field: 'item_min_quantity'
    },
    itemPriceType: {
      type: DataTypes.ENUM('PRICE_RETAIL','PRICE_WHOLESALE'),
      allowNull: false,
      defaultValue: "PRICE_RETAIL",
      comment: "for aggregation",
      field: 'item_price_type'
    },
    tax: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    qtyTerimaBaik: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'qty_terima_baik'
    },
    qtyTerimaBuruk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'qty_terima_buruk'
    },
    kondisiTerima: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kondisi_terima'
    },
    noteTerima: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'note_terima'
    },
    reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "jika 1, tidak keluar di invoice"
    },
    ppnType: {
      type: DataTypes.ENUM('non','include','exclude','ppn'),
      allowNull: false,
      field: 'ppn_type'
    },
    ppnPriceItem: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      field: 'ppn_price_item'
    },
    ppnPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'ppn_price'
    },
    qtyReq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'qty_req'
    },
    tglReq: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'tgl_req'
    },
    statusReq: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      comment: "0: tidak ada detail request perubahan; 1: detail request perubahan diterima; 2: detail request perubahan ditolak; 3: detail request perubahan diajukan, menunggu approve;",
      field: 'status_req'
    },
    tglStatusReq: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_status_req'
    },
    orderedItemsAddedAt: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "for aggregation"
    },
    ppnTagItem: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_product_id" },
        ]
      },
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
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
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
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
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
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
        name: "quantity",
        using: "BTREE",
        fields: [
          { name: "quantity" },
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
        name: "idx_order_product_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "idx_order_product_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_order_product_order",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "order_product_idx",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "idx_order_product_order_product",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "idx_order_product",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "idx_db_order_product_id_nego",
        using: "BTREE",
        fields: [
          { name: "id_nego" },
        ]
      },
    ]
  });
};

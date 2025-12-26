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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
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
      allowNull: false
    },
    ean: {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: "puskurbukID"
    },
    jan: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    skKelulusan: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'sk_kelulusan'
    },
    penulis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    idAuthor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_author'
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mpn: {
      type: DataTypes.STRING(64),
      allowNull: false
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
    storageQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'storage_quantity'
    },
    unitType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "Pcs",
      field: 'unit_type'
    },
    stockStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'stock_status_id'
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    manufacturerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 231,
      field: 'manufacturer_id'
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
    dppPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'dpp_price'
    },
    dppNilaiLain: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      field: 'dpp_nilai_lain'
    },
    ppnPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ppn_price'
    },
    pphPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'pph_price'
    },
    danaTerima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'dana_terima'
    },
    priceSale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceNego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'price_nego'
    },
    price1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosirMin1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_min1'
    },
    grosirPrice1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_price1'
    },
    grosirMin2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_min2'
    },
    grosirPrice2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_price2'
    },
    grosirMin3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_min3'
    },
    grosirPrice3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_price3'
    },
    grosirMin4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_min4'
    },
    grosirPrice4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grosir_price4'
    },
    kondisi: {
      type: DataTypes.ENUM('Baru','Bekas'),
      allowNull: false
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
    ppn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pph: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taxClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tax_class_id'
    },
    dateAvailable: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'date_available'
    },
    jenjang: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kelas: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    width: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    height: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    lengthClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'length_class_id'
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kertasIsi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'kertas_isi'
    },
    kertasCover: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'kertas_cover'
    },
    warnaIsi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'warna_isi'
    },
    warnaCover: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'warna_cover'
    },
    finishing: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    penjilidan: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    processor: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    memory: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    harddisk: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cdDvd: {
      type: DataTypes.STRING(6),
      allowNull: false,
      field: 'cd_dvd'
    },
    monitor: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sistemOperasi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'sistem_operasi'
    },
    aplikasiTerpasang: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'aplikasi_terpasang'
    },
    garansi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    barangProdusen: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'barang_produsen'
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
    idUserApprove: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_user_approve'
    },
    blokir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    disabled: {
      type: DataTypes.ENUM('N','Y'),
      allowNull: false,
      defaultValue: "N"
    },
    hapus: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_added'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_modified'
    },
    dateVerified: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_verified'
    },
    dateDeleted: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_deleted'
    },
    viewed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    storeQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'store_quantity'
    },
    layout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    lay: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idSupply: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_supply'
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'item_type'
    },
    bookId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'book_id'
    },
    lamaPengerjaan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'lama_pengerjaan'
    },
    isImageExternal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'is_image_external'
    },
    grosirPricezone1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'grosir_pricezone1'
    },
    grosirPricezone2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'grosir_pricezone2'
    },
    grosirPricezone3: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'grosir_pricezone3'
    },
    grosirPricezone4: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'grosir_pricezone4'
    },
    grosirPricezone5: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'grosir_pricezone5'
    },
    produksi: {
      type: DataTypes.ENUM('Dalam Negeri','Luar Negeri'),
      allowNull: false
    },
    availability: {
      type: DataTypes.ENUM('Ready Stock','PreOrder'),
      allowNull: false
    },
    ppnType: {
      type: DataTypes.ENUM('non','include','exclude','ppn'),
      allowNull: false,
      field: 'ppn_type'
    },
    ppnPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ppnTagItem: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ppnTagName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    monthAdded: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: 'month_added'
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
        name: "product_id",
        unique: true,
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
        name: "idx_product_search",
        using: "BTREE",
        fields: [
          { name: "blokir" },
          { name: "status" },
          { name: "disabled" },
          { name: "hapus" },
          { name: "mall_id" },
          { name: "category_id" },
        ]
      },
      {
        name: "idx_filter_search",
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "disabled" },
          { name: "blokir" },
          { name: "hapus" },
          { name: "storage_quantity" },
          { name: "category_id" },
          { name: "mall_id" },
          { name: "manufacturer_id" },
        ]
      },
      {
        name: "idx_manu_storage_blokir",
        using: "BTREE",
        fields: [
          { name: "manufacturer_id" },
          { name: "storage_quantity" },
          { name: "blokir" },
        ]
      },
      {
        name: "hapus",
        using: "BTREE",
        fields: [
          { name: "hapus" },
        ]
      },
      {
        name: "idx_model",
        using: "BTREE",
        fields: [
          { name: "model" },
        ]
      },
      {
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "idx_status",
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "id_user_approve" },
          { name: "disabled" },
          { name: "hapus" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "blokir" },
          { name: "disabled" },
          { name: "hapus" },
          { name: "date_added" },
        ]
      },
      {
        name: "idx_price",
        using: "BTREE",
        fields: [
          { name: "price" },
          { name: "dpp_price" },
          { name: "dpp_nilai_lain" },
          { name: "ppn_price" },
          { name: "pph_price" },
        ]
      },
      {
        name: "db_product_model_IDX",
        type: "FULLTEXT",
        fields: [
          { name: "model" },
        ]
      },
    ]
  });
};

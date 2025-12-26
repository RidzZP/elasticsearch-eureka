const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCart', {
    idCart: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_cart'
    },
    idProduk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_produk'
    },
    idCompare: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_compare'
    },
    idCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_customer'
    },
    sekolahId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sekolah_id'
    },
    sumberDana: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'sumber_dana'
    },
    nilaiTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nilai_transaksi'
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateAdd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_add'
    },
    nego: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    negoHarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nego_harga'
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'cabang_id'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ppnPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      field: 'ppn_price'
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
    praTransaksi: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pra_transaksi'
    },
    praItems: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pra_items'
    },
    praKurir: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pra_kurir'
    },
    praKurircost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'pra_kurircost'
    },
    praPayment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pra_payment'
    },
    praTop: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pra_top'
    },
    praWrapping: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pra_wrapping'
    },
    sumberDana: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_cart',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cart" },
        ]
      },
      {
        name: "pra_transaksi",
        using: "BTREE",
        fields: [
          { name: "pra_transaksi" },
        ]
      },
      {
        name: "pra_items",
        using: "BTREE",
        fields: [
          { name: "pra_items" },
        ]
      },
      {
        name: "pra_kurir",
        using: "BTREE",
        fields: [
          { name: "pra_kurir" },
        ]
      },
      {
        name: "pra_payment",
        using: "BTREE",
        fields: [
          { name: "pra_payment" },
        ]
      },
      {
        name: "sumberDana",
        using: "BTREE",
        fields: [
          { name: "sumberDana" },
        ]
      },
      {
        name: "pra_wrapping",
        using: "BTREE",
        fields: [
          { name: "pra_wrapping" },
        ]
      },
      {
        name: "pra_top",
        using: "BTREE",
        fields: [
          { name: "pra_top" },
        ]
      },
      {
        name: "pra_kurircost",
        using: "BTREE",
        fields: [
          { name: "pra_kurircost" },
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
        name: "nego",
        using: "BTREE",
        fields: [
          { name: "nego" },
        ]
      },
      {
        name: "idx_sekolah_produk",
        using: "BTREE",
        fields: [
          { name: "sekolah_id" },
          { name: "id_produk" },
        ]
      },
      {
        name: "idx_id_cart",
        using: "BTREE",
        fields: [
          { name: "id_cart" },
        ]
      },
    ]
  });
};

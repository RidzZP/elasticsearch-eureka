const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiplahDimensiTransaksi', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kdMarketplace: {
      type: DataTypes.STRING(7),
      allowNull: true,
      defaultValue: "sipEu1",
      field: 'kd_marketplace'
    },
    kdProp: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_prop'
    },
    nmProp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_prop'
    },
    kdKabKota: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_kab_kota'
    },
    nmKabKota: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_kab_kota'
    },
    sekolahId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'sekolah_id'
    },
    npsn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nmSekolah: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_sekolah'
    },
    alamatSekolah: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'alamat_sekolah'
    },
    idToko: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_toko'
    },
    nmToko: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_toko'
    },
    kdPropToko: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_prop_toko'
    },
    nmPropToko: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_prop_toko'
    },
    kdKabKotaToko: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_kab_kota_toko'
    },
    nmKabKotaToko: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_kab_kota_toko'
    },
    alamatToko: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'alamat_toko'
    },
    kdSumberDana: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kd_sumber_dana'
    },
    sumberDana: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'sumber_dana'
    },
    idTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_transaksi'
    },
    nilaiTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nilai_transaksi'
    },
    kdStatusTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kd_status_transaksi'
    },
    statusTransaksi: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'status_transaksi'
    },
    kdStatusPembayaran: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'kd_status_pembayaran'
    },
    statusPembayaran: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'status_pembayaran'
    },
    tglTransaksi: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_transaksi'
    },
    itemNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'item_no'
    },
    kategoriBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kategori_barang'
    },
    nmKategoriBarang: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_kategori_barang'
    },
    idBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_barang'
    },
    nmBarang: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nm_barang'
    },
    merkBrand: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'merk_brand'
    },
    hargaSatuan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_satuan'
    },
    hargaSatuanNego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_satuan_nego'
    },
    hargaPpn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_ppn'
    },
    jmlBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_barang'
    },
    jmlHargaTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'jml_harga_transaksi'
    },
    hargaOngkir: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_ongkir'
    },
    tglUpdateTransaksi: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_update_transaksi'
    },
    idPengguna: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'id_pengguna'
    },
    namaPengguna: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_pengguna'
    },
    poNo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'po_no'
    },
    invoiceNo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'invoice_no'
    },
    ekspedisi: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tglBast: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_bast'
    },
    tglPembayaran: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_pembayaran'
    },
    sumberDanaWs: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'sumber_dana_ws'
    },
    noRekeningMp: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'no_rekening_mp'
    },
    namaRekeningMp: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'nama_rekening_mp'
    },
    namaBankRekeningMp: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_bank_rekening_mp'
    },
    noRekeningToko: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'no_rekening_toko'
    },
    namaRekeningToko: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'nama_rekening_toko'
    },
    namaBankRekeningToko: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_bank_rekening_toko'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'siplah_dimensi_transaksi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
          { name: "kd_prop_toko" },
        ]
      },
      {
        name: "id_transaksi",
        using: "BTREE",
        fields: [
          { name: "id_transaksi" },
          { name: "id_barang" },
          { name: "kategori_barang" },
        ]
      },
      {
        name: "kd_prop",
        using: "BTREE",
        fields: [
          { name: "kd_prop" },
          { name: "kd_kab_kota" },
          { name: "npsn" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiplahDimensiProduk', {
    dimensiId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'dimensi_id'
    },
    kdMp: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "sipEu1",
      field: 'kd_mp'
    },
    kdToko: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_toko'
    },
    kdProp: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'kd_prop'
    },
    nmProp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_prop'
    },
    kdKabKota: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'kd_kab_kota'
    },
    nmKabKota: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_kab_kota'
    },
    kdKec: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'kd_kec'
    },
    nmKecamatan: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nm_kecamatan'
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nmToko: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nm_toko'
    },
    kdStatusToko: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kd_status_toko'
    },
    statusToko: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'status_toko'
    },
    kdStatusBadanHukum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kd_status_badan_hukum'
    },
    statusBadanHukum: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'status_badan_hukum'
    },
    tglDaftarToko: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_daftar_toko'
    },
    tglApproveToko: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_approve_toko'
    },
    tglUpdateToko: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_update_toko'
    },
    kdBarang: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'kd_barang'
    },
    nmBarang: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'nm_barang'
    },
    kdStatusBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kd_status_barang'
    },
    statusBarang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'status_barang'
    },
    kdJenisBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kd_jenis_barang'
    },
    jenisBarang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'jenis_barang'
    },
    spesifikasiBarang: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'spesifikasi_barang'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kategori: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hargaBarangRegular: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_barang_regular'
    },
    hargaBarangZona1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_barang_zona1'
    },
    hargaBarangZona2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_barang_zona2'
    },
    hargaBarangZona3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_barang_zona3'
    },
    hargaBarangZona4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_barang_zona4'
    },
    hargaBarangZona5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_barang_zona5'
    },
    tglBarangDibuat: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_barang_dibuat'
    },
    tglBarangUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_barang_update'
    },
    tokoKategoriUsaha: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'toko_kategori_usaha'
    },
    barangAsal: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "dalam negeri",
      field: 'barang_asal'
    },
    barangProdusen: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'barang_produsen'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'siplah_dimensi_produk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dimensi_id" },
        ]
      },
    ]
  });
};

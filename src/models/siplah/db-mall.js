const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMall', {
    mallId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'mall_id'
    },
    mallCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'mall_code'
    },
    mallType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_type'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    idRajaongkir: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_rajaongkir'
    },
    imageHeader: {
      type: DataTypes.STRING(250),
      allowNull: false,
      field: 'image_header'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    namaPerusahaan: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nama_perusahaan'
    },
    namaMerk: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nama_merk'
    },
    alamatPerusahaan: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'alamat_perusahaan'
    },
    jenis: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    jenisUsaha: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'jenis_usaha'
    },
    kategoriUsaha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kategori_usaha'
    },
    emailPic: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'email_pic'
    },
    namaPic: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nama_pic'
    },
    jabatanPic: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'jabatan_pic'
    },
    telpPic: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'telp_pic'
    },
    ktpId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'ktp_id'
    },
    npwpId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'npwp_id'
    },
    npwp: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    siupId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'siup_id'
    },
    siup: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tdpId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tdp_id'
    },
    tdp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    haki: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    sppkp: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    skt: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    aktaPerusahaan: {
      type: DataTypes.STRING(250),
      allowNull: true,
      field: 'akta_perusahaan'
    },
    documenLain: {
      type: DataTypes.STRING(250),
      allowNull: true,
      field: 'documen_lain'
    },
    ktp: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    imgKtp: {
      type: DataTypes.STRING(250),
      allowNull: true,
      field: 'img_ktp'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addressNpwp: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'address_npwp'
    },
    islandId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'island_id'
    },
    island: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'province_id'
    },
    provinceKd: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'province_kd'
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'city_id'
    },
    cityKd: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'city_kd'
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'zone_id'
    },
    zoneKd: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'zone_kd'
    },
    zone1: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "kecamatan",
      field: 'zone_1'
    },
    zone2: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'zone_2'
    },
    kelurahanKd: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'kelurahan_kd'
    },
    kelurahan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Indonesia"
    },
    lat: {
      type: DataTypes.DOUBLE(10,7),
      allowNull: false
    },
    lon: {
      type: DataTypes.DOUBLE(10,7),
      allowNull: false
    },
    lamaPengiriman: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 14,
      field: 'lama_pengiriman'
    },
    owner: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    emailEn: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'email_en'
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "d623c9206"
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
    atasNama: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'atas_nama'
    },
    kurirFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'kurir_fee'
    },
    dateRegister: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
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
    facebook: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    instagram: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twitter: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    saldo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    stepRegistration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'step_registration'
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    statusApprove: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_approve'
    },
    idUserApprove: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'id_user_approve'
    },
    dateApprove: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_approve'
    },
    blokir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_update'
    },
    noRb: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'no_rb'
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cabang_id'
    },
    statusTunjukCabang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_tunjuk_cabang'
    },
    sandbox: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false
    },
    isClosest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'is_closest'
    },
    isTrueppn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'is_trueppn'
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userAgent: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_agent'
    }
  }, {
    sequelize,
    tableName: 'db_mall',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "kelurahan_kd",
        using: "BTREE",
        fields: [
          { name: "kelurahan_kd" },
        ]
      },
      {
        name: "postcode",
        using: "BTREE",
        fields: [
          { name: "postcode" },
        ]
      },
      {
        name: "zone_id",
        using: "BTREE",
        fields: [
          { name: "zone_id" },
        ]
      },
      {
        name: "kategori_usaha",
        using: "BTREE",
        fields: [
          { name: "kategori_usaha" },
        ]
      },
      {
        name: "status_approve",
        using: "BTREE",
        fields: [
          { name: "status_approve" },
        ]
      },
      {
        name: "jenis_usaha",
        using: "BTREE",
        fields: [
          { name: "jenis_usaha" },
        ]
      },
      {
        name: "date_register",
        using: "BTREE",
        fields: [
          { name: "date_register" },
        ]
      },
      {
        name: "date_approve",
        using: "BTREE",
        fields: [
          { name: "date_approve" },
        ]
      },
      {
        name: "date_update",
        using: "BTREE",
        fields: [
          { name: "date_update" },
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
        name: "province_id",
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
      {
        name: "city_id",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "zone_1",
        using: "BTREE",
        fields: [
          { name: "zone_1" },
        ]
      },
      {
        name: "province_kd",
        using: "BTREE",
        fields: [
          { name: "province_kd" },
        ]
      },
      {
        name: "city_kd",
        using: "BTREE",
        fields: [
          { name: "city_kd" },
        ]
      },
      {
        name: "zone_kd",
        using: "BTREE",
        fields: [
          { name: "zone_kd" },
        ]
      },
      {
        name: "nama_pic",
        using: "BTREE",
        fields: [
          { name: "nama_pic" },
        ]
      },
      {
        name: "id_rajaongkir",
        using: "BTREE",
        fields: [
          { name: "id_rajaongkir" },
        ]
      },
      {
        name: "is_trueppnIndex",
        using: "BTREE",
        fields: [
          { name: "is_trueppn" },
        ]
      },
      {
        name: "idx_mall_mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
          { name: "status_approve" },
        ]
      },
      {
        name: "idx_mall_id_status",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
          { name: "status_approve" },
        ]
      },
      {
        name: "idx_mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "idx_mall_filter",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
          { name: "status_approve" },
        ]
      },
      {
        name: "idx_db_mall_status_approve",
        using: "BTREE",
        fields: [
          { name: "status_approve" },
        ]
      },
      {
        name: "idx_mall_status_approve",
        using: "BTREE",
        fields: [
          { name: "status_approve" },
        ]
      },
      {
        name: "idx_mall_search",
        using: "BTREE",
        fields: [
          { name: "status_approve" },
          { name: "blokir" },
          { name: "name" },
        ]
      },
      {
        name: "idx_mall_location",
        using: "BTREE",
        fields: [
          { name: "province" },
          { name: "city" },
          { name: "island_id" },
          { name: "province_kd" },
        ]
      },
      {
        name: "idx_mall_category",
        using: "BTREE",
        fields: [
          { name: "kategori_usaha" },
        ]
      },
      {
        name: "idx_mall_closest",
        using: "BTREE",
        fields: [
          { name: "is_closest" },
        ]
      },
      {
        name: "idx_mall_active",
        using: "BTREE",
        fields: [
          { name: "status_approve" },
          { name: "blokir" },
          { name: "province" },
        ]
      },
      {
        name: "idx_name_mall",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_mall_type",
        using: "BTREE",
        fields: [
          { name: "mall_type" },
        ]
      },
      {
        name: "idx_fulltext_mall_name",
        type: "FULLTEXT",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "idx_ft_mall_name",
        type: "FULLTEXT",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMallCabang', {
    cabangId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cabang_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    mallCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'mall_code'
    },
    idRajaongkir: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_rajaongkir'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    namaPerusahaan: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nama_perusahaan'
    },
    pindah: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    regio: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kacab: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    target: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'province_id'
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    imageHeader: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'image_header'
    },
    avatar: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'city_id'
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'zone_id'
    },
    zone1: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'zone_1'
    },
    zone2: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'zone_2'
    },
    postcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lat: {
      type: DataTypes.DOUBLE(10,7),
      allowNull: false
    },
    lon: {
      type: DataTypes.DOUBLE(10,7),
      allowNull: false
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
    dateRegister: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
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
      allowNull: false
    },
    statusApprove: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_approve'
    },
    blokir: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_mall_cabang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cabang_id" },
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
        name: "nama_perusahaan",
        using: "BTREE",
        fields: [
          { name: "nama_perusahaan" },
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
        name: "province",
        using: "BTREE",
        fields: [
          { name: "province" },
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
        name: "id_rajaongkir",
        using: "BTREE",
        fields: [
          { name: "id_rajaongkir" },
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
        name: "zone_id",
        using: "BTREE",
        fields: [
          { name: "zone_id" },
        ]
      },
    ]
  });
};

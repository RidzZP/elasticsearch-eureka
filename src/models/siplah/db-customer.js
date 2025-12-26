const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCustomer', {
    customerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'customer_id'
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'store_id'
    },
    penggunaNik: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "oauth_Custom_profile_nik",
      field: 'pengguna_nik'
    },
    penggunaNip: {
      type: DataTypes.STRING(18),
      allowNull: false,
      comment: "oauth_Custom_profile_nip",
      field: 'pengguna_nip'
    },
    penggunaId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "oauth_Custom_profile_pengguna_id",
      field: 'pengguna_id'
    },
    sekolahId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "oauth_Custom_infosp_sekolah_id",
      field: 'sekolah_id'
    },
    peranId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "oauth_Custom_profile_peran_id",
      field: 'peran_id'
    },
    peran: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "oauth_Custom_profile_peran"
    },
    ptkId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "oauth_Custom_profile_ptk_id",
      field: 'ptk_id'
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "oauth_Custom_username"
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "oauth_Custom_username"
    },
    jenis: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "oauth_Custom_profile_jenis"
    },
    jabatan: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "oauth_Custom_profile_jabatan"
    },
    email: {
      type: DataTypes.STRING(96),
      allowNull: false,
      comment: "oauth_Custom_email"
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "oauth_Custom_profile_no_telepon"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "oauth_Custom_profile_no_hp"
    },
    fax: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    kodeWilayah: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "oauth_Custom_infosp_kd_prov",
      field: 'kode_wilayah'
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "cffe828c4049bd0ce4b9abbef3ab84939d020f5c"
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "HYAPOl5f5"
    },
    cart: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wishlist: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'address_id'
    },
    customerGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_group_id'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "oauth_Custom_avatar_url"
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_added'
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'last_login'
    },
    statusApprove: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_approve'
    },
    blokir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    device: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "Web"
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
    tableName: 'db_customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "pengguna_id",
        using: "BTREE",
        fields: [
          { name: "pengguna_id" },
        ]
      },
      {
        name: "sekolah_id",
        using: "BTREE",
        fields: [
          { name: "sekolah_id" },
        ]
      },
      {
        name: "peran_id",
        using: "BTREE",
        fields: [
          { name: "peran_id" },
        ]
      },
      {
        name: "firstname",
        using: "BTREE",
        fields: [
          { name: "firstname" },
        ]
      },
      {
        name: "lastname",
        using: "BTREE",
        fields: [
          { name: "lastname" },
        ]
      },
      {
        name: "pengguna_nik",
        using: "BTREE",
        fields: [
          { name: "pengguna_nik" },
        ]
      },
      {
        name: "pengguna_nip",
        using: "BTREE",
        fields: [
          { name: "pengguna_nip" },
        ]
      },
      {
        name: "peran",
        using: "BTREE",
        fields: [
          { name: "peran" },
        ]
      },
      {
        name: "idx_sekolah_date",
        using: "BTREE",
        fields: [
          { name: "sekolah_id" },
          { name: "date_added" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCustomerSchool', {
    schoolId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'school_id'
    },
    sekolahId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      field: 'sekolah_id'
    },
    idRajaongkir: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'id_rajaongkir'
    },
    rajaongkirId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'rajaongkir_id'
    },
    ppnTagSchool: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ppnTagName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    namaSekolah: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nama_sekolah'
    },
    npsn: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    npwp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nmWp: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'nm_wp'
    },
    bentukPendidikanId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'bentuk_pendidikan_id'
    },
    bentukPendidikan: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'bentuk_pendidikan'
    },
    telepon: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kepalaSekolah: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'kepala_sekolah'
    },
    nipKepalaSekolah: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'nip_kepala_sekolah'
    },
    hpKepalaSekolah: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'hp_kepala_sekolah'
    },
    emailKepalaSekolah: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email_kepala_sekolah'
    },
    bendaharaSekolah: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'bendahara_sekolah'
    },
    nipBendaharaSekolah: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'nip_bendahara_sekolah'
    },
    emailBendahara: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email_bendahara'
    },
    bendaharaBos: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'bendahara_bos'
    },
    nipBendaharaBos: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'nip_bendahara_bos'
    },
    zona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    provinsiId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'provinsi_id'
    },
    kdProvinsi: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'kd_provinsi'
    },
    provinsi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kotaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'kota_id'
    },
    kdKota: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'kd_kota'
    },
    kota: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kecamatanId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'kecamatan_id'
    },
    kdKecamatan: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'kd_kecamatan'
    },
    kecamatan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alamatJalan: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'alamat_jalan'
    },
    alamatRt: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'alamat_rt'
    },
    alamatRw: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'alamat_rw'
    },
    desa: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kelurahan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kodePos: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'kode_pos'
    },
    lintang: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: true
    },
    bujur: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: true
    },
    statusSekolah: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'status_sekolah'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    }
  }, {
    sequelize,
    tableName: 'db_customer_school',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "school_id" },
          { name: "sekolah_id" },
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
        name: "nama_sekolah",
        using: "BTREE",
        fields: [
          { name: "nama_sekolah" },
        ]
      },
      {
        name: "npsn",
        using: "BTREE",
        fields: [
          { name: "npsn" },
        ]
      },
      {
        name: "provinsi_id",
        using: "BTREE",
        fields: [
          { name: "provinsi_id" },
        ]
      },
      {
        name: "kota_id",
        using: "BTREE",
        fields: [
          { name: "kota_id" },
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
        name: "rajaongkir_id",
        using: "BTREE",
        fields: [
          { name: "rajaongkir_id" },
        ]
      },
      {
        name: "kecamatan_id",
        using: "BTREE",
        fields: [
          { name: "kecamatan_id" },
        ]
      },
      {
        name: "provinsi",
        using: "BTREE",
        fields: [
          { name: "provinsi" },
        ]
      },
      {
        name: "kecamatan",
        using: "BTREE",
        fields: [
          { name: "kecamatan" },
        ]
      },
      {
        name: "zona",
        using: "BTREE",
        fields: [
          { name: "zona" },
        ]
      },
      {
        name: "kota",
        using: "BTREE",
        fields: [
          { name: "kota" },
        ]
      },
      {
        name: "kepala_sekolah",
        using: "BTREE",
        fields: [
          { name: "kepala_sekolah" },
        ]
      },
      {
        name: "email_kepala_sekolah",
        using: "BTREE",
        fields: [
          { name: "email_kepala_sekolah" },
        ]
      },
      {
        name: "kd_kota",
        using: "BTREE",
        fields: [
          { name: "kd_kota" },
          { name: "kd_kecamatan" },
          { name: "kd_provinsi" },
        ]
      },
    ]
  });
};

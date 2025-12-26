const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPengawa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pengawasId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "from sso",
      field: 'pengawas_id'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    jabatan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kodeInstansi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'kode_instansi'
    },
    namaInstansi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_instansi'
    },
    nuptk: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nik: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "json format"
    },
    cityPermissions: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "json format",
      field: 'city_permissions'
    },
    provincePermissions: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "json format",
      field: 'province_permissions'
    },
    educationPermissions: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "json format",
      field: 'education_permissions'
    },
    fundPermissions: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "json format",
      field: 'fund_permissions'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    pin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    blokir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    online: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'last_login'
    },
    dateAktivasi: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_aktivasi'
    },
    dateBlokir: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_blokir'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    },
    instansi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_added'
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
    tableName: 'db_pengawas',
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
    ]
  });
};

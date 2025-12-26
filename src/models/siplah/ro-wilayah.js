const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoWilayah', {
    kelurahanId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'kelurahan_id'
    },
    kdProp: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_prop'
    },
    propinsi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kdKabKota: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_kab_kota'
    },
    kabupatenKota: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'kabupaten_kota'
    },
    kdKec: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_kec'
    },
    kecamatan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kdKelurahanDesa: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'kd_kelurahan_desa'
    },
    kelurahanDesa: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'kelurahan_desa'
    }
  }, {
    sequelize,
    tableName: 'ro_wilayah',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kelurahan_id" },
        ]
      },
    ]
  });
};

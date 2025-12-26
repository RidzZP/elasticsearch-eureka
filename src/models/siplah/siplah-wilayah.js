const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiplahWilayah', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kdProp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'kd_prop'
    },
    propinsi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kdKabKota: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'kd_kab_kota'
    },
    kabupatenKota: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'kabupaten_kota'
    },
    kdKec: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'kd_kec'
    },
    kecamatan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kdKelurahanDesa: {
      type: DataTypes.STRING(15),
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
    tableName: 'siplah_wilayah',
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

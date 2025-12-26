const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbSpesial', {
    idSpesial: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_spesial'
    },
    namaTema: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'nama_tema'
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bgHeader: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'bg_header'
    },
    bgSession: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'bg_session'
    },
    avaBawah: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'ava_bawah'
    },
    tglDibuat: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_dibuat'
    },
    aktif: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_spesial',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_spesial" },
        ]
      },
    ]
  });
};

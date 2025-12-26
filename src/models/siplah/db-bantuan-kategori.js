const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbBantuanKategori', {
    idBantuanKategori: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_bantuan_kategori'
    },
    namaBantuanKategori: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'nama_bantuan_kategori'
    },
    slugBantuanKategori: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'slug_bantuan_kategori'
    },
    imgBantuanKategori: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'img_bantuan_kategori'
    },
    home: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'db_bantuan_kategori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bantuan_kategori" },
        ]
      },
    ]
  });
};

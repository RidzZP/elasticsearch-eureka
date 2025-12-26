const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbBantuan', {
    idBantuan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_bantuan'
    },
    judulPertanyaan: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'judul_pertanyaan'
    },
    jawabPertanyaan: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'jawab_pertanyaan'
    },
    kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slugJudul: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'slug_judul'
    },
    dilihat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    home: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_bantuan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bantuan" },
        ]
      },
    ]
  });
};

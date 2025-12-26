const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbSpesifikasi', {
    idSpesifikasi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_spesifikasi'
    },
    namaSpesifikasi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_spesifikasi'
    }
  }, {
    sequelize,
    tableName: 'db_spesifikasi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_spesifikasi" },
        ]
      },
    ]
  });
};

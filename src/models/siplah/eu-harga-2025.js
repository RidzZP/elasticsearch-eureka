const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EuHarga2025', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    judul: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    awal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    akhir: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'eu_harga2025',
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
      {
        name: "kode",
        using: "BTREE",
        fields: [
          { name: "kode" },
        ]
      },
    ]
  });
};

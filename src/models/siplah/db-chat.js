const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbChat', {
    idChat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_chat'
    },
    dari: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kepada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isiPesan: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'isi_pesan'
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dibaca: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
    ]
  });
};

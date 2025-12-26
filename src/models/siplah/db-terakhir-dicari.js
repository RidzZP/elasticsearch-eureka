const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbTerakhirDicari', {
    idTerakhirDicari: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_terakhir_dicari'
    },
    keyword: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    kali: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    dateCari: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_cari'
    }
  }, {
    sequelize,
    tableName: 'db_terakhir_dicari',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_terakhir_dicari" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbKurir', {
    idKurir: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_kurir'
    },
    kurir: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    dateAdd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_add'
    }
  }, {
    sequelize,
    tableName: 'db_kurir',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_kurir" },
        ]
      },
    ]
  });
};

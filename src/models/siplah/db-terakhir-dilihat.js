const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbTerakhirDilihat', {
    idTerakhirDilihat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_terakhir_dilihat'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    dateLihat: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_lihat'
    }
  }, {
    sequelize,
    tableName: 'db_terakhir_dilihat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_terakhir_dilihat" },
        ]
      },
    ]
  });
};

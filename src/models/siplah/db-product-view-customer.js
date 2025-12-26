const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductViewCustomer', {
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
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    dateLihat: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_lihat'
    }
  }, {
    sequelize,
    tableName: 'db_product_view_customer',
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

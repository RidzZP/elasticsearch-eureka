const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductToNego', {
    negoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'nego_id'
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
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hargaNegoCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_nego_customer'
    },
    hargaNegoSeller: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_nego_seller'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_product_to_nego',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nego_id" },
        ]
      },
      {
        name: "nego_id",
        using: "BTREE",
        fields: [
          { name: "nego_id" },
        ]
      },
    ]
  });
};

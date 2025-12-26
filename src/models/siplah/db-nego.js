const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbNego', {
    idNego: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_nego'
    },
    idCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_customer'
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_product'
    },
    idMall: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_mall'
    },
    tglAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_added'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0:baru,1:diterima mall,2:ditolak mall, 3:diterima sekolah,4:ditolak sekolah,5:kadarluarsa"
    },
    selesai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isFromCompare: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'is_from_compare'
    }
  }, {
    sequelize,
    tableName: 'db_nego',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_nego" },
        ]
      },
      {
        name: "id_nego",
        using: "BTREE",
        fields: [
          { name: "id_nego" },
        ]
      },
      {
        name: "id_customer",
        using: "BTREE",
        fields: [
          { name: "id_customer" },
        ]
      },
      {
        name: "id_product",
        using: "BTREE",
        fields: [
          { name: "id_product" },
        ]
      },
      {
        name: "id_mall",
        using: "BTREE",
        fields: [
          { name: "id_mall" },
        ]
      },
      {
        name: "tgl_added",
        using: "BTREE",
        fields: [
          { name: "tgl_added" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "selesai",
        using: "BTREE",
        fields: [
          { name: "selesai" },
        ]
      },
    ]
  });
};

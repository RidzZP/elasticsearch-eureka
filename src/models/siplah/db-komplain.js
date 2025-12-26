const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbKomplain', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
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
    idKomplainKategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_komplain_kategori'
    },
    komplain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    gambar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    solusi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eskalasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    },
    lastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'last_update'
    },
    dateDeal: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_deal'
    },
    timeDeal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'time_deal'
    },
    complaintFrom: {
      type: DataTypes.ENUM('mall','user'),
      allowNull: false,
      field: 'complaint_from'
    }
  }, {
    sequelize,
    tableName: 'db_komplain',
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
    ]
  });
};

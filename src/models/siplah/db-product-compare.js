const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProductCompare', {
    idCompare: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_compare'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    sekolahId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'sekolah_id'
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sumberDana: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'sumber_dana'
    },
    nilaiTransaksi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'nilai_transaksi'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_product_compare',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compare" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "sekolah_id",
        using: "BTREE",
        fields: [
          { name: "sekolah_id" },
        ]
      },
      {
        name: "id_compare",
        using: "BTREE",
        fields: [
          { name: "id_compare" },
        ]
      },
    ]
  });
};

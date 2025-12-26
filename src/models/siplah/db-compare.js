const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCompare', {
    idCompare: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_compare'
    },
    idCompareParent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_compare_parent'
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_user'
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_product'
    },
    idNego: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_nego'
    },
    idKategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_kategori'
    },
    idMall: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_mall'
    },
    mall: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    berat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    priceNego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'price_nego'
    },
    priceType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'price_type'
    },
    ppn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expedisiServiceCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'expedisi_service_code'
    },
    expedisi: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    expedisiOngkir: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'expedisi_ongkir'
    },
    insurance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wrapping: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sumberDana: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'sumber_dana'
    },
    nilaiTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nilai_transaksi'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    },
    compareIndex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'compare_index'
    }
  }, {
    sequelize,
    tableName: 'db_compare',
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
    ]
  });
};

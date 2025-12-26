const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMallCabangToMall', {
    idMallCabangToMall: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_mall_cabang_to_mall'
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cabang_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    provinsi: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    setujuMitra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'setuju_mitra'
    },
    cabangDulu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_mall_cabang_to_mall',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mall_cabang_to_mall" },
        ]
      },
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "cabang_id",
        using: "BTREE",
        fields: [
          { name: "cabang_id" },
        ]
      },
      {
        name: "idx_cabang_mall",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
          { name: "cabang_id" },
        ]
      },
    ]
  });
};

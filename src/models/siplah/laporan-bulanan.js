const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanBulanan', {
    idx: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cabangId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cabang_id'
    },
    cabang: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    het: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    non: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tahun: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    bulan: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    bulanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'bulan_id'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'laporan_bulanan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
      {
        name: "cabang",
        using: "BTREE",
        fields: [
          { name: "cabang" },
        ]
      },
    ]
  });
};

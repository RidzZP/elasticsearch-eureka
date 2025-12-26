const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMallToRek', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    codeBank: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'code_bank'
    },
    namaBank: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_bank'
    },
    cabang: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nomorRekening: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nomor_rekening'
    },
    atasNama: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'atas_nama'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_mall_to_rek',
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
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "nama_bank",
        using: "BTREE",
        fields: [
          { name: "nama_bank" },
        ]
      },
    ]
  });
};

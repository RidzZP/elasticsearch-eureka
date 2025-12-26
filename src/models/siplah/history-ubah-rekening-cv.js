const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HistoryUbahRekeningCv', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    noRekening: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'no_rekening'
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_user'
    },
    cabang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atasNama: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'atas_nama'
    },
    namaBank: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nama_bank'
    },
    dateUpdate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_update'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    idApprove: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_approve'
    },
    approve: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: true,
      defaultValue: "0"
    },
    dateApprove: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_approve'
    }
  }, {
    sequelize,
    tableName: 'history_ubah_rekening_cv',
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

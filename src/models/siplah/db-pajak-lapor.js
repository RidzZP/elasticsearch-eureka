const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPajakLapor', {
    laporId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'lapor_id'
    },
    idFromClient: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'id_from_client'
    },
    requestId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    noDok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tglDok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pihak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    barangDanJasa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    objekPajak: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_pajak_lapor',
    timestamps: false
  });
};

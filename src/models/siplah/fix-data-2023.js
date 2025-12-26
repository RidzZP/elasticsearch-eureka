const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FixData2023', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transactionMpid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'transaction_mpid'
    },
    npsn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    namaSekolah: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_sekolah'
    },
    nilaiTransaksi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nilai_transaksi'
    },
    lastEventName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'last_event_name'
    },
    collectorEventName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'collector_event_name'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    },
    endpoint: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    invoice: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fix_data2023',
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
        name: "date_created",
        using: "BTREE",
        fields: [
          { name: "date_created" },
          { name: "invoice" },
          { name: "collector_event_name" },
          { name: "last_event_name" },
          { name: "nilai_transaksi" },
          { name: "nama_sekolah" },
          { name: "npsn" },
        ]
      },
      {
        name: "transaction_mpid",
        using: "BTREE",
        fields: [
          { name: "transaction_mpid" },
        ]
      },
    ]
  });
};

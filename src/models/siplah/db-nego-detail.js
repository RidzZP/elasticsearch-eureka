const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbNegoDetail', {
    idNegoDetail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_nego_detail'
    },
    idNego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_nego'
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harga: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    dpp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ppn: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dppNilaiLain: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      field: 'dpp_nilai_lain'
    },
    top: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kurir: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pembungkus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pembungkusFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pembungkus_fee'
    },
    asuransi: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    asuransiPersen: {
      type: DataTypes.STRING(5),
      allowNull: false,
      field: 'asuransi_persen'
    },
    asuransiFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'asuransi_fee'
    },
    spek: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nota: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hargaTambahan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'harga_tambahan'
    },
    tglAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_added'
    },
    siapa: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_nego_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_nego_detail" },
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
        name: "harga_tambahan",
        using: "BTREE",
        fields: [
          { name: "harga_tambahan" },
        ]
      },
      {
        name: "harga",
        using: "BTREE",
        fields: [
          { name: "harga" },
        ]
      },
    ]
  });
};

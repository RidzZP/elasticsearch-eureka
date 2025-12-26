const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbEkspedisi', {
    idEkspedisi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_ekspedisi'
    },
    kodeEkspedisi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'kode_ekspedisi'
    },
    namaEkspedisi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_ekspedisi'
    },
    logo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    berlaku: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    courierId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "for aggregation",
      field: 'courier_id'
    },
    courierName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "for aggregation",
      field: 'courier_name'
    }
  }, {
    sequelize,
    tableName: 'db_ekspedisi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ekspedisi" },
        ]
      },
    ]
  });
};

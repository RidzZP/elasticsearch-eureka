const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbBank', {
    idBank: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_bank'
    },
    bank: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bankCode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    noRek: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'no_rek'
    },
    cabang: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    mitra: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateAdd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_add'
    },
    dateUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_update'
    }
  }, {
    sequelize,
    tableName: 'db_bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bank" },
        ]
      },
      {
        name: "bank",
        using: "BTREE",
        fields: [
          { name: "bank" },
        ]
      },
      {
        name: "slug",
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};

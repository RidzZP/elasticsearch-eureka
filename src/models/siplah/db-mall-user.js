const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMallUser', {
    muserId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'muser_id'
    },
    mallId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'mall_id'
    },
    mall: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    salt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    jabatan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    peran: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_created'
    },
    dateModify: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_modify'
    }
  }, {
    sequelize,
    tableName: 'db_mall_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "muser_id" },
        ]
      },
    ]
  });
};

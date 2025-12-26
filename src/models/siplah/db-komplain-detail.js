const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbKomplainDetail', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idKomplain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_komplain'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    createdTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_time'
    }
  }, {
    sequelize,
    tableName: 'db_komplain_detail',
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

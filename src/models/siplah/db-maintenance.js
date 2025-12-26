const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbMaintenance', {
    idMaintenance: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_maintenance'
    },
    onoff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tertanda: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_maintenance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_maintenance" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WsKela', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    classId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'class_id'
    },
    class: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    levelId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'level_id'
    },
    levelName: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'level_name'
    }
  }, {
    sequelize,
    tableName: 'ws_kelas',
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

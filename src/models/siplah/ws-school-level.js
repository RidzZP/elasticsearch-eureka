const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WsSchoolLevel', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    levelId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'level_id'
    },
    levelName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'level_name'
    }
  }, {
    sequelize,
    tableName: 'ws_school_level',
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

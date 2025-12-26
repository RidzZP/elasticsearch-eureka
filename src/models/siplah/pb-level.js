const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PbLevel', {
    dataSchoolLevelId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'data__school_level_id'
    },
    dataName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'data__name'
    }
  }, {
    sequelize,
    tableName: 'pb_level',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data__school_level_id" },
        ]
      },
    ]
  });
};

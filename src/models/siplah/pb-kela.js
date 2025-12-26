const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PbKela', {
    dataId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'data__id'
    },
    dataClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'data__class'
    },
    dataSchoolLevelSchoolLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'data__school_level__school_level_id'
    },
    dataSchoolLevelName: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'data__school_level__name'
    }
  }, {
    sequelize,
    tableName: 'pb_kelas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data__id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PbSubject', {
    dataId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'data__id'
    },
    dataSchoolClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'data__school_class_id'
    },
    dataName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'data__name'
    },
    dataActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'data__active'
    }
  }, {
    sequelize,
    tableName: 'pb_subject',
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

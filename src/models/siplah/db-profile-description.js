const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProfileDescription', {
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'profile_id'
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'language_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_profile_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profile_id" },
          { name: "language_id" },
        ]
      },
    ]
  });
};

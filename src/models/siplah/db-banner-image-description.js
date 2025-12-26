const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbBannerImageDescription', {
    bannerImageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'banner_image_id'
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'language_id'
    },
    bannerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'banner_id'
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_banner_image_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "banner_image_id" },
          { name: "language_id" },
        ]
      },
    ]
  });
};

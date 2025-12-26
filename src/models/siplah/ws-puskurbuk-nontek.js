const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WsPuskurbukNontek', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    isbn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nuib: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edition: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'publication_year'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    classificationId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'classification_id'
    },
    schoolLevelId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'school_level_id'
    },
    publisherId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'publisher_id'
    },
    prices: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    physicalDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'physical_description'
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    categoryPath: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'category_path'
    },
    categoryIsLeaf: {
      type: DataTypes.ENUM('TRUE','FALSE'),
      allowNull: false,
      field: 'category_is_leaf'
    },
    isDeleted: {
      type: DataTypes.ENUM('FALSE','TRUE'),
      allowNull: false,
      field: 'is_deleted'
    }
  }, {
    sequelize,
    tableName: 'ws_puskurbuk_nonteks',
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

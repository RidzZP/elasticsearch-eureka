const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiplahProductBtp', {
    idx: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subjectId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    classificationId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    classId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    schoolLevelId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    publisherId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prices: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryPath: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    categoryIsLeaf: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'siplah_product_btp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};

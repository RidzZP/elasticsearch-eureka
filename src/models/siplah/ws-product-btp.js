const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WsProductBtp', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nuib: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    classificationId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    classId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    schoolLevelId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    publisherId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    idZone1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_zone_1'
    },
    zone1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'zone_1'
    },
    price1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'price_1'
    },
    idZone2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_zone_2'
    },
    zone2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'zone_2'
    },
    price2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'price_2'
    },
    idZone3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_zone_3'
    },
    zone3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'zone_3'
    },
    price3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'price_3'
    },
    idZone4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_zone_4'
    },
    zone4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'zone_4'
    },
    price4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'price_4'
    },
    idZone5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_zone_5'
    },
    zone5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'zone_5'
    },
    price5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'price_5'
    },
    size: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    width: {
      type: DataTypes.DECIMAL(10,1),
      allowNull: true
    },
    pageCover: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coverWeight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coverMaterial: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coverFinishing: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paperType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paperWeight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    backOfBook: {
      type: DataTypes.DECIMAL(10,1),
      allowNull: true
    },
    bindingTechnique: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categoryId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    categoryPath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    categoryIsLeaf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_product_btp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nuib" },
          { name: "schoolLevelId" },
        ]
      },
    ]
  });
};

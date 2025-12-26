const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WsProductBntp', {
    productId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nuib: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schoolLevelId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'school_level_id'
    },
    schoolLevel: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'school_level'
    },
    classId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'class_id'
    },
    class: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    publisherId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'publisher_id'
    },
    publisher: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    edition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'publication_year'
    },
    tema: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descriptions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pageContent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'page_content'
    },
    pageCover: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'page_cover'
    },
    size: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    backOfBook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'back_of_book'
    },
    categoryId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'category_id'
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    coverWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cover_weight'
    },
    coverMaterial: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'cover_material'
    },
    coverFinishing: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'cover_finishing'
    },
    coverImage: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'cover_image'
    },
    contentMaterial: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'content_material'
    },
    contentColor: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'content_color'
    },
    bindingTechnique: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'binding_technique'
    },
    paper: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    paperWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'paper_weight'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'ws_product_bntp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};

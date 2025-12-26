const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PbBook', {
    idBook: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_book'
    },
    isbn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schoolLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'school_level_id'
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'class_id'
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'subject_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category__id'
    },
    categoryName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'category__name'
    },
    penerbitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'penerbit__id'
    },
    penerbitName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'penerbit__name'
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'subject__id'
    },
    subjectName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'subject__name'
    },
    schoolLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'school_level__id'
    },
    schoolLevelName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'school_level__name'
    },
    schoolClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'school_class__id'
    },
    schoolClassName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'school_class__name'
    },
    editionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'edition_id'
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'publication_year'
    },
    page: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coverMaterial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cover_material'
    },
    contentMaterial: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'content_material'
    },
    bindingTechnique: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'binding_technique'
    },
    coverColor: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'cover_color'
    },
    contentColor: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'content_color'
    }
  }, {
    sequelize,
    tableName: 'pb_book',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_book" },
        ]
      },
    ]
  });
};

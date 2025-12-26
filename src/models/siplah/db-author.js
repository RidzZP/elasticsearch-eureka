const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbAuthor', {
    idAuthor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_author'
    },
    kodeAuthor: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'kode_author'
    },
    namaAuthor: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_author'
    },
    slugAuthor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'slug_author'
    },
    birthdayAuthor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'birthday_author'
    },
    descriptionAuthor: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'description_author'
    },
    fotoAuthor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'foto_author'
    },
    authorMeta: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'author_meta'
    }
  }, {
    sequelize,
    tableName: 'db_author',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_author" },
        ]
      },
      {
        name: "id_author",
        using: "BTREE",
        fields: [
          { name: "id_author" },
        ]
      },
    ]
  });
};

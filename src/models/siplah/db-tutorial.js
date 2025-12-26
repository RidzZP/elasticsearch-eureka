const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbTutorial', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    typeFile: {
      type: "SET('PDF','VIDEO')",
      allowNull: false,
      field: 'type_file'
    },
    typeUser: {
      type: "SET('PEMBELI','PENYEDIA')",
      allowNull: false,
      field: 'type_user'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_update'
    }
  }, {
    sequelize,
    tableName: 'db_tutorial',
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

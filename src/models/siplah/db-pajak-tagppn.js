const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbPajakTagppn', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ppnType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idTag: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'id_tag'
    },
    isPpn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_ppn'
    },
    name: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_pajak_tagppn',
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
      {
        name: "id_tag",
        using: "BTREE",
        fields: [
          { name: "id_tag" },
        ]
      },
      {
        name: "ppnType",
        using: "BTREE",
        fields: [
          { name: "ppnType" },
        ]
      },
    ]
  });
};

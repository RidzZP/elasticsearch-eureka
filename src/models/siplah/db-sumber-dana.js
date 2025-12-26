const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbSumberDana', {
    idSumberDana: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_sumber_dana'
    },
    kodeSumberDana: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'kode_sumber_dana'
    },
    sumberDana: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sumber_dana'
    },
    fundsId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "for aggregation",
      field: 'funds_id'
    }
  }, {
    sequelize,
    tableName: 'db_sumber_dana',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sumber_dana" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogInt', {
    logId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'log_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    modul: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateLog: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_log'
    }
  }, {
    sequelize,
    tableName: 'db_log_int',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};

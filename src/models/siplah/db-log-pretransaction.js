const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogPretransaction', {
    pretransactionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'pretransactionID'
    },
    pretransaction: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_log_pretransaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pretransactionID" },
        ]
      },
      {
        name: "pretransaction",
        using: "BTREE",
        fields: [
          { name: "pretransaction" },
        ]
      },
    ]
  });
};

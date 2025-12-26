const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbAuthRecon', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'client_id'
    },
    clientSecret: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'client_secret'
    }
  }, {
    sequelize,
    tableName: 'db_auth_recon',
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

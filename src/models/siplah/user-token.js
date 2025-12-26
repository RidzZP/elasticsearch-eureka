const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserToken', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fromUser: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'from_user'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "+60 minutes after created_at",
      field: 'expired_at'
    }
  }, {
    sequelize,
    tableName: 'user_token',
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
        name: "email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "from_user",
        using: "BTREE",
        fields: [
          { name: "from_user" },
        ]
      },
    ]
  });
};

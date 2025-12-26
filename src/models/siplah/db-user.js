const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbUser', {
    userId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    userGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_group_id'
    },
    userRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_role_id'
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isProvincePermissions: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'is_province_permissions'
    },
    provincePermissions: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'province_permissions'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'date_added'
    },
    online: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'last_login'
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userAgent: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_agent'
    }
  }, {
    sequelize,
    tableName: 'db_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_role_id",
        using: "BTREE",
        fields: [
          { name: "user_role_id" },
        ]
      },
      {
        name: "username",
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};

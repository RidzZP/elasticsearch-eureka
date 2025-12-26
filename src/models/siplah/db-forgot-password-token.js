const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbForgotPasswordToken', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    setTime: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'set_time'
    }
  }, {
    sequelize,
    tableName: 'db_forgot_password_token',
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

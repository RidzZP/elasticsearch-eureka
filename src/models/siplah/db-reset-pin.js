const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbResetPin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    otp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sendDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'send_date'
    }
  }, {
    sequelize,
    tableName: 'db_reset_pin',
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

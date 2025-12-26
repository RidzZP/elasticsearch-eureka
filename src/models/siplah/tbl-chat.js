const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TblChat', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'customer_id'
    },
    sellerId: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'seller_id'
    },
    room: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    isMp: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'is_mp'
    }
  }, {
    sequelize,
    tableName: 'tbl_chat',
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
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "seller_id",
        using: "BTREE",
        fields: [
          { name: "seller_id" },
        ]
      },
    ]
  });
};

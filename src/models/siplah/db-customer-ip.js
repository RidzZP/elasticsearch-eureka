const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCustomerIp', {
    customerIpId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'customer_ip_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_added'
    }
  }, {
    sequelize,
    tableName: 'db_customer_ip',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_ip_id" },
        ]
      },
      {
        name: "ip",
        using: "BTREE",
        fields: [
          { name: "ip" },
        ]
      },
    ]
  });
};

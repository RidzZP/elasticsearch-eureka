const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCustomerOnline', {
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    referer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_added'
    }
  }, {
    sequelize,
    tableName: 'db_customer_online',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ip" },
        ]
      },
    ]
  });
};

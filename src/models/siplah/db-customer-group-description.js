const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCustomerGroupDescription', {
    customerGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'customer_group_id'
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'language_id'
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_customer_group_description',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
          { name: "language_id" },
        ]
      },
    ]
  });
};

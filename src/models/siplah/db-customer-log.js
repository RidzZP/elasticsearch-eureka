const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCustomerLog', {
    logId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'log_id'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'customer_id'
    },
    produkId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'produk_id'
    },
    page: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateLog: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_log'
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_customer_log',
    timestamps: false
  });
};

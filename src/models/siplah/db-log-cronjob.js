const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogCronjob', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'payment_date'
    },
    dateStatus: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_status'
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'db_log_cronjob',
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
        name: "date_status",
        using: "BTREE",
        fields: [
          { name: "date_status" },
        ]
      },
      {
        name: "payment_date",
        using: "BTREE",
        fields: [
          { name: "payment_date" },
        ]
      },
    ]
  });
};

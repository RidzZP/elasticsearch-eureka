const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbReturnHistory', {
    returnHistoryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'return_history_id'
    },
    returnId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'return_id'
    },
    returnStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'return_status_id'
    },
    notify: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    comment: {
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
    tableName: 'db_return_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "return_history_id" },
        ]
      },
    ]
  });
};

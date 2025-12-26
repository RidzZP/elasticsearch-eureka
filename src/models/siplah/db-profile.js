const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbProfile', {
    profileId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'profile_id'
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sort_order'
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    frequency: {
      type: DataTypes.ENUM('day','week','semi_month','month','year'),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    cycle: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    trialStatus: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'trial_status'
    },
    trialPrice: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      field: 'trial_price'
    },
    trialFrequency: {
      type: DataTypes.ENUM('day','week','semi_month','month','year'),
      allowNull: false,
      field: 'trial_frequency'
    },
    trialDuration: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'trial_duration'
    },
    trialCycle: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'trial_cycle'
    }
  }, {
    sequelize,
    tableName: 'db_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profile_id" },
        ]
      },
    ]
  });
};

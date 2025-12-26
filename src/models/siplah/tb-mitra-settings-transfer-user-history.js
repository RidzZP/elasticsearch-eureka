const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TbMitraSettingsTransferUserHistory', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      field: 'user_id'
    },
    cabangId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      field: 'cabang_id'
    },
    cabangSebelum: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      field: 'cabang_sebelum'
    },
    cabangSesudah: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      field: 'cabang_sesudah'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'tb_mitra_settings_transfer_user_history',
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
        name: "idx_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idx_cabang_id",
        using: "BTREE",
        fields: [
          { name: "cabang_id" },
        ]
      },
      {
        name: "idx_cabang_change",
        using: "BTREE",
        fields: [
          { name: "cabang_sebelum" },
          { name: "cabang_sesudah" },
        ]
      },
    ]
  });
};

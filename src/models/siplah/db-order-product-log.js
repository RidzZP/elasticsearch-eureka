const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderProductLog', {
    logId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'log_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID order dari db_order",
      field: 'order_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID product dari db_order_product",
      field: 'product_id'
    },
    actionType: {
      type: DataTypes.ENUM('UPDATE','INSERT','DELETE'),
      allowNull: false,
      defaultValue: "UPDATE",
      comment: "Jenis aksi yang dilakukan",
      field: 'action_type'
    },
    fieldChanged: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Field yang diubah dalam format JSON",
      field: 'field_changed'
    },
    oldValues: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Nilai lama sebelum update dalam format JSON",
      field: 'old_values'
    },
    newValues: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Nilai baru setelah update dalam format JSON",
      field: 'new_values'
    },
    qtyTerimaBaikOld: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nilai lama qty_terima_baik",
      field: 'qty_terima_baik_old'
    },
    qtyTerimaBaikNew: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nilai baru qty_terima_baik",
      field: 'qty_terima_baik_new'
    },
    qtyTerimaBurukOld: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nilai lama qty_terima_buruk",
      field: 'qty_terima_buruk_old'
    },
    qtyTerimaBurukNew: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nilai baru qty_terima_buruk",
      field: 'qty_terima_buruk_new'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ID user yang melakukan perubahan",
      field: 'user_id'
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "User agent dari request",
      field: 'user_agent'
    },
    ipAddress: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "IP address user",
      field: 'ip_address'
    },
    apiEndpoint: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "API endpoint yang digunakan",
      field: 'api_endpoint'
    },
    requestData: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Data request dalam format JSON",
      field: 'request_data'
    },
    responseData: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Data response dalam format JSON",
      field: 'response_data'
    },
    status: {
      type: DataTypes.ENUM('SUCCESS','FAILED','PARTIAL'),
      allowNull: false,
      defaultValue: "SUCCESS",
      comment: "Status dari operasi"
    },
    errorMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Pesan error jika ada",
      field: 'error_message'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Waktu log dibuat",
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Waktu log terakhir diupdate",
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'db_order_product_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "idx_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "idx_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_order_product",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "idx_action_type",
        using: "BTREE",
        fields: [
          { name: "action_type" },
        ]
      },
      {
        name: "idx_status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "idx_created_at",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogApproved', {
    logId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'log_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'db_product',
        key: 'product_id'
      },
      field: 'product_id'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Nama produk saat di-approve",
      field: 'product_name'
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Model produk saat di-approve"
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Kategori produk saat di-approve",
      field: 'category_id'
    },
    price: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true,
      comment: "Harga produk saat di-approve"
    },
    statusBefore: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "Status sebelum di-approve",
      field: 'status_before'
    },
    statusAfter: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "Status setelah di-approve (biasanya 1)",
      field: 'status_after'
    },
    approvedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID user yang melakukan approve",
      field: 'approved_by'
    },
    approvedByName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Nama user yang melakukan approve",
      field: 'approved_by_name'
    },
    approvedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Waktu approve",
      field: 'approved_at'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Catatan tambahan saat approve"
    },
    ipAddress: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "IP address user yang approve",
      field: 'ip_address'
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Browser\/device info",
      field: 'user_agent'
    }
  }, {
    sequelize,
    tableName: 'db_log_approved',
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
        name: "idx_product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "idx_mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "idx_approved_by",
        using: "BTREE",
        fields: [
          { name: "approved_by" },
        ]
      },
      {
        name: "idx_approved_at",
        using: "BTREE",
        fields: [
          { name: "approved_at" },
        ]
      },
      {
        name: "idx_mall_approved_at",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
          { name: "approved_at" },
        ]
      },
    ]
  });
};

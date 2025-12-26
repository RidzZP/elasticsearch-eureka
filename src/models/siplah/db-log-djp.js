const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbLogDjp', {
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
      field: 'order_id'
    },
    requestId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'request_id'
    },
    idFromClient: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_from_client'
    },
    invoiceNo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'invoice_no'
    },
    status: {
      type: DataTypes.ENUM('success','error','pending'),
      allowNull: false,
      defaultValue: "pending"
    },
    requestBody: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "JSON request body sent to DJP",
      field: 'request_body'
    },
    responseBody: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "JSON response from DJP API",
      field: 'response_body'
    },
    djpToken: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Token used for DJP API call",
      field: 'djp_token'
    },
    httpCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "HTTP response code from DJP",
      field: 'http_code'
    },
    errorMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Error message if failed",
      field: 'error_message'
    },
    processingTime: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      comment: "Processing time in seconds",
      field: 'processing_time'
    },
    djpEndpoint: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "DJP API endpoint used",
      field: 'djp_endpoint'
    },
    pihakPembeliNama: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Nama pembeli",
      field: 'pihak_pembeli_nama'
    },
    pihakPembeliNpwp: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "NPWP pembeli",
      field: 'pihak_pembeli_npwp'
    },
    pihakPenjualNama: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Nama penjual",
      field: 'pihak_penjual_nama'
    },
    pihakPenjualNpwp: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "NPWP penjual",
      field: 'pihak_penjual_npwp'
    },
    totalBarangJasa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Total items in barangDanJasa",
      field: 'total_barang_jasa'
    },
    totalDpp: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "Total DPP amount",
      field: 'total_dpp'
    },
    totalPpn: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "Total PPN amount",
      field: 'total_ppn'
    },
    totalPph: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "Total PPh amount",
      field: 'total_pph'
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
    tableName: 'db_log_djp',
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
      {
        name: "idx_invoice_no",
        using: "BTREE",
        fields: [
          { name: "invoice_no" },
        ]
      },
      {
        name: "idx_request_id",
        using: "BTREE",
        fields: [
          { name: "request_id" },
        ]
      },
    ]
  });
};

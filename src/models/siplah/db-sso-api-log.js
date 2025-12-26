const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbSsoApiLog', {
    logId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'log_id'
    },
    sessionId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Session identifier untuk tracking",
      field: 'session_id'
    },
    ssoProvider: {
      type: DataTypes.ENUM('datadik','sds','pengawas'),
      allowNull: false,
      comment: "Provider SSO yang digunakan",
      field: 'sso_provider'
    },
    environment: {
      type: DataTypes.ENUM('production','development'),
      allowNull: false,
      comment: "Environment request"
    },
    endpointType: {
      type: DataTypes.ENUM('token','profile','infosp','authenticate','get-account','access_token','logout'),
      allowNull: false,
      comment: "Jenis endpoint SSO",
      field: 'endpoint_type'
    },
    requestUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "URL lengkap API request",
      field: 'request_url'
    },
    requestMethod: {
      type: DataTypes.ENUM('GET','POST'),
      allowNull: false,
      defaultValue: "POST",
      field: 'request_method'
    },
    requestPayload: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Parameter request dalam JSON",
      field: 'request_payload'
    },
    responseStatusCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "HTTP status code response",
      field: 'response_status_code'
    },
    responseBody: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Response body lengkap dalam JSON",
      field: 'response_body'
    },
    responseTimeMs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Waktu response dalam milliseconds",
      field: 'response_time_ms'
    },
    curlError: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Error message cURL jika ada",
      field: 'curl_error'
    },
    penggunaId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "User ID dari SSO response",
      field: 'pengguna_id'
    },
    sekolahId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "School ID dari SSO response",
      field: 'sekolah_id'
    },
    userEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Email user dari SSO response",
      field: 'user_email'
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Nama user dari SSO response",
      field: 'user_name'
    },
    clientIp: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "IP address client",
      field: 'client_ip'
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "User agent string",
      field: 'user_agent'
    },
    isSuccess: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "1 jika berhasil, 0 jika gagal",
      field: 'is_success'
    },
    errorType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Jenis error jika gagal",
      field: 'error_type'
    },
    errorMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Pesan error jika gagal",
      field: 'error_message'
    },
    syncAction: {
      type: DataTypes.ENUM('user_insert','user_update','school_insert','school_update','none'),
      allowNull: true,
      defaultValue: "none",
      comment: "Aksi sinkronisasi database",
      field: 'sync_action'
    },
    affectedTable: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Tabel yang terpengaruh sinkronisasi",
      field: 'affected_table'
    },
    affectedRecordId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "ID record yang diinsert\/update",
      field: 'affected_record_id'
    },
    processingNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Catatan tambahan processing",
      field: 'processing_notes'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'db_sso_api_log',
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
        name: "idx_session_id",
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "idx_sso_provider",
        using: "BTREE",
        fields: [
          { name: "sso_provider" },
        ]
      },
      {
        name: "idx_endpoint_type",
        using: "BTREE",
        fields: [
          { name: "endpoint_type" },
        ]
      },
      {
        name: "idx_pengguna_id",
        using: "BTREE",
        fields: [
          { name: "pengguna_id" },
        ]
      },
      {
        name: "idx_sekolah_id",
        using: "BTREE",
        fields: [
          { name: "sekolah_id" },
        ]
      },
      {
        name: "idx_is_success",
        using: "BTREE",
        fields: [
          { name: "is_success" },
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
        name: "idx_environment",
        using: "BTREE",
        fields: [
          { name: "environment" },
        ]
      },
    ]
  });
};

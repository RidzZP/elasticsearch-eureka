const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbNotification202', {
    idNotification: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_notification'
    },
    from: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    user: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sekolahId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'sekolah_id'
    },
    sekolah: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mall_id'
    },
    mall: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_id'
    },
    admin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idTautan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'id_tautan'
    },
    judulNotif: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'judul_notif'
    },
    isiNotif: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'isi_notif'
    },
    otherMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "[{\"dayPlus\":1,\"message\":\"Anda telah menerima pesanan\"}]",
      field: 'other_message'
    },
    tglAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_added'
    },
    dibaca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jenis: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userAgent: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_agent'
    },
    isFollowUp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      field: 'is_follow_up'
    },
    hasFollowUp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'has_follow_up'
    }
  }, {
    sequelize,
    tableName: 'db_notification202',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notification" },
        ]
      },
      {
        name: "is_follow_up",
        using: "BTREE",
        fields: [
          { name: "is_follow_up" },
        ]
      },
      {
        name: "has_follow_up",
        using: "BTREE",
        fields: [
          { name: "has_follow_up" },
        ]
      },
      {
        name: "dibaca",
        using: "BTREE",
        fields: [
          { name: "dibaca" },
        ]
      },
      {
        name: "sekolah_id",
        using: "BTREE",
        fields: [
          { name: "sekolah_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "mall_id",
        using: "BTREE",
        fields: [
          { name: "mall_id" },
        ]
      },
      {
        name: "id_tautan",
        using: "BTREE",
        fields: [
          { name: "id_tautan" },
        ]
      },
      {
        name: "jenis",
        using: "BTREE",
        fields: [
          { name: "jenis" },
        ]
      },
      {
        name: "from",
        using: "BTREE",
        fields: [
          { name: "from" },
        ]
      },
    ]
  });
};

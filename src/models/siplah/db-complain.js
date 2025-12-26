const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbComplain', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticketCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "ticket_id",
      field: 'ticket_code'
    },
    ticketDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'ticket_date'
    },
    reporterName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'reporter_name'
    },
    reporterCompany: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'reporter_company'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.ENUM('Aplikasi','Pembayaran','Akun','Dokumen','Lainnya'),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('New','On Progress','Hold','Done','Canceled'),
      allowNull: true
    },
    idCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_created_by'
    },
    idResolvedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_resolved_by'
    },
    picName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pic_name'
    },
    resolutionNote: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'resolution_note'
    },
    resolvedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'resolved_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_at'
    },
    priority: {
      type: DataTypes.ENUM('tinggi','sedang','rendah'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_complain',
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
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ticket_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ticket_code" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "pic_name" },
        ]
      },
    ]
  });
};

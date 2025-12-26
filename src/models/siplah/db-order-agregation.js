const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrderAgregation', {
    agregationid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    invoice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    responseCreated: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_created'
    },
    responseOrderCanceled: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_order_canceled'
    },
    responseOrderRejected: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_order_rejected'
    },
    responseOrderProcessed: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_order_processed'
    },
    responseCancellationProposed: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_cancellation_proposed'
    },
    responseDresponseCancellationApprovediterima: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_dresponse_cancellation_approvediterima'
    },
    responseCancellationRejected: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'response_cancellation_rejected'
    },
    infoUpdateProposed: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'info_update_proposed'
    },
    infoUpdateApprove: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'info_update_approve'
    },
    infoUpdateRejected: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'info_update_rejected'
    },
    orderShipped: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'order_shipped'
    },
    orderDeliveryUpdate: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'order_delivery_update'
    },
    orderDelivered: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'order_delivered'
    },
    complaintSubmitted: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'complaint_submitted'
    },
    complaintFollowedUp: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'complaint_followed_up'
    },
    complaintResolved: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'complaint_resolved'
    },
    orderReturned: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'order_returned'
    },
    agreementUpdate: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'agreement_update'
    },
    orderReceived: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'order_received'
    },
    bastGeneratef: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'bast_generatef'
    },
    paymentConfirmed: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'payment_confirmed'
    },
    paymentSettled: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'payment_settled'
    },
    paymentComplained: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'payment_complained'
    },
    testimonySubmitted: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'testimony_submitted'
    },
    closed: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_order_agregation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agregationid" },
        ]
      },
    ]
  });
};

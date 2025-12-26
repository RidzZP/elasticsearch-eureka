const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbOrder', {
    orderId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'order_id'
    },
    pretransaction: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    purchaseOrder: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'purchase_order'
    },
    invoiceNo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "0",
      field: 'invoice_no'
    },
    invoice: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'invoice_date'
    },
    noFaktur: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'no_faktur'
    },
    faktur: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    awb: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'customer_id'
    },
    email: {
      type: DataTypes.STRING(96),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: "0"
    },
    paymentTempo: {
      type: DataTypes.ENUM('1','3','5','7','14','30','45','60','90'),
      allowNull: true,
      field: 'payment_tempo'
    },
    paymentMethod: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "bank_bri_va",
      field: 'payment_method'
    },
    paymentVa: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "mandiri(89859)",
      field: 'payment_va'
    },
    paymentReferenceNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "For BPD VA",
      field: 'payment_reference_number'
    },
    paymentTerminalId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "For BPD VA",
      field: 'payment_terminal_id'
    },
    paymentTerminalType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "For BPD VA",
      field: 'payment_terminal_type'
    },
    paymentVaStatus: {
      type: DataTypes.ENUM('none','waiting','open','close','process','check','validasi','errorvalidasi'),
      allowNull: false,
      field: 'payment_va_status'
    },
    paymentVaDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'payment_va_date'
    },
    paymentCloseBank: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'payment_close_bank'
    },
    paymentCloseDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'payment_close_date'
    },
    paymentCloseAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'payment_close_amount'
    },
    paymentCloseAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'payment_close_admin'
    },
    paymentCloseReferral: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'payment_close_referral'
    },
    shippingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'shipping_id'
    },
    sekolahId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sekolah_id'
    },
    sekolahZona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sekolah_zona'
    },
    npsn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    shippingFirstname: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'shipping_firstname'
    },
    shippingLastname: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'shipping_lastname'
    },
    shippingCompany: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'shipping_company'
    },
    shippingAddress1: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_address_1'
    },
    shippingAddress2: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_address_2'
    },
    shippingZone: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_zone'
    },
    shippingKecamatan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'shipping_kecamatan'
    },
    shippingCity: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_city'
    },
    shippingProvince: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'shipping_province'
    },
    shippingPostcode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'shipping_postcode'
    },
    shippingCountry: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_country'
    },
    shippingMethod: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_method'
    },
    shippingServiceCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'shipping_service_code'
    },
    shippingCode: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'shipping_code'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    orderStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'order_status_id'
    },
    statusOrder: {
      type: DataTypes.ENUM('paid','unpaid'),
      allowNull: false,
      defaultValue: "unpaid",
      field: 'status_order'
    },
    withdrawStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'withdraw_status'
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    userAgent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'user_agent'
    },
    dateInvoice: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_invoice'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_added'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_modified'
    },
    dateSampai: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      field: 'date_sampai'
    },
    perangkat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tunjukCabang: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tunjuk_cabang'
    },
    dendaHari: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'denda_hari'
    },
    dendaBayar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'denda_bayar'
    },
    dendaDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'denda_date'
    },
    mallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'mall_id'
    },
    mallName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'mall_name'
    },
    mallIdRajong: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'mall_id_rajong'
    },
    mallZone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'mall_zone'
    },
    mallCity: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'mall_city'
    },
    mallProvince: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'mall_province'
    },
    mallPostcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'mall_postcode'
    },
    mallAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'mall_address'
    },
    mallPhone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'mall_phone'
    },
    nego: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    noInvoice: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'no_invoice'
    },
    invoicePrefix: {
      type: DataTypes.STRING(26),
      allowNull: false,
      field: 'invoice_prefix'
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'store_id'
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotalFinal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'subtotal_final'
    },
    ongkoskirim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    berattotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shippingZoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'shipping_zone_id'
    },
    totalKupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_kupon'
    },
    konfirmBayar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'konfirm_bayar'
    },
    ppn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    sumberDana: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'sumber_dana'
    },
    fundCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fundUuid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shippingKurir: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'shipping_kurir'
    },
    shippingKurirType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'shipping_kurir_type'
    },
    shippingCountryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'shipping_country_id'
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sumberdana: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nilaiTransaksi: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nilai_transaksi'
    },
    sumberDanaWs: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'sumber_dana_ws'
    },
    taxCustomer: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'tax_customer'
    },
    taxPenyedia: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'tax_penyedia'
    },
    isInsurance: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'is_insurance'
    },
    insurance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reqPerubahan: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      comment: "0: tidak ada request perubahan; 1: request perubahan diajukan, menunggu approve; 2: request perubahan diterima; 3: request perubahan ditolak;",
      field: 'req_perubahan'
    },
    reqDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'req_date'
    },
    isApplyCancel: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'is_apply_cancel'
    },
    statusApplyCancel: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      comment: "0: tidak ada apply cancel; 1: apply cancel diterima; 2: apply cancel ditolak, lanjut proses; 3: menunggu approve;",
      field: 'status_apply_cancel'
    },
    applyCancelAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'apply_cancel_at'
    },
    approveApplyCancelAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'approve_apply_cancel_at'
    },
    rejectApplyCancelAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'reject_apply_cancel_at'
    },
    isEskalasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'is_eskalasi'
    },
    isClosingProposal: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'is_closing_proposal'
    },
    statusClosingProposal: {
      type: DataTypes.ENUM('0','1','2','3','4'),
      allowNull: false,
      field: 'status_closing_proposal'
    },
    closingProposalAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'closing_proposal_at'
    },
    approveClosingProposal: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'approve_closing_proposal'
    },
    rejectClosingProposal: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'reject_closing_proposal'
    },
    formBatalSatdik: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'form_batal_satdik'
    },
    formBatalPenyedia: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'form_batal_penyedia'
    },
    formBatal: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'form_batal'
    },
    wrapping: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    statusEbast: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'status_ebast'
    },
    statusKomplain: {
      type: DataTypes.TINYINT,
      allowNull: false,
      field: 'status_komplain'
    },
    noteDenda: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'note_denda'
    },
    orderDeliveredAt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    insurancePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'insurance_price'
    },
    cancelReasonType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'cancel_reason_type'
    },
    cancelReason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "for aggregation recon",
      field: 'cancel_reason'
    },
    rejectReasonType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'reject_reason_type'
    },
    rejectReason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "for aggregation recon",
      field: 'reject_reason'
    },
    closeReasonType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'close_reason_type'
    },
    closeReasonValue: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'close_reason_value'
    },
    closeReason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "for aggregation recon",
      field: 'close_reason'
    },
    closedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "user id mitrasiplah",
      field: 'closed_by'
    },
    transactionState: {
      type: DataTypes.ENUM('TRANSACTION_CREATED','TRANSACTION_CANCELLED','TRANSACTION_REJECTED','TRANSACTION_PROCESSED','TRANSACTION_CANCELLATION_PROPOSED','TRANSACTION_CANCELLATION_APPROVED','TRANSACTION_CANCELLATION_REJECTED','TRANSACTION_INFO_UPDATE_PROPOSED','TRANSACTION_INFO_UPDATE_APPROVED','TRANSACTION_INFO_UPDATE_REJECTED','TRANSACTION_SHIPPED','TRANSACTION_DELIVERED','TRANSACTION_RETURNED','TRANSACTION_AGREEMENT_UPDATED','TRANSACTION_RECEIVED','TRANSACTION_BAST_GENERATED','TRANSACTION_CLOSED'),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'transaction_state'
    },
    shipmentState: {
      type: DataTypes.ENUM('SHIPMENT_UNSPECIFIED','SHIPMENT_SHIPPING','SHIPMENT_DELIVERED'),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'shipment_state'
    },
    paymentState: {
      type: DataTypes.ENUM('PAYMENT_UNSPECIFIED','PAYMENT_WAIT','PAYMENT_CONFIRMED','PAYMENT_SETTLED','PAYMENT_COMPLAINED'),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'payment_state'
    },
    complaintState: {
      type: DataTypes.ENUM('COMPLAINT_UNSPECIFIED','COMPLAINT_COMPLAINED','COMPLAINT_PROCESSED','COMPLAINT_RESOLVED'),
      allowNull: true,
      comment: "for aggregation recon",
      field: 'complaint_state'
    },
    ppnTagSchool: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ppnTagItem: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    djpIdClient: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'djp_idClient'
    },
    djpType: {
      type: DataTypes.ENUM('new','rev','del'),
      allowNull: false,
      field: 'djp_type'
    },
    djpStatus: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'djp_status'
    },
    djpRequest: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'djp_request'
    },
    djpResponses: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'djp_responses'
    },
    djpCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'djp_created'
    },
    ppnTagName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'db_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
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
        name: "mall_city",
        using: "BTREE",
        fields: [
          { name: "mall_city" },
        ]
      },
      {
        name: "mall_province",
        using: "BTREE",
        fields: [
          { name: "mall_province" },
        ]
      },
      {
        name: "shipping_city",
        using: "BTREE",
        fields: [
          { name: "shipping_city" },
        ]
      },
      {
        name: "shipping_province",
        using: "BTREE",
        fields: [
          { name: "shipping_province" },
        ]
      },
      {
        name: "invoice_no",
        using: "BTREE",
        fields: [
          { name: "invoice_no" },
        ]
      },
      {
        name: "no_faktur",
        using: "BTREE",
        fields: [
          { name: "no_faktur" },
        ]
      },
      {
        name: "order_status_id",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
      {
        name: "shipping_company",
        using: "BTREE",
        fields: [
          { name: "shipping_company" },
        ]
      },
      {
        name: "sumber_dana_ws",
        using: "BTREE",
        fields: [
          { name: "sumber_dana_ws" },
        ]
      },
      {
        name: "sumber_dana",
        using: "BTREE",
        fields: [
          { name: "sumber_dana" },
        ]
      },
      {
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
        ]
      },
      {
        name: "status_ebast",
        using: "BTREE",
        fields: [
          { name: "status_ebast" },
        ]
      },
      {
        name: "status_apply_cancel",
        using: "BTREE",
        fields: [
          { name: "status_apply_cancel" },
        ]
      },
      {
        name: "status_komplain",
        using: "BTREE",
        fields: [
          { name: "status_komplain" },
        ]
      },
      {
        name: "store_id",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "payment_va_date",
        using: "BTREE",
        fields: [
          { name: "payment_va_date" },
        ]
      },
      {
        name: "payment_va_status",
        using: "BTREE",
        fields: [
          { name: "payment_va_status" },
        ]
      },
      {
        name: "payment_va",
        using: "BTREE",
        fields: [
          { name: "payment_va" },
        ]
      },
      {
        name: "invoice",
        using: "BTREE",
        fields: [
          { name: "invoice" },
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
        name: "sekolah_zona",
        using: "BTREE",
        fields: [
          { name: "sekolah_zona" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "payment_method",
        using: "BTREE",
        fields: [
          { name: "payment_method" },
        ]
      },
      {
        name: "sekolah_zona_2",
        using: "BTREE",
        fields: [
          { name: "sekolah_zona" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
      {
        name: "idx_order_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "idx_order_tunjuk_cabang",
        using: "BTREE",
        fields: [
          { name: "tunjuk_cabang" },
        ]
      },
      {
        name: "idx_order_order_status_id",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
      {
        name: "idx_order_date_status",
        using: "BTREE",
        fields: [
          { name: "date_added" },
          { name: "order_status_id" },
        ]
      },
      {
        name: "idx_invoice_status_date",
        using: "BTREE",
        fields: [
          { name: "invoice_no" },
          { name: "order_status_id" },
          { name: "date_added" },
        ]
      },
      {
        name: "idx_city_status_date",
        using: "BTREE",
        fields: [
          { name: "shipping_city" },
          { name: "order_status_id" },
          { name: "date_added" },
        ]
      },
      {
        name: "idx_cabang_status_cover",
        using: "BTREE",
        fields: [
          { name: "tunjuk_cabang" },
          { name: "order_status_id" },
          { name: "invoice_no" },
          { name: "date_added" },
        ]
      },
      {
        name: "idx_order_status_closing",
        using: "BTREE",
        fields: [
          { name: "is_closing_proposal" },
          { name: "status_closing_proposal" },
          { name: "closing_proposal_at" },
          { name: "date_added" },
        ]
      },
    ]
  });
};

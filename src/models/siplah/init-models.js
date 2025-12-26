var DataTypes = require("sequelize").DataTypes;
var _CiSession = require("./ci-session");
var _DbAddress = require("./db-address");
var _DbAnggaran = require("./db-anggaran");
var _DbAuthRecon = require("./db-auth-recon");
var _DbAuthor = require("./db-author");
var _DbBank = require("./db-bank");
var _DbBankCode = require("./db-bank-code");
var _DbBanner = require("./db-banner");
var _DbBannerImage = require("./db-banner-image");
var _DbBannerImageDescription = require("./db-banner-image-description");
var _DbBantuan = require("./db-bantuan");
var _DbBantuanKategori = require("./db-bantuan-kategori");
var _DbCart = require("./db-cart");
var _DbCategory = require("./db-category");
var _DbCategoryDescription = require("./db-category-description");
var _DbCategorySandbox = require("./db-category-sandbox");
var _DbCategoryToSpesifikasi = require("./db-category-to-spesifikasi");
var _DbCeker = require("./db-ceker");
var _DbChat = require("./db-chat");
var _DbCity = require("./db-city");
var _DbCompare = require("./db-compare");
var _DbComplain = require("./db-complain");
var _DbCountry = require("./db-country");
var _DbCustomer = require("./db-customer");
var _DbCustomerGroupDescription = require("./db-customer-group-description");
var _DbCustomerIp = require("./db-customer-ip");
var _DbCustomerLog = require("./db-customer-log");
var _DbCustomerLogFix = require("./db-customer-log-fix");
var _DbCustomerOnline = require("./db-customer-online");
var _DbCustomerSchool = require("./db-customer-school");
var _DbDigital = require("./db-digital");
var _DbEkspedisi = require("./db-ekspedisi");
var _DbFinance = require("./db-finance");
var _DbFlashsale = require("./db-flashsale");
var _DbFlashsaleProduct = require("./db-flashsale-product");
var _DbForgotPasswordToken = require("./db-forgot-password-token");
var _DbGeoZone = require("./db-geo-zone");
var _DbHistoriPindahCabang = require("./db-histori-pindah-cabang");
var _DbKomplain = require("./db-komplain");
var _DbKomplainDetail = require("./db-komplain-detail");
var _DbKomplainKategori = require("./db-komplain-kategori");
var _DbKomplainc = require("./db-komplainc");
var _DbKurir = require("./db-kurir");
var _DbLayout = require("./db-layout");
var _DbLogApi = require("./db-log-api");
var _DbLogApiAgregasi = require("./db-log-api-agregasi");
var _DbLogApiBank = require("./db-log-api-bank");
var _DbLogApiBjatim = require("./db-log-api-bjatim");
var _DbLogApiBjb = require("./db-log-api-bjb");
var _DbLogApiBpd = require("./db-log-api-bpd");
var _DbLogApiBri = require("./db-log-api-bri");
var _DbLogApiMitra = require("./db-log-api-mitra");
var _DbLogApiNew = require("./db-log-api-new");
var _DbLogApproved = require("./db-log-approved");
var _DbLogBankFix2025 = require("./db-log-bank-fix-2025");
var _DbLogCronjob = require("./db-log-cronjob");
var _DbLogDjp = require("./db-log-djp");
var _DbLogFix2024 = require("./db-log-fix-2024");
var _DbLogInt = require("./db-log-int");
var _DbLogPerbaikan = require("./db-log-perbaikan");
var _DbLogPretransaction = require("./db-log-pretransaction");
var _DbLogSearch = require("./db-log-search");
var _DbLogUpdateCalculate = require("./db-log-update-calculate");
var _DbMaintenance = require("./db-maintenance");
var _DbMall = require("./db-mall");
var _DbMallCabang = require("./db-mall-cabang");
var _DbMallCabangToMall = require("./db-mall-cabang-to-mall");
var _DbMallChat = require("./db-mall-chat");
var _DbMallEkspedisi = require("./db-mall-ekspedisi");
var _DbMallToBanner = require("./db-mall-to-banner");
var _DbMallToRek = require("./db-mall-to-rek");
var _DbMallType = require("./db-mall-type");
var _DbMallUlasan = require("./db-mall-ulasan");
var _DbMallUser = require("./db-mall-user");
var _DbManufacturer = require("./db-manufacturer");
var _DbManufacturerToMall = require("./db-manufacturer-to-mall");
var _DbNego = require("./db-nego");
var _DbNegoDetail = require("./db-nego-detail");
var _DbNotifHp = require("./db-notif-hp");
var _DbNotification = require("./db-notification");
var _DbNotification202 = require("./db-notification-202");
var _DbNotificationCopy1 = require("./db-notification-copy-1");
var _DbOrder = require("./db-order");
var _DbOrderAgregation = require("./db-order-agregation");
var _DbOrderBast = require("./db-order-bast");
var _DbOrderBastHistory = require("./db-order-bast-history");
var _DbOrderHistory = require("./db-order-history");
var _DbOrderPembayaran = require("./db-order-pembayaran");
var _DbOrderPembayaranHistory = require("./db-order-pembayaran-history");
var _DbOrderPenagihan = require("./db-order-penagihan");
var _DbOrderProduct = require("./db-order-product");
var _DbOrderProductHistory = require("./db-order-product-history");
var _DbOrderProductLog = require("./db-order-product-log");
var _DbOrderStatus = require("./db-order-status");
var _DbOrderTest = require("./db-order-test");
var _DbOrderTotal = require("./db-order-total");
var _DbOrderUlasan = require("./db-order-ulasan");
var _DbPajakLapor = require("./db-pajak-lapor");
var _DbPajakTagppn = require("./db-pajak-tagppn");
var _DbPaymentConfirmation = require("./db-payment-confirmation");
var _DbPengawa = require("./db-pengawa");
var _DbPengawasWilKab = require("./db-pengawas-wil-kab");
var _DbPengawasWilKec = require("./db-pengawas-wil-kec");
var _DbPengawasWilProv = require("./db-pengawas-wil-prov");
var _DbPenjualanNilai = require("./db-penjualan-nilai");
var _DbPpnTagName = require("./db-ppn-tag-name");
var _DbProduct = require("./db-product");
var _DbProductCompare = require("./db-product-compare");
var _DbProductCompareDetail = require("./db-product-compare-detail");
var _DbProductDescription = require("./db-product-description");
var _DbProductDescription2 = require("./db-product-description-2");
var _DbProductDiscount = require("./db-product-discount");
var _DbProductImage = require("./db-product-image");
var _DbProductPacket = require("./db-product-packet");
var _DbProductRiwayatStok = require("./db-product-riwayat-stok");
var _DbProductSpecial = require("./db-product-special");
var _DbProductSpecialCategory = require("./db-product-special-category");
var _DbProductToCabang = require("./db-product-to-cabang");
var _DbProductToCategory = require("./db-product-to-category");
var _DbProductToNego = require("./db-product-to-nego");
var _DbProductUlasan = require("./db-product-ulasan");
var _DbProductVariation = require("./db-product-variation");
var _DbProductView = require("./db-product-view");
var _DbProductViewCustomer = require("./db-product-view-customer");
var _DbProfile = require("./db-profile");
var _DbProfileDescription = require("./db-profile-description");
var _DbPromo = require("./db-promo");
var _DbPromoKategori = require("./db-promo-kategori");
var _DbRegion = require("./db-region");
var _DbRencanaBelanja = require("./db-rencana-belanja");
var _DbResetPin = require("./db-reset-pin");
var _DbReturn = require("./db-return");
var _DbReturnAction = require("./db-return-action");
var _DbReturnHistory = require("./db-return-history");
var _DbReturnReason = require("./db-return-reason");
var _DbReturnStatus = require("./db-return-status");
var _DbReview = require("./db-review");
var _DbSetting = require("./db-setting");
var _DbShipping = require("./db-shipping");
var _DbSlider = require("./db-slider");
var _DbSpesial = require("./db-spesial");
var _DbSpesialProduct = require("./db-spesial-product");
var _DbSpesifikasi = require("./db-spesifikasi");
var _DbSsoApiLog = require("./db-sso-api-log");
var _DbStatusPembayaran = require("./db-status-pembayaran");
var _DbStatusPembayaranKomentar = require("./db-status-pembayaran-komentar");
var _DbSumberDana = require("./db-sumber-dana");
var _DbTerakhirDicari = require("./db-terakhir-dicari");
var _DbTerakhirDilihat = require("./db-terakhir-dilihat");
var _DbTest = require("./db-test");
var _DbTutorial = require("./db-tutorial");
var _DbUser = require("./db-user");
var _DbUserRole = require("./db-user-role");
var _DbZone = require("./db-zone");
var _DbZoneToGeoZone = require("./db-zone-to-geo-zone");
var _ErlUsageSiplahTahunan = require("./erl-usage-siplah-tahunan");
var _EuHarga2022 = require("./eu-harga-2022");
var _EuHarga2023 = require("./eu-harga-2023");
var _EuHarga2024 = require("./eu-harga-2024");
var _EuHarga2025 = require("./eu-harga-2025");
var _EuPaymentSettled = require("./eu-payment-settled");
var _FixData2023 = require("./fix-data-2023");
var _FixV23 = require("./fix-v-23");
var _HistoryUbahRekeningCv = require("./history-ubah-rekening-cv");
var _LaporanBulanan = require("./laporan-bulanan");
var _LaporanHarian = require("./laporan-harian");
var _LaporanTahunan = require("./laporan-tahunan");
var _LaporanTahunanDay = require("./laporan-tahunan-day");
var _LogBerhasilUpdate = require("./log-berhasil-update");
var _Payment = require("./payment");
var _PbBook = require("./pb-book");
var _PbBookDetail = require("./pb-book-detail");
var _PbKela = require("./pb-kela");
var _PbLevel = require("./pb-level");
var _PbSubject = require("./pb-subject");
var _Perbaikan2023 = require("./perbaikan-2023");
var _RekapKotum = require("./rekap-kotum");
var _RekapProvinsi = require("./rekap-provinsi");
var _RekapSekolah = require("./rekap-sekolah");
var _ReportSerapanErl = require("./report-serapan-erl");
var _RoCity = require("./ro-city");
var _RoProvince = require("./ro-province");
var _RoSubdistrict = require("./ro-subdistrict");
var _RoWilayah = require("./ro-wilayah");
var _SiplahDimensiProduk = require("./siplah-dimensi-produk");
var _SiplahDimensiTransaksi = require("./siplah-dimensi-transaksi");
var _SiplahDimensiTransaksi2021 = require("./siplah-dimensi-transaksi-2021");
var _SiplahProductBntp = require("./siplah-product-bntp");
var _SiplahProductBtp = require("./siplah-product-btp");
var _SiplahProductClassification = require("./siplah-product-classification");
var _SiplahProductLevel = require("./siplah-product-level");
var _SiplahProductPublisher = require("./siplah-product-publisher");
var _SiplahWilayah = require("./siplah-wilayah");
var _TbAnggaran = require("./tb-anggaran");
var _TbMitraSettingsTransferUser = require("./tb-mitra-settings-transfer-user");
var _TbMitraSettingsTransferUserHistory = require("./tb-mitra-settings-transfer-user-history");
var _TbTransferMitra = require("./tb-transfer-mitra");
var _TblChat = require("./tbl-chat");
var _TblMessage = require("./tbl-message");
var _UserToken = require("./user-token");
var _WsKela = require("./ws-kela");
var _WsProductBntp = require("./ws-product-bntp");
var _WsProductBtp = require("./ws-product-btp");
var _WsPuskurbukNontek = require("./ws-puskurbuk-nontek");
var _WsPuskurbukTek = require("./ws-puskurbuk-tek");
var _WsSchoolLevel = require("./ws-school-level");

function initModels(sequelize) {
  var CiSession = _CiSession(sequelize, DataTypes);
  var DbAddress = _DbAddress(sequelize, DataTypes);
  var DbAnggaran = _DbAnggaran(sequelize, DataTypes);
  var DbAuthRecon = _DbAuthRecon(sequelize, DataTypes);
  var DbAuthor = _DbAuthor(sequelize, DataTypes);
  var DbBank = _DbBank(sequelize, DataTypes);
  var DbBankCode = _DbBankCode(sequelize, DataTypes);
  var DbBanner = _DbBanner(sequelize, DataTypes);
  var DbBannerImage = _DbBannerImage(sequelize, DataTypes);
  var DbBannerImageDescription = _DbBannerImageDescription(sequelize, DataTypes);
  var DbBantuan = _DbBantuan(sequelize, DataTypes);
  var DbBantuanKategori = _DbBantuanKategori(sequelize, DataTypes);
  var DbCart = _DbCart(sequelize, DataTypes);
  var DbCategory = _DbCategory(sequelize, DataTypes);
  var DbCategoryDescription = _DbCategoryDescription(sequelize, DataTypes);
  var DbCategorySandbox = _DbCategorySandbox(sequelize, DataTypes);
  var DbCategoryToSpesifikasi = _DbCategoryToSpesifikasi(sequelize, DataTypes);
  var DbCeker = _DbCeker(sequelize, DataTypes);
  var DbChat = _DbChat(sequelize, DataTypes);
  var DbCity = _DbCity(sequelize, DataTypes);
  var DbCompare = _DbCompare(sequelize, DataTypes);
  var DbComplain = _DbComplain(sequelize, DataTypes);
  var DbCountry = _DbCountry(sequelize, DataTypes);
  var DbCustomer = _DbCustomer(sequelize, DataTypes);
  var DbCustomerGroupDescription = _DbCustomerGroupDescription(sequelize, DataTypes);
  var DbCustomerIp = _DbCustomerIp(sequelize, DataTypes);
  var DbCustomerLog = _DbCustomerLog(sequelize, DataTypes);
  var DbCustomerLogFix = _DbCustomerLogFix(sequelize, DataTypes);
  var DbCustomerOnline = _DbCustomerOnline(sequelize, DataTypes);
  var DbCustomerSchool = _DbCustomerSchool(sequelize, DataTypes);
  var DbDigital = _DbDigital(sequelize, DataTypes);
  var DbEkspedisi = _DbEkspedisi(sequelize, DataTypes);
  var DbFinance = _DbFinance(sequelize, DataTypes);
  var DbFlashsale = _DbFlashsale(sequelize, DataTypes);
  var DbFlashsaleProduct = _DbFlashsaleProduct(sequelize, DataTypes);
  var DbForgotPasswordToken = _DbForgotPasswordToken(sequelize, DataTypes);
  var DbGeoZone = _DbGeoZone(sequelize, DataTypes);
  var DbHistoriPindahCabang = _DbHistoriPindahCabang(sequelize, DataTypes);
  var DbKomplain = _DbKomplain(sequelize, DataTypes);
  var DbKomplainDetail = _DbKomplainDetail(sequelize, DataTypes);
  var DbKomplainKategori = _DbKomplainKategori(sequelize, DataTypes);
  var DbKomplainc = _DbKomplainc(sequelize, DataTypes);
  var DbKurir = _DbKurir(sequelize, DataTypes);
  var DbLayout = _DbLayout(sequelize, DataTypes);
  var DbLogApi = _DbLogApi(sequelize, DataTypes);
  var DbLogApiAgregasi = _DbLogApiAgregasi(sequelize, DataTypes);
  var DbLogApiBank = _DbLogApiBank(sequelize, DataTypes);
  var DbLogApiBjatim = _DbLogApiBjatim(sequelize, DataTypes);
  var DbLogApiBjb = _DbLogApiBjb(sequelize, DataTypes);
  var DbLogApiBpd = _DbLogApiBpd(sequelize, DataTypes);
  var DbLogApiBri = _DbLogApiBri(sequelize, DataTypes);
  var DbLogApiMitra = _DbLogApiMitra(sequelize, DataTypes);
  var DbLogApiNew = _DbLogApiNew(sequelize, DataTypes);
  var DbLogApproved = _DbLogApproved(sequelize, DataTypes);
  var DbLogBankFix2025 = _DbLogBankFix2025(sequelize, DataTypes);
  var DbLogCronjob = _DbLogCronjob(sequelize, DataTypes);
  var DbLogDjp = _DbLogDjp(sequelize, DataTypes);
  var DbLogFix2024 = _DbLogFix2024(sequelize, DataTypes);
  var DbLogInt = _DbLogInt(sequelize, DataTypes);
  var DbLogPerbaikan = _DbLogPerbaikan(sequelize, DataTypes);
  var DbLogPretransaction = _DbLogPretransaction(sequelize, DataTypes);
  var DbLogSearch = _DbLogSearch(sequelize, DataTypes);
  var DbLogUpdateCalculate = _DbLogUpdateCalculate(sequelize, DataTypes);
  var DbMaintenance = _DbMaintenance(sequelize, DataTypes);
  var DbMall = _DbMall(sequelize, DataTypes);
  var DbMallCabang = _DbMallCabang(sequelize, DataTypes);
  var DbMallCabangToMall = _DbMallCabangToMall(sequelize, DataTypes);
  var DbMallChat = _DbMallChat(sequelize, DataTypes);
  var DbMallEkspedisi = _DbMallEkspedisi(sequelize, DataTypes);
  var DbMallToBanner = _DbMallToBanner(sequelize, DataTypes);
  var DbMallToRek = _DbMallToRek(sequelize, DataTypes);
  var DbMallType = _DbMallType(sequelize, DataTypes);
  var DbMallUlasan = _DbMallUlasan(sequelize, DataTypes);
  var DbMallUser = _DbMallUser(sequelize, DataTypes);
  var DbManufacturer = _DbManufacturer(sequelize, DataTypes);
  var DbManufacturerToMall = _DbManufacturerToMall(sequelize, DataTypes);
  var DbNego = _DbNego(sequelize, DataTypes);
  var DbNegoDetail = _DbNegoDetail(sequelize, DataTypes);
  var DbNotifHp = _DbNotifHp(sequelize, DataTypes);
  var DbNotification = _DbNotification(sequelize, DataTypes);
  var DbNotification202 = _DbNotification202(sequelize, DataTypes);
  var DbNotificationCopy1 = _DbNotificationCopy1(sequelize, DataTypes);
  var DbOrder = _DbOrder(sequelize, DataTypes);
  var DbOrderAgregation = _DbOrderAgregation(sequelize, DataTypes);
  var DbOrderBast = _DbOrderBast(sequelize, DataTypes);
  var DbOrderBastHistory = _DbOrderBastHistory(sequelize, DataTypes);
  var DbOrderHistory = _DbOrderHistory(sequelize, DataTypes);
  var DbOrderPembayaran = _DbOrderPembayaran(sequelize, DataTypes);
  var DbOrderPembayaranHistory = _DbOrderPembayaranHistory(sequelize, DataTypes);
  var DbOrderPenagihan = _DbOrderPenagihan(sequelize, DataTypes);
  var DbOrderProduct = _DbOrderProduct(sequelize, DataTypes);
  var DbOrderProductHistory = _DbOrderProductHistory(sequelize, DataTypes);
  var DbOrderProductLog = _DbOrderProductLog(sequelize, DataTypes);
  var DbOrderStatus = _DbOrderStatus(sequelize, DataTypes);
  var DbOrderTest = _DbOrderTest(sequelize, DataTypes);
  var DbOrderTotal = _DbOrderTotal(sequelize, DataTypes);
  var DbOrderUlasan = _DbOrderUlasan(sequelize, DataTypes);
  var DbPajakLapor = _DbPajakLapor(sequelize, DataTypes);
  var DbPajakTagppn = _DbPajakTagppn(sequelize, DataTypes);
  var DbPaymentConfirmation = _DbPaymentConfirmation(sequelize, DataTypes);
  var DbPengawa = _DbPengawa(sequelize, DataTypes);
  var DbPengawasWilKab = _DbPengawasWilKab(sequelize, DataTypes);
  var DbPengawasWilKec = _DbPengawasWilKec(sequelize, DataTypes);
  var DbPengawasWilProv = _DbPengawasWilProv(sequelize, DataTypes);
  var DbPenjualanNilai = _DbPenjualanNilai(sequelize, DataTypes);
  var DbPpnTagName = _DbPpnTagName(sequelize, DataTypes);
  var DbProduct = _DbProduct(sequelize, DataTypes);
  var DbProductCompare = _DbProductCompare(sequelize, DataTypes);
  var DbProductCompareDetail = _DbProductCompareDetail(sequelize, DataTypes);
  var DbProductDescription = _DbProductDescription(sequelize, DataTypes);
  var DbProductDescription2 = _DbProductDescription2(sequelize, DataTypes);
  var DbProductDiscount = _DbProductDiscount(sequelize, DataTypes);
  var DbProductImage = _DbProductImage(sequelize, DataTypes);
  var DbProductPacket = _DbProductPacket(sequelize, DataTypes);
  var DbProductRiwayatStok = _DbProductRiwayatStok(sequelize, DataTypes);
  var DbProductSpecial = _DbProductSpecial(sequelize, DataTypes);
  var DbProductSpecialCategory = _DbProductSpecialCategory(sequelize, DataTypes);
  var DbProductToCabang = _DbProductToCabang(sequelize, DataTypes);
  var DbProductToCategory = _DbProductToCategory(sequelize, DataTypes);
  var DbProductToNego = _DbProductToNego(sequelize, DataTypes);
  var DbProductUlasan = _DbProductUlasan(sequelize, DataTypes);
  var DbProductVariation = _DbProductVariation(sequelize, DataTypes);
  var DbProductView = _DbProductView(sequelize, DataTypes);
  var DbProductViewCustomer = _DbProductViewCustomer(sequelize, DataTypes);
  var DbProfile = _DbProfile(sequelize, DataTypes);
  var DbProfileDescription = _DbProfileDescription(sequelize, DataTypes);
  var DbPromo = _DbPromo(sequelize, DataTypes);
  var DbPromoKategori = _DbPromoKategori(sequelize, DataTypes);
  var DbRegion = _DbRegion(sequelize, DataTypes);
  var DbRencanaBelanja = _DbRencanaBelanja(sequelize, DataTypes);
  var DbResetPin = _DbResetPin(sequelize, DataTypes);
  var DbReturn = _DbReturn(sequelize, DataTypes);
  var DbReturnAction = _DbReturnAction(sequelize, DataTypes);
  var DbReturnHistory = _DbReturnHistory(sequelize, DataTypes);
  var DbReturnReason = _DbReturnReason(sequelize, DataTypes);
  var DbReturnStatus = _DbReturnStatus(sequelize, DataTypes);
  var DbReview = _DbReview(sequelize, DataTypes);
  var DbSetting = _DbSetting(sequelize, DataTypes);
  var DbShipping = _DbShipping(sequelize, DataTypes);
  var DbSlider = _DbSlider(sequelize, DataTypes);
  var DbSpesial = _DbSpesial(sequelize, DataTypes);
  var DbSpesialProduct = _DbSpesialProduct(sequelize, DataTypes);
  var DbSpesifikasi = _DbSpesifikasi(sequelize, DataTypes);
  var DbSsoApiLog = _DbSsoApiLog(sequelize, DataTypes);
  var DbStatusPembayaran = _DbStatusPembayaran(sequelize, DataTypes);
  var DbStatusPembayaranKomentar = _DbStatusPembayaranKomentar(sequelize, DataTypes);
  var DbSumberDana = _DbSumberDana(sequelize, DataTypes);
  var DbTerakhirDicari = _DbTerakhirDicari(sequelize, DataTypes);
  var DbTerakhirDilihat = _DbTerakhirDilihat(sequelize, DataTypes);
  var DbTest = _DbTest(sequelize, DataTypes);
  var DbTutorial = _DbTutorial(sequelize, DataTypes);
  var DbUser = _DbUser(sequelize, DataTypes);
  var DbUserRole = _DbUserRole(sequelize, DataTypes);
  var DbZone = _DbZone(sequelize, DataTypes);
  var DbZoneToGeoZone = _DbZoneToGeoZone(sequelize, DataTypes);
  var ErlUsageSiplahTahunan = _ErlUsageSiplahTahunan(sequelize, DataTypes);
  var EuHarga2022 = _EuHarga2022(sequelize, DataTypes);
  var EuHarga2023 = _EuHarga2023(sequelize, DataTypes);
  var EuHarga2024 = _EuHarga2024(sequelize, DataTypes);
  var EuHarga2025 = _EuHarga2025(sequelize, DataTypes);
  var EuPaymentSettled = _EuPaymentSettled(sequelize, DataTypes);
  var FixData2023 = _FixData2023(sequelize, DataTypes);
  var FixV23 = _FixV23(sequelize, DataTypes);
  var HistoryUbahRekeningCv = _HistoryUbahRekeningCv(sequelize, DataTypes);
  var LaporanBulanan = _LaporanBulanan(sequelize, DataTypes);
  var LaporanHarian = _LaporanHarian(sequelize, DataTypes);
  var LaporanTahunan = _LaporanTahunan(sequelize, DataTypes);
  var LaporanTahunanDay = _LaporanTahunanDay(sequelize, DataTypes);
  var LogBerhasilUpdate = _LogBerhasilUpdate(sequelize, DataTypes);
  var Payment = _Payment(sequelize, DataTypes);
  var PbBook = _PbBook(sequelize, DataTypes);
  var PbBookDetail = _PbBookDetail(sequelize, DataTypes);
  var PbKela = _PbKela(sequelize, DataTypes);
  var PbLevel = _PbLevel(sequelize, DataTypes);
  var PbSubject = _PbSubject(sequelize, DataTypes);
  var Perbaikan2023 = _Perbaikan2023(sequelize, DataTypes);
  var RekapKotum = _RekapKotum(sequelize, DataTypes);
  var RekapProvinsi = _RekapProvinsi(sequelize, DataTypes);
  var RekapSekolah = _RekapSekolah(sequelize, DataTypes);
  var ReportSerapanErl = _ReportSerapanErl(sequelize, DataTypes);
  var RoCity = _RoCity(sequelize, DataTypes);
  var RoProvince = _RoProvince(sequelize, DataTypes);
  var RoSubdistrict = _RoSubdistrict(sequelize, DataTypes);
  var RoWilayah = _RoWilayah(sequelize, DataTypes);
  var SiplahDimensiProduk = _SiplahDimensiProduk(sequelize, DataTypes);
  var SiplahDimensiTransaksi = _SiplahDimensiTransaksi(sequelize, DataTypes);
  var SiplahDimensiTransaksi2021 = _SiplahDimensiTransaksi2021(sequelize, DataTypes);
  var SiplahProductBntp = _SiplahProductBntp(sequelize, DataTypes);
  var SiplahProductBtp = _SiplahProductBtp(sequelize, DataTypes);
  var SiplahProductClassification = _SiplahProductClassification(sequelize, DataTypes);
  var SiplahProductLevel = _SiplahProductLevel(sequelize, DataTypes);
  var SiplahProductPublisher = _SiplahProductPublisher(sequelize, DataTypes);
  var SiplahWilayah = _SiplahWilayah(sequelize, DataTypes);
  var TbAnggaran = _TbAnggaran(sequelize, DataTypes);
  var TbMitraSettingsTransferUser = _TbMitraSettingsTransferUser(sequelize, DataTypes);
  var TbMitraSettingsTransferUserHistory = _TbMitraSettingsTransferUserHistory(sequelize, DataTypes);
  var TbTransferMitra = _TbTransferMitra(sequelize, DataTypes);
  var TblChat = _TblChat(sequelize, DataTypes);
  var TblMessage = _TblMessage(sequelize, DataTypes);
  var UserToken = _UserToken(sequelize, DataTypes);
  var WsKela = _WsKela(sequelize, DataTypes);
  var WsProductBntp = _WsProductBntp(sequelize, DataTypes);
  var WsProductBtp = _WsProductBtp(sequelize, DataTypes);
  var WsPuskurbukNontek = _WsPuskurbukNontek(sequelize, DataTypes);
  var WsPuskurbukTek = _WsPuskurbukTek(sequelize, DataTypes);
  var WsSchoolLevel = _WsSchoolLevel(sequelize, DataTypes);

  DbOrderProductHistory.belongsTo(DbOrder, { as: "order", foreignKey: "orderId"});
  DbOrder.hasMany(DbOrderProductHistory, { as: "dbOrderProductHistories", foreignKey: "orderId"});
  DbOrderProductHistory.belongsTo(DbOrderProduct, { as: "orderProduct", foreignKey: "orderProductId"});
  DbOrderProduct.hasMany(DbOrderProductHistory, { as: "dbOrderProductHistories", foreignKey: "orderProductId"});
  DbLogApproved.belongsTo(DbProduct, { as: "product", foreignKey: "productId"});
  DbProduct.hasMany(DbLogApproved, { as: "dbLogApproveds", foreignKey: "productId"});
  TblMessage.belongsTo(TblChat, { as: "chat", foreignKey: "chatId"});
  TblChat.hasMany(TblMessage, { as: "tblMessages", foreignKey: "chatId"});

  return {
    CiSession,
    DbAddress,
    DbAnggaran,
    DbAuthRecon,
    DbAuthor,
    DbBank,
    DbBankCode,
    DbBanner,
    DbBannerImage,
    DbBannerImageDescription,
    DbBantuan,
    DbBantuanKategori,
    DbCart,
    DbCategory,
    DbCategoryDescription,
    DbCategorySandbox,
    DbCategoryToSpesifikasi,
    DbCeker,
    DbChat,
    DbCity,
    DbCompare,
    DbComplain,
    DbCountry,
    DbCustomer,
    DbCustomerGroupDescription,
    DbCustomerIp,
    DbCustomerLog,
    DbCustomerLogFix,
    DbCustomerOnline,
    DbCustomerSchool,
    DbDigital,
    DbEkspedisi,
    DbFinance,
    DbFlashsale,
    DbFlashsaleProduct,
    DbForgotPasswordToken,
    DbGeoZone,
    DbHistoriPindahCabang,
    DbKomplain,
    DbKomplainDetail,
    DbKomplainKategori,
    DbKomplainc,
    DbKurir,
    DbLayout,
    DbLogApi,
    DbLogApiAgregasi,
    DbLogApiBank,
    DbLogApiBjatim,
    DbLogApiBjb,
    DbLogApiBpd,
    DbLogApiBri,
    DbLogApiMitra,
    DbLogApiNew,
    DbLogApproved,
    DbLogBankFix2025,
    DbLogCronjob,
    DbLogDjp,
    DbLogFix2024,
    DbLogInt,
    DbLogPerbaikan,
    DbLogPretransaction,
    DbLogSearch,
    DbLogUpdateCalculate,
    DbMaintenance,
    DbMall,
    DbMallCabang,
    DbMallCabangToMall,
    DbMallChat,
    DbMallEkspedisi,
    DbMallToBanner,
    DbMallToRek,
    DbMallType,
    DbMallUlasan,
    DbMallUser,
    DbManufacturer,
    DbManufacturerToMall,
    DbNego,
    DbNegoDetail,
    DbNotifHp,
    DbNotification,
    DbNotification202,
    DbNotificationCopy1,
    DbOrder,
    DbOrderAgregation,
    DbOrderBast,
    DbOrderBastHistory,
    DbOrderHistory,
    DbOrderPembayaran,
    DbOrderPembayaranHistory,
    DbOrderPenagihan,
    DbOrderProduct,
    DbOrderProductHistory,
    DbOrderProductLog,
    DbOrderStatus,
    DbOrderTest,
    DbOrderTotal,
    DbOrderUlasan,
    DbPajakLapor,
    DbPajakTagppn,
    DbPaymentConfirmation,
    DbPengawa,
    DbPengawasWilKab,
    DbPengawasWilKec,
    DbPengawasWilProv,
    DbPenjualanNilai,
    DbPpnTagName,
    DbProduct,
    DbProductCompare,
    DbProductCompareDetail,
    DbProductDescription,
    DbProductDescription2,
    DbProductDiscount,
    DbProductImage,
    DbProductPacket,
    DbProductRiwayatStok,
    DbProductSpecial,
    DbProductSpecialCategory,
    DbProductToCabang,
    DbProductToCategory,
    DbProductToNego,
    DbProductUlasan,
    DbProductVariation,
    DbProductView,
    DbProductViewCustomer,
    DbProfile,
    DbProfileDescription,
    DbPromo,
    DbPromoKategori,
    DbRegion,
    DbRencanaBelanja,
    DbResetPin,
    DbReturn,
    DbReturnAction,
    DbReturnHistory,
    DbReturnReason,
    DbReturnStatus,
    DbReview,
    DbSetting,
    DbShipping,
    DbSlider,
    DbSpesial,
    DbSpesialProduct,
    DbSpesifikasi,
    DbSsoApiLog,
    DbStatusPembayaran,
    DbStatusPembayaranKomentar,
    DbSumberDana,
    DbTerakhirDicari,
    DbTerakhirDilihat,
    DbTest,
    DbTutorial,
    DbUser,
    DbUserRole,
    DbZone,
    DbZoneToGeoZone,
    ErlUsageSiplahTahunan,
    EuHarga2022,
    EuHarga2023,
    EuHarga2024,
    EuHarga2025,
    EuPaymentSettled,
    FixData2023,
    FixV23,
    HistoryUbahRekeningCv,
    LaporanBulanan,
    LaporanHarian,
    LaporanTahunan,
    LaporanTahunanDay,
    LogBerhasilUpdate,
    Payment,
    PbBook,
    PbBookDetail,
    PbKela,
    PbLevel,
    PbSubject,
    Perbaikan2023,
    RekapKotum,
    RekapProvinsi,
    RekapSekolah,
    ReportSerapanErl,
    RoCity,
    RoProvince,
    RoSubdistrict,
    RoWilayah,
    SiplahDimensiProduk,
    SiplahDimensiTransaksi,
    SiplahDimensiTransaksi2021,
    SiplahProductBntp,
    SiplahProductBtp,
    SiplahProductClassification,
    SiplahProductLevel,
    SiplahProductPublisher,
    SiplahWilayah,
    TbAnggaran,
    TbMitraSettingsTransferUser,
    TbMitraSettingsTransferUserHistory,
    TbTransferMitra,
    TblChat,
    TblMessage,
    UserToken,
    WsKela,
    WsProductBntp,
    WsProductBtp,
    WsPuskurbukNontek,
    WsPuskurbukTek,
    WsSchoolLevel,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

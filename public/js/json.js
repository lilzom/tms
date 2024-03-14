let jsonData = [{
        "id": "1. Quản lý hồ sơ",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "1.1 Tra cứu danh mục hồ sơ",
        "parent_id": "1. Quản lý hồ sơ",
        "is_folder": 1
    }, {
        "id": "1.1.1 Tra cứu danh mục hồ sơ",
        "parent_id": "1.1 Tra cứu danh mục hồ sơ",
        "is_folder": 0
    }, {
        "id": "1.1.2 Tra cứu danh mục Phụ lục",
        "parent_id": "1.1 Tra cứu danh mục hồ sơ",
        "is_folder": 0
    }, {
        "id": "1.1.3 Tra cứu danh mục hồ sơ",
        "parent_id": "1.1 Tra cứu danh mục hồ sơ",
        "is_folder": 0
    }, {
        "id": "1.2 Quản lý hồ sơ nhận|gửi",
        "parent_id": "1. Quản lý hồ sơ",
        "is_folder": 1
    }, {
        "id": "1.2.1 Ghi nhận|Cập nhật thông tin hồ sơ nhận",
        "parent_id": "1.2 Quản lý hồ sơ nhận|gửi",
        "is_folder": 0
    }, {
        "id": "1.2.1 Ghi nhận|Cập nhật thông tin hồ sơ gửi",
        "parent_id": "1.2 Quản lý hồ sơ nhận|gửi",
        "is_folder": 0
    }, {
        "id": "1.2.2 Lập| In phiếu chuyển hồ sơ",
        "parent_id": "1.2 Quản lý hồ sơ nhận|gửi",
        "is_folder": 0
    }, {
        "id": "1.2.3 Đóng tệp hồ sơ",
        "parent_id": "1.2 Quản lý hồ sơ nhận|gửi",
        "is_folder": 0
    }, {
        "id": "1.4 Nhập QĐ thanh tra kiểm tra",
        "parent_id": "1. Quản lý hồ sơ",
        "is_folder": 1
    }, {
        "id": "1.4.1 Nhập DS công bố QĐ kiểm tra, thanh tra thuế tại trụ sở NNT",
        "parent_id": "1.4 Nhập QĐ thanh tra kiểm tra",
        "is_folder": 0
    }, {
        "id": "1.5 Tra cứu hồ sơ",
        "parent_id": "1. Quản lý hồ sơ",
        "is_folder": 1
    }, {
        "id": "1.5.1 Tra cứu hồ sơ nhận",
        "parent_id": "1.5 Tra cứu hồ sơ",
        "is_folder": 0
    }, {
        "id": "1.5.1 Tra cứu hồ sơ gửi",
        "parent_id": "1.5 Tra cứu hồ sơ",
        "is_folder": 0
    }, {
        "id": "1.5.2 Tra cứu thanh tra kiểm tra",
        "parent_id": "1.5 Tra cứu hồ sơ",
        "is_folder": 0
    }, {
        "id": "1.9 Báo cáo",
        "parent_id": "1. Quản lý hồ sơ",
        "is_folder": 1
    }, {
        "id": "1.9.1 Báo cáo tình hình nhận gửi hồ sơ theo loại",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.2 Danh sách hồ sơ chưa đúng thủ tục",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.3 Báo cáo chi tiết quản lý hồ sơ",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.4 Sổ theo dõi chi tiết hồ sơ ĐKT TNCN cho cá nhân thông qua CQCT",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.5 Nhập số đã xử lý từ ứng dụng QHS",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.6 Báo cáo tình hình thực hiện hành chính thuế",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.7 Báo cáo hồ sơ chưa trả kết quả",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.8 Báo cáo hồ sơ quá hạn trả kết quả",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.9 Danh sách NNT đã nộp tờ khai QT thuế TNDN và đã nộp|chưa nộp BCTC",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "1.9.10 Báo cáo tình hình thực hiện hành chính thuế (CV 808)",
        "parent_id": "1.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.Đăng ký thuế",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.1.1 Nhập mới tờ khai đăng ký thuế",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.2 Sửa tờ khai đăng ký thuế",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.4 Cập nhật đăng ký chuyển nhượng chứng khoán",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.5 Chuyển cơ quan thuế quản lý",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.6 Nhận chuyển cơ quan thuế quản lý",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.7 Hủy chuyển cơ quan thuế",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.8 Tạm ngừng KD, chấm dứt hiệu lực MST, NNT không HĐ tại địa chỉ đã ĐK",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.9 Khôi phục tạm ngừng KD trước thời hạn, khôi phục MST",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.10 Nhập thông tin cảnh báo gửi ĐKKD",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.11 Nhập TK 02|ĐK-TCT hỗ trợ xử lý dữ liệu lịch sử",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.12 Nhập thông tin NNT vi phạm pháp luật đã chuyển cơ quan công an",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.13 Nhập Quyết định đình chỉ mở thủ tục phá sản của tòa án",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.1.15 Nhập Quyết định mở thủ tục phá sản của tòa án",
        "parent_id": "2.1 Xử lý hồ sơ đăng ký thuế",
        "is_folder": 0
    }, {
        "id": "2.2 Tra cứu thông tin",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.2.1 Xem thông tin NNT",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.2 Xem lịch sử thông tin NNT",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.4 Xem thông tin đăng ký chuyển nhượng chứng khoán",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.5 Tra cứu dữ liệu đăng ký kinh doanh",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.6 Tra cứu giao dịch",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.7 Xem thông tin phân công quản lý NNT",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.8 Tra cứu NNT bị lỗi khôi phục tạm nghỉ tự động",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.10 Tra cứu NNT kê khai qua DLT",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.11 Tra cứu NNT vãng lai",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.12 Tra cứu gói tin TMS gửi ra trục",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.14 Tra cứu danh sách tài khoản ngân hàng",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.15 Tra cứu thông tin cảnh báo gửi ĐKKD",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.16 Tra cứu loại thuế phải nộp",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.17 Tra cứu danh sách đơn vị trực thuộc",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.18 Tra cứu danh sách NNT đang hoạt động cần phân công Cục thuế quản lý",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.19 Tra cứu dữ liệu đăng ký doanh nghiệp chưa nhập MLNS",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.20 Tra cứu danh sách địa điểm kinh doanh",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.21 Tra cứu doanh nghiệp có đăng ký sử dụng hóa đơn",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.24 In danh sách NNT (liên thông) chuyển từ TT06 sang TT05,từ TT05 sang TT00",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.25 Tra cứu danh sách NNT đăng ký XNK",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.26 Tra cứu danh sách NTNN trên bảng kê 04.1-ĐK-TCT-BK",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.27 Tra cứu DN đã thành lập từ 12 tháng trở lên nhưng chưa BS kế toán trưởng",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.2.28 Tra cứu tên, địa chỉ dài của DN liên thông",
        "parent_id": "2.2 Tra cứu thông tin",
        "is_folder": 0
    }, {
        "id": "2.3 Quản lý In thông tin người nộp thuế",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.3.1 In thẻ MST cá nhân",
        "parent_id": "2.3 Quản lý In thông tin người nộp thuế",
        "is_folder": 0
    }, {
        "id": "2.3.2 In thông tin NNT",
        "parent_id": "2.3 Quản lý In thông tin người nộp thuế",
        "is_folder": 0
    }, {
        "id": "2.3.3 In thông báo ngừng hoạt động",
        "parent_id": "2.3 Quản lý In thông tin người nộp thuế",
        "is_folder": 0
    }, {
        "id": "2.4 Đăng ký bộ phận| Cán bộ quản lý",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.4.1 Danh mục bộ phận| Cán bộ quản lý",
        "parent_id": "2.4 Đăng ký bộ phận| Cán bộ quản lý",
        "is_folder": 0
    }, {
        "id": "2.4.2 Phân công quản lý NNT",
        "parent_id": "2.4 Đăng ký bộ phận| Cán bộ quản lý",
        "is_folder": 0
    }, {
        "id": "2.4.3 Tra cứu NNT chưa phân công quản lý",
        "parent_id": "2.4 Đăng ký bộ phận| Cán bộ quản lý",
        "is_folder": 0
    }, {
        "id": "2.6 Quản lý NNT vãng lai",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.6.1 Đăng ký mới vãng lai",
        "parent_id": "2.6 Quản lý NNT vãng lai",
        "is_folder": 0
    }, {
        "id": "2.6.2 Sửa tờ khai vãng lai",
        "parent_id": "2.6 Quản lý NNT vãng lai",
        "is_folder": 0
    }, {
        "id": "2.6.4 Đóng cửa NNT vãng lai",
        "parent_id": "2.6 Quản lý NNT vãng lai",
        "is_folder": 0
    }, {
        "id": "2.6.5 In thông báo MST vãng lai",
        "parent_id": "2.6 Quản lý NNT vãng lai",
        "is_folder": 0
    }, {
        "id": "2.6.6 Tái hoạt động vãng lai",
        "parent_id": "2.6 Quản lý NNT vãng lai",
        "is_folder": 0
    }, {
        "id": "2.7 Quản lý thông tin người phụ thuộc",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.7.1 Đăng ký|Cập nhật thông tin người phụ thuộc",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.2 Tra cứu thông tin người phụ thuộc",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.3 Chuyển NPT thành NNT",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.4 In thông báo MST NPT",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.5 Tra cứu NPT cấp mã không thành công",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.6 Báo cáo thống kê NPT",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.7 Tra cứu thông tin NPT cũ",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.8 Đóng MST người phụ thuộc",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.7.9 Khôi phục MST người phụ thuộc",
        "parent_id": "2.7 Quản lý thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "2.8 Xử lý đăng ký thuế điện tử",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.8.1 Nhật ký nhận file đăng ký thuế điện tử",
        "parent_id": "2.8 Xử lý đăng ký thuế điện tử",
        "is_folder": 0
    }, {
        "id": "2.9 Báo cáo",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.9.1 Danh bạ NNT",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.2 Danh sách NNT",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.3 Số lượng NNT",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.4 Thống kê NNT đã cấp mã",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.5 Danh sách ĐVCQ đóng cửa theo ĐVTT hoạt động",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.6 Danh sách ĐVTT đóng cửa theo ĐVCQ",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.7 Thống kê NNT gửi từ phòng ĐKKD",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.8 Thống kê giao dịch thay đổi thông tin",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.9 Báo cáo kiểm soát",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.9.11 Báo cáo tổng hợp các văn bản của CQ, tổ chức có liên quan gửi đến",
        "parent_id": "2.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.10.1 Nhập TK cấp tài khoản thiếu thông tin hoặc không phải theo dõi VN NNT",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.2 Sửa TK cấp tài khoản thiếu thông tin hoặc không phải theo dõi NV NNT",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.3 Xem TK cấp tài khoản thiếu thông tin hoặc không phải theo dõi NV NN",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.4 Chấm dứt hiệu lực tài khoản thiếu thông tin hoặc không phải theo dõi NV",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.5 Khôi phục tài khoản thiếu thông tin hoặc không phải theo dõi NV NNT",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.6 Chuyển đổi loại NNT cho các tài khoản thiếu TT  hoặc không phải theo dõi",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.7 Chuyển đổi loại NNT cho các MST ủy nhiệm thu đã cấp",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.10.8 Gán TK thiếu t.tin hoặc ko phải theo dõi NV NNT chưa chuyển loại NNT mới",
        "parent_id": "2.10 Quản lý TK thiếu thông tin|không theo dõi NVT NNT",
        "is_folder": 0
    }, {
        "id": "2.11 Quản lý nhà cung cấp nước ngoài",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.11.1 Tra cứu NNT là nhà cung cấp nước ngoài",
        "parent_id": "2.11 Quản lý nhà cung cấp nước ngoài",
        "is_folder": 0
    }, {
        "id": "2.12 Tra cứu số hiệu tài khoản thanh toán của NNT",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.12.1 Phân công quản lý MST cho CBT để tra cứu d.sách số hiệu TK của NNT",
        "parent_id": "2.12 Tra cứu số hiệu tài khoản thanh toán của NNT",
        "is_folder": 0
    }, {
        "id": "2.12.2 Tra cứu danh sách số hiệu tài khoản thanh toán theo phân công",
        "parent_id": "2.12 Tra cứu số hiệu tài khoản thanh toán của NNT",
        "is_folder": 0
    },
    {
        "id": "2.12.3 Báo cáo theo dõi số lượng tài khoản NH của NNT",
        "parent_id": "2.12 Tra cứu số hiệu tài khoản thanh toán của NNT",
        "is_folder": 0
    }, {
        "id": "2.13 Rà soát MST cá nhân",
        "parent_id": "2.Đăng ký thuế",
        "is_folder": 1
    }, {
        "id": "2.13.1 Cập nhật trạng thái rà soát dữ liệu",
        "parent_id": "2.13 Rà soát MST cá nhân",
        "is_folder": 0,
        "upgradings": [{
                "version": "6.52",
                "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2023 > TMS > 6.52"
            },
            {
                "version": "6.57",
                "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.57_RaSoat_MST"
            }
        ]
    }, {
        "id": "2.13.2 Báo cáo tình hình rà soát chuẩn hóa MST",
        "parent_id": "2.13 Rà soát MST cá nhân",
        "is_folder": 0,
        "upgradings": [{
                "version": "6.52",
                "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2023 > TMS > 6.52"
            },
            {
                "version": "6.57",
                "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.57_RaSoat_MST"
            }
        ]
    }, {
        "id": "2.13.3 Tra cứu lịch sử cập nhật trạng thái rà soát",
        "parent_id": "2.13 Rà soát MST cá nhân",
        "is_folder": 0,
        "upgradings": [{
                "version": "6.52",
                "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2023 > TMS > 6.52"
            },
            {
                "version": "6.57",
                "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.57_RaSoat_MST"
            }
        ]
    },
    {
        "id": "3.Xử lý tờ khai",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "3.1 Quản lý nghĩa vụ kê khai",
        "parent_id": "3.Xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.1.1 Cập nhật|Tra cứu nghĩa vụ kê khai",
        "parent_id": "3.1 Quản lý nghĩa vụ kê khai",
        "is_folder": 0
    }, {
        "id": "3.1.2 Đăng ký tờ khai phải nộp",
        "parent_id": "3.1 Quản lý nghĩa vụ kê khai",
        "is_folder": 0
    }, {
        "id": "3.1.3 Tra cứu danh sách NNT đăng ký thuế mới hoặc thay đổi thông tin",
        "parent_id": "3.1 Quản lý nghĩa vụ kê khai",
        "is_folder": 0
    }, {
        "id": "3.1.4 Thông báo gia hạn NVKK",
        "parent_id": "3.1 Quản lý nghĩa vụ kê khai",
        "is_folder": 0
    }, {
        "id": "3.1.5 Hỗ trợ quản lý kê khai thuế GTGT theo chu kỳ",
        "parent_id": "3.1 Quản lý nghĩa vụ kê khai",
        "is_folder": 1
    }, {
        "id": "3.1.5.1 Quản lý danh mục kê khai thuế GTGT",
        "parent_id": "3.1.5 Hỗ trợ quản lý kê khai thuế GTGT theo chu kỳ",
        "is_folder": 0
    }, {
        "id": "3.1.5.2 Hỗ trợ xác định NNT thuộc diện KK thuế GTGT theo tháng|quý,TT|KT",
        "parent_id": "3.1.5 Hỗ trợ quản lý kê khai thuế GTGT theo chu kỳ",
        "is_folder": 0
    }, {
        "id": "3.1.5.3 Nhập thông báo của NNT chuyển KK thuế GTGT từ Quý sang Tháng",
        "parent_id": "3.1.5 Hỗ trợ quản lý kê khai thuế GTGT theo chu kỳ",
        "is_folder": 0
    }, {
        "id": "3.1.5.4 Nhập thông báo của NNT áp dụng PP tính thuế GTGT theo PP khấu trừ",
        "parent_id": "3.1.5 Hỗ trợ quản lý kê khai thuế GTGT theo chu kỳ",
        "is_folder": 0
    }, {
        "id": "3.1.5.5 Tra cứu thông báo của NNT kê khai thuế GTGT",
        "parent_id": "3.1.5 Hỗ trợ quản lý kê khai thuế GTGT theo chu kỳ",
        "is_folder": 0
    }, {
        "id": "3.1.6 Tra cứu lịch sử đăng ký tờ khai phải nộp",
        "parent_id": "3.1 Quản lý nghĩa vụ kê khai",
        "is_folder": 0
    }, {
        "id": "3.2 Xử lý tờ khai| Quyết toán",
        "parent_id": "3.Xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.1.1 Chuyển tờ khai thành dự kiến|Chuyển dự kiến thành Quyết định",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.2 In danh sách dự kiến, niêm yết công khai (Áp dụng trước năm 2015)",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.3 In thông báo thuế khoán",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.4 In danh sách dự kiến, niêm yết công khai (Áp dụng từ năm 2015)",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.5 Nhận file tờ khai Khoán từ Tool",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.7 In sổ bộ phát sinh hộ khoán",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.8 In sổ bộ hộ khoán",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.9 Báo cáo tổng hợp tình hình lập bộ (Hết HL từ TT92|2015)",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.10 Báo cáo thống kê số lượng CNKD theo phương pháp khoán",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.1.11 Công khai thông tin hộ khoán trên website",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 1
    }, {
        "id": "3.2.1.11.1 Lập danh sách công khai thông tin",
        "parent_id": "3.1.11 Công khai thông tin hộ khoán trên website",
        "is_folder": 0
    }, {
        "id": "3.2.1.11.2 Tra cứu|Duyệt danh sách công khai thông tin",
        "parent_id": "3.1.11 Công khai thông tin hộ khoán trên website",
        "is_folder": 0
    }, {
        "id": "3.2.1.12 Kết xuất danh sách hộ khoán (Từ năm 2021)",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.13 Hủy tờ khai (Khoán, BC-SDHD)",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.16 Ngừng theo dõi NVT đối với CNKD ngừng|nghỉ KD không thông báo",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.18 Tra cứu và tổng hợp doanh thu của CNKD",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 1
    }, {
        "id": "3.2.1.18.1 Tổng hợp doanh thu của CNKD",
        "parent_id": "3.2.1.18 Tra cứu và tổng hợp doanh thu của CNKD",
        "is_folder": 0
    }, {
        "id": "3.2.1.18.2 Tra cứu tổng doanh thu của CNKD",
        "parent_id": "3.2.1.18 Tra cứu và tổng hợp doanh thu của CNKD",
        "is_folder": 0
    }, {
        "id": "3.2.1.18.3 Nhận file excel mức lệ phí môn bài (Từ 2022)",
        "parent_id": "3.2.1.18 Tra cứu và tổng hợp doanh thu của CNKD",
        "is_folder": 0
    }, {
        "id": "3.2.1.18.4 Nhập mức lệ phí môn bài",
        "parent_id": "3.2.1.18 Tra cứu và tổng hợp doanh thu của CNKD",
        "is_folder": 0
    }, {
        "id": "3.2.1.18.5 Tra cứu mức lệ phí môn bài",
        "parent_id": "3.2.1.18 Tra cứu và tổng hợp doanh thu của CNKD",
        "is_folder": 0
    }, {
        "id": "3.2.1.19 Báo cáo hộ khoán (Công văn 1036|TCT-TNCN)",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.20 Tra cứu CNKD lệch địa chỉ trên tờ khai và trên thông tin ĐKT",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.21 Xử lý hộ khoán được miễn thuế",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 1
    }, {
        "id": "3.2.1.21.1 Lập danh sách HKD được miễn thuế",
        "parent_id": "3.2.1.21 Xử lý hộ khoán được miễn thuế",
        "is_folder": 0
    }, {
        "id": "3.2.1.21.2 Điều chỉnh danh sách HKD được miễn thuế",
        "parent_id": "3.2.1.21 Xử lý hộ khoán được miễn thuế",
        "is_folder": 0
    }, {
        "id": "3.2.1.21.3 In danh sách hộ kinh doanh, cá nhân kinh doanh được miễn thuế",
        "parent_id": "3.2.1.21 Xử lý hộ khoán được miễn thuế",
        "is_folder": 0
    }, {
        "id": "3.2.1.21.4 In thông báo miễn thuế",
        "parent_id": "3.2.1.21 Xử lý hộ khoán được miễn thuế",
        "is_folder": 0
    }, {
        "id": "3.2.1.21.5 Điều chỉnh tiền chậm nộp cho HKD được miễn thuế theo NĐ92|2021",
        "parent_id": "3.2.1.21 Xử lý hộ khoán được miễn thuế",
        "is_folder": 0
    }, {
        "id": "3.2.1.22.1 Điều chỉnh thuế khoán",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.1.22.2 Tra cứu điều chỉnh thuế khoán",
        "parent_id": "3.2.1 Xử lý căn cứ tính thuế hộ khoán",
        "is_folder": 0
    }, {
        "id": "3.2.2 Chuyển tờ khai ổn định",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.2.1 Chuyển tờ khai LPMB ổn định",
        "parent_id": "3.2.2 Chuyển tờ khai ổn định",
        "is_folder": 0
    }, {
        "id": "3.2.2.2 Chuyển tờ khai ổn định",
        "parent_id": "3.2.2 Chuyển tờ khai ổn định",
        "is_folder": 0
    }, {
        "id": "3.2.2.2 Chuyển tờ khai ổn định (hết hiệu lực từ 2022)",
        "parent_id": "3.2.2 Chuyển tờ khai ổn định",
        "is_folder": 0
    }, {
        "id": "3.2.2.3 Tra cứu tờ khai môn bài chuyển ổn định",
        "parent_id": "3.2.2 Chuyển tờ khai ổn định",
        "is_folder": 0
    }, {
        "id": "3.2.3 Nhật ký nhận file",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.3.1 Nhật ký nhận File",
        "parent_id": "3.2.3 Nhật ký nhận file",
        "is_folder": 0
    }, {
        "id": "3.2.3.2 Nhật ký nhận file tờ khai qua trục truyền tin",
        "parent_id": "3.2.3 Nhật ký nhận file",
        "is_folder": 0
    }, {
        "id": "3.2.3.3 Nhật ký nhận file qua TTT ( Từ ngày 01.10.2017)",
        "parent_id": "3.2.3 Nhật ký nhận file",
        "is_folder": 0
    }, {
        "id": "3.2.3.4 Nhật ký xử lý gói tin",
        "parent_id": "3.2.3 Nhật ký nhận file",
        "is_folder": 0
    }, {
        "id": "3.2.3.5  Phân công CQT nộp tờ khai",
        "parent_id": "3.2.3 Nhật ký nhận file",
        "is_folder": 0
    }, {
        "id": "3.2.3.6 Tra cứu địa điểm kinh doanh|ĐVPT|Dự án đầu tư",
        "parent_id": "3.2.3 Nhật ký nhận file",
        "is_folder": 0
    }, {
        "id": "3.2.4 Tra cứu tổng hợp quyết toán toán từ 2011",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.4.1 Tổng hợp dữ liệu quyết toán",
        "parent_id": "3.2.4 Tra cứu tổng hợp quyết toán toán từ 2011",
        "is_folder": 1
    }, {
        "id": "3.2.4.1.1 Tổng hợp dữ liệu thành viên nhóm KD",
        "parent_id": "3.2.4.1 Tổng hợp dữ liệu quyết toán",
        "is_folder": 0
    }, {
        "id": "3.2.4.1.2 Tổng hợp dữ liệu quyết toán",
        "parent_id": "3.2.4.1 Tổng hợp dữ liệu quyết toán",
        "is_folder": 0
    }, {
        "id": "3.2.4.2 Tra cứu và Đối chiếu dữ liệu tổng hợp quyết toán",
        "parent_id": "3.2.4.1 Tổng hợp dữ liệu quyết toán",
        "is_folder": 0
    }, {
        "id": "3.2.4.2 Tra cứu và Đối chiếu dữ liệu tổng hợp quyết toán",
        "parent_id": "3.2.4 Tra cứu tổng hợp quyết toán toán từ 2011",
        "is_folder": 0
    }, {
        "id": "3.2.5 Bỏ trạng thái hạch toán tờ khai quyết toán",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.5.1 Bỏ trạng thái hạch toán tờ khai quyết toán",
        "parent_id": "3.2.5 Bỏ trạng thái hạch toán tờ khai quyết toán",
        "is_folder": 0
    }, {
        "id": "3.2.6 Tra cứu| Hủy tờ khai",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.6.1 Tra cứu tờ khai",
        "parent_id": "3.2.6 Tra cứu| Hủy tờ khai",
        "is_folder": 0
    }, {
        "id": "3.2.6.2 Hủy TK sai hiệu lực mẫu biểu",
        "parent_id": "3.2.6 Tra cứu| Hủy tờ khai",
        "is_folder": 0
    }, {
        "id": "3.2.6.3 Hủy tờ khai 05|QTT-TNCN có ghi lịch sử",
        "parent_id": "3.2.6 Tra cứu| Hủy tờ khai",
        "is_folder": 0
    }, {
        "id": "3.2.6.4 Hủy tờ khai đã quá hạn nộp 10 năm",
        "parent_id": "3.2.6 Tra cứu| Hủy tờ khai",
        "is_folder": 0
    }, {
        "id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.7.2 In sổ phát sinh PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.3 In thông báo thuế PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.4 Danh sách NNT có nhiều thửa đất",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.5 Xác nhận hoàn thành các bước lập bộ PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.6 Tra cứu kết quả chuyển tờ khai PNN sang chu kỳ mới",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.7 Kết xuất dữ liệu tờ khai đã chuyển sang chu kỳ mới ra Excel",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.8 Kết xuất DL TK 01|TK-SDDPNN, 02|TK-SDDPNN chu kỳ 2022-2026 ra excel",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.9 Kết xuất dữ liệu danh mục PNN ra XML",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.1 Thay đổi địa bàn cho nhiều thửa đất",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.10 Nhận dữ liệu tờ khai 01|TK-SDDPNN, 02|TK-SDDPNN từ Tool PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.11 Xác nhận|Từ chối TK 01|TK-SDDPNN, 02|TK-SDDPNN từ Tool PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.13 In Bảng kê tiền nợ, tiền chậm nộp PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.7.14 Tra cứu kết quả xác nhận hoàn thành các bước lập bộ PNN",
        "parent_id": "3.2.7 Xử lý dữ liệu thuế SDĐPNN",
        "is_folder": 0
    }, {
        "id": "3.2.8 Tra cứu tờ khai có phụ lục phân bổ",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 0
    }, {
        "id": "3.2.11 Báo cáo cá nhân cho thuê tài sản",
        "parent_id": "3.2 Xử lý tờ khai| Quyết toán",
        "is_folder": 1
    }, {
        "id": "3.2.11.1 In Báo cáo cá nhân cho thuê tài sản",
        "parent_id": "3.2.11 Báo cáo cá nhân cho thuê tài sản",
        "is_folder": 0
    }, {
        "id": "3.2.11.2 Tra cứu|Ngừng theo dõi hợp đồng thuê tài sản",
        "parent_id": "3.2.11 Báo cáo cá nhân cho thuê tài sản",
        "is_folder": 0
    }, {
        "id": "3.2.11.3 Tra cứu danh sách CN cho TTS đã có tờ khai TTS nhưng không có bảng kê",
        "parent_id": "3.2.11 Báo cáo cá nhân cho thuê tài sản",
        "is_folder": 0
    }, {
        "id": "3.9 Báo cáo xử lý tờ khai",
        "parent_id": "3.Xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.9.1 Danh sách theo dõi NVKK",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.2 In sổ phát sinh tờ khai thuế (Hết HL với mẫu TT80)",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.3 Báo cáo đánh giá tình hình nộp hồ sơ khai thuế",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.9.4.1 Danh sách cá nhân nộp thuế qua cơ quan chi trả",
        "parent_id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.4.2 Nguồn thu nhập của cá nhân",
        "parent_id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.4.3 Kê khai thuế TNCN của NNT có thu nhập từ TLTC",
        "parent_id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.4.4 Kê khai thuế TNCN của cá nhân kinh doanh",
        "parent_id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.4.5 Kê khai thuế TNCN của cơ quan chi trả",
        "parent_id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.4.6 Danh sách NNT không kê khai MST trên bảng kê tờ khai quyết toán",
        "parent_id": "3.9.4 Báo cáo tổng hợp dữ liệu tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.5 Báo cáo thống kê tình hình nộp HSKT và xử lý vi phạm",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.6 Danh sách NNT kê khai sai tờ khai, quyết toán",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.7 Sổ phát sinh khấu trừ cho một NNT (Hết HL với mẫu TT80)",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.8 Đôn đốc nộp thuế TNDN",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.9.8.1 Danh sách NNT có tạm nộp quý nhỏ hơn 80% trên 03|TNDN",
        "parent_id": "3.9.8 Đôn đốc nộp thuế TNDN",
        "is_folder": 0
    }, {
        "id": "3.9.8.2 Danh sách NNT có phát sinh dự kiến số thuế TNDN tạm nộp quý",
        "parent_id": "3.9.8 Đôn đốc nộp thuế TNDN",
        "is_folder": 0
    }, {
        "id": "3.9.8.3 Danh sách NNT cần đôn đốc nộp thuế TNDN tạm nộp Quý",
        "parent_id": "3.9.8 Đôn đốc nộp thuế TNDN",
        "is_folder": 0
    }, {
        "id": "3.9.8.4 Tổng hợp dữ liệu 1 NNT",
        "parent_id": "3.9.8 Đôn đốc nộp thuế TNDN",
        "is_folder": 0
    }, {
        "id": "3.9.9 Danh sách NNT có số KK trong năm khác số KK quyết toán",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.10 Danh sách NVKK đôn đốc quá 2 lần",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.10 Danh sách số thuế đã bù trừ giữa tờ khai 01|GTGT với tờ khai 02|GTGT",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.11 Báo cáo giảm thuế BVMT",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.9.12 Báo cáo kết quả giảm Phí, Lệ phí theo Thông tư số 44|2023|TT-BTC",
        "parent_id": "3.9 Báo cáo xử lý tờ khai",
        "is_folder": 0
    }, {
        "id": "3.10 Gia hạn nộp thuế",
        "parent_id": "3.Xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.10.1 Gia hạn nộp thuế ND41, ND52 (tiền thuế, tiền thuê đất)",
        "parent_id": "3.10 Gia hạn nộp thuế",
        "is_folder": 1
    }, {
        "id": "3.10.1.11 Điều chỉnh tiền chậm nộp theo NĐ52",
        "parent_id": "3.10.1 Gia hạn nộp thuế ND41, ND52 (tiền thuế, tiền thuê đất)",
        "is_folder": 0
    }, {
        "id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "parent_id": "3.10 Gia hạn nộp thuế",
        "is_folder": 1
    }, {
        "id": "3.10.1.1 Nhập giấy đề nghị gia hạn",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.2 Nhập giấy đề nghị gia hạn theo Danh sách",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.3 Danh sách NNT đề nghị gia hạn",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.4 Danh sách NNT được gia hạn tiền thuế, tiền thuê đất",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.5 Báo cáo tình hình gia hạn nộp thuế, tiền thuê đất",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.8 Báo cáo đối chiếu tiền thuê đất được gia hạn",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.9 Bảng đối chiếu thông tin trên giấy gia hạn của NNT",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.1.10 Danh sách NNT hết thời gian gia hạn mà không nộp thuế",
        "parent_id": "3.10.1 Gia hạn nộp thuế, tiền thuê đất",
        "is_folder": 0
    }, {
        "id": "3.10.2 Gia hạn nộp thuế TTĐB",
        "parent_id": "3.10 Gia hạn nộp thuế",
        "is_folder": 1
    }, {
        "id": "3.10.2.1 Nhập giấy đề nghị gia hạn nộp thuế TTĐB",
        "parent_id": "3.10.2 Gia hạn nộp thuế TTĐB",
        "is_folder": 0
    }, {
        "id": "3.10.3 Tra cứu giấy đề nghị gia hạn.",
        "parent_id": "3.10 Gia hạn nộp thuế",
        "is_folder": 0
    }, {
        "id": "3.10.4 Gia hạn nộp thuế cho Tờ khai nộp trước đơn gia hạn",
        "parent_id": "3.10 Gia hạn nộp thuế",
        "is_folder": 0
    }, {
        "id": "3.10.5 Cập nhật thông tin gia hạn theo từng khoản",
        "parent_id": "3.10 Gia hạn nộp thuế",
        "is_folder": 0
    }, {
        "id": "3.11 Văn bản của cơ quan điều tra",
        "parent_id": "3.Xử lý tờ khai",
        "is_folder": 1
    }, {
        "id": "3.11.1 Nhập thông tin F0",
        "parent_id": "3.11 Văn bản của cơ quan điều tra",
        "is_folder": 0
    }, {
        "id": "3.11.2 Nhập thông tin F1",
        "parent_id": "3.11 Văn bản của cơ quan điều tra",
        "is_folder": 0
    }, {
        "id": "3.11.3 Nhận file excel F0, F1",
        "parent_id": "3.11 Văn bản của cơ quan điều tra",
        "is_folder": 0
    }, {
        "id": "3.11.4 Tra cứu F0, F1",
        "parent_id": "3.11 Văn bản của cơ quan điều tra",
        "is_folder": 0
    }, {
        "id": "4.Xử lý quyết định",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "4.1 Cập nhật|tra cứu quyết định",
        "parent_id": "4.Xử lý quyết định",
        "is_folder": 1
    }, {
        "id": "4.1.1 Cập nhật quyết định|biên bản|kết luận|kiến nghị",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.2 Hạch toán quyết định|biên bản|kết luận|kiến nghị",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.3 Tra cứu quyết định| văn bản|kết luận| kiến nghị",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.5 Nhập| Huỷ QĐ Cảnh cáo vi phạm kê khai",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.7 Nhập quyết định xóa nợ",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.8 Tra cứu giao dịch xóa nợ",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.9 Điều chỉnh dữ liệu",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 1
    }, {
        "id": "4.1.9.1 Điều chỉnh dữ liệu sau chuyển đổi",
        "parent_id": "4.1.9 Điều chỉnh dữ liệu",
        "is_folder": 0
    }, {
        "id": "4.1.9.2 Điều chỉnh dữ liệu PNN nhiều NNT",
        "parent_id": "4.1.9 Điều chỉnh dữ liệu",
        "is_folder": 0
    }, {
        "id": "4.1.9.3 Tra cứu KQ hạch toán điều chỉnh dữ liệu PNN nhiều NNT",
        "parent_id": "4.1.9 Điều chỉnh dữ liệu",
        "is_folder": 0
    }, {
        "id": "4.1.9.4 Điều chỉnh số nộp thừa hàng loạt",
        "parent_id": "4.1.9 Điều chỉnh dữ liệu",
        "is_folder": 0
    }, {
        "id": "4.1.9.5 Tra cứu QĐ|phiếu điều chỉnh",
        "parent_id": "4.1.9 Điều chỉnh dữ liệu",
        "is_folder": 0
    }, {
        "id": "4.1.9.6 Khoanh nộp thừa",
        "parent_id": "4.1.9 Điều chỉnh dữ liệu",
        "is_folder": 0
    }, {
        "id": "4.1.10 Cập nhật quyết định xóa nợ hàng loạt",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.11 Tra cứu quyết định xóa nợ hàng loạt",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.12 Chuyển đổi tiểu mục",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.13 Tra cứu giao dịch điều chỉnh nội bộ",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.14.Nhận quyết định từ TTR",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.1.15 Tra cứu|Xác nhận Quyết định có hành vi trốn thuế",
        "parent_id": "4.1 Cập nhật|tra cứu quyết định",
        "is_folder": 0
    }, {
        "id": "4.2 Xử lý thu phạt GLTM",
        "parent_id": "4.Xử lý quyết định",
        "is_folder": 1
    }, {
        "id": "4.2.1 Nhập xử lý phạt gian lận thương mại",
        "parent_id": "4.2 Xử lý thu phạt GLTM",
        "is_folder": 0
    }, {
        "id": "4.2.2 Tra cứu xử lý phạt gian lận T.Mại",
        "parent_id": "4.2 Xử lý thu phạt GLTM",
        "is_folder": 0
    }, {
        "id": "4.2.3 Hủy xử lý phạt gian lận thương mại",
        "parent_id": "4.2 Xử lý thu phạt GLTM",
        "is_folder": 0
    }, {
        "id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "parent_id": "4.Xử lý quyết định",
        "is_folder": 1
    }, {
        "id": "4.3.1 Nhập QĐ cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "parent_id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "is_folder": 0
    }, {
        "id": "4.3.2 Tra cứu QĐ cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "parent_id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "is_folder": 0
    }, {
        "id": "4.3.3 Tra cứu thông báo nộp tiền các khoản thu về tiền cấp quyền",
        "parent_id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "is_folder": 0
    }, {
        "id": "4.3.4 Nhập điểm tài nguyên khoáng sản",
        "parent_id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "is_folder": 0
    }, {
        "id": "4.3.5 Tra cứu danh mục điểm mỏ khoáng sản",
        "parent_id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "is_folder": 0
    }, {
        "id": "4.3.9 In báo cáo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "parent_id": "4.3 Thông báo cấp quyền khai thác khoáng sản|tài nguyên nước|khu vực biển",
        "is_folder": 0
    }, {
        "id": "4.4 Xử lý biên bản xử phạt VPHC điện tử",
        "parent_id": "4.Xử lý quyết định",
        "is_folder": 1
    }, {
        "id": "4.4.1 Tra cứu biên bản xử phạt VPHC điện tử",
        "parent_id": "4.4 Xử lý biên bản xử phạt VPHC điện tử",
        "is_folder": 0
    }, {
        "id": "4.4.2 Tra cứu biên bản xử phạt VPHC điện tử phải xử lý cấp lãnh đạo",
        "parent_id": "4.4 Xử lý biên bản xử phạt VPHC điện tử",
        "is_folder": 0
    }, {
        "id": "4.4.4 Danh sách tờ khai chậm nộp chưa lập biên bản",
        "parent_id": "4.4 Xử lý biên bản xử phạt VPHC điện tử",
        "is_folder": 0
    }, {
        "id": "4.4.3 Danh sách tờ khai đã lập biên bản xử phạt VPHC điện tử",
        "parent_id": "4.4 Xử lý biên bản xử phạt VPHC điện tử",
        "is_folder": 0
    }, {
        "id": "4.9 Báo cáo",
        "parent_id": "4.Xử lý quyết định",
        "is_folder": 1
    }, {
        "id": "4.9.1 Danh sách quyết định truy thu",
        "parent_id": "4.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.Xử lý miễn giảm thuế",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "5.1 Xử lý miễn giảm cho 1 NNT",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 1
    }, {
        "id": "5.1.1 Xử lý miễn giảm thuế cho 1 NNT",
        "parent_id": "5.1 Xử lý miễn giảm cho 1 NNT",
        "is_folder": 0
    }, {
        "id": "5.1.2 Phê duyệt hồ sơ miễn giảm",
        "parent_id": "5.1 Xử lý miễn giảm cho 1 NNT",
        "is_folder": 0
    }, {
        "id": "5.1 Xử lý miễn giảm cho 1 NNT",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.2 Nhập quyết định miễn giảm theo danh sách",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.3 Tra cứu quyết định miễn giảm",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.4 DS NNT có tổng số thuế PN của tất cả các thửa đất trên phạm vi 1 tỉnh|TP",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.5 Nhập hồ sơ miễn thuế TNCN cho Chuyên gia nước ngoài",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.6 Tra cứu hồ sơ miễn thuế TNCN cho Chuyên gia nước ngoài",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.7 Tra cứu danh sách miễn thuế TNCN cho chuyên gia nước ngoài",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.8 Cập nhật danh sách nhân viên Việt Nam được miễn thuế TNCN",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 0
    }, {
        "id": "5.9 Báo cáo",
        "parent_id": "5.Xử lý miễn giảm thuế",
        "is_folder": 1
    }, {
        "id": "5.9.1 Báo cáo tổng hợp kết quả miễn thuế, giảm thuế (06|QTr-MG)",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.9.2 Sổ theo dõi tình hình miễn thuế, giảm thuế (07|QTr-MG)",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.9.3 Sổ theo dõi miễn giảm PNN",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.9.4 Báo cáo tổng hợp miễn giảm",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.9.5 BC tình hình thực hiện giảm tiền thuê đất theo QĐ27",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.9.6 BC tình hình thực hiện theo QĐ số 01|2023|QĐ-TTg",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "5.9.7 BC tình hình thực hiện theo QĐ số 25|2023|QĐ-TTg",
        "parent_id": "5.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "6.Xử lý hoàn thuế",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "6.1 Nhập hồ sơ xử lý hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.2 Tra cứu hồ sơ| Quyết định hoàn",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.3 Phân chia khoản chưa bù trừ",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.4 Nhập QĐ hoàn - Nhiều NNT",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.5 Kết xuất thông tin chi tiết hồ sơ hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.6 Hạch toán Báo Nợ do phân bổ hoàn thuế từ CQT trụ sở chính",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.7 Các chức năng xử lý hoàn thuế đã hết hiệu lực",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.7.1 Tra cứu Đề nghị hoàn thuế| Hạch toán số phải hoàn",
        "parent_id": "6.7 Các chức năng xử lý hoàn thuế đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "6.7.2 Tra cứu lệnh hoàn (trước thông tư 28)",
        "parent_id": "6.7 Các chức năng xử lý hoàn thuế đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "6.7.3 Bảng kê quyết định hoàn kiêm bù trừ",
        "parent_id": "6.7 Các chức năng xử lý hoàn thuế đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "6.7.4 Danh sách lệnh hoàng KBNN",
        "parent_id": "6.7 Các chức năng xử lý hoàn thuế đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "6.7.5 Danh sách theo dõi xử lý hoàn thuế",
        "parent_id": "6.7 Các chức năng xử lý hoàn thuế đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "6.8 Tra cứu thông tin xét hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.8.1 Tra cứu thông tin tổng quan cho một NNT",
        "parent_id": "6.8 Tra cứu thông tin xét hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.8.2 Tra cứu tiền thuế nợ cho một NNT",
        "parent_id": "6.8 Tra cứu thông tin xét hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.9 Nhập lệnh hoàn sau chuyển đổi",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.10 Giám sát hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.10.1 Tra cứu kiểm soát hoàn thuế",
        "parent_id": "6.10 Giám sát hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.10.2 Cập nhật kết quả kiểm soát hoàn thuế",
        "parent_id": "6.10 Giám sát hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.10.9 Báo cáo giám sát hoàn thuế",
        "parent_id": "6.10 Giám sát hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.10.9.1 Kết xuất kết quả kiểm soát hoàn thuế",
        "parent_id": "6.10.9 Báo cáo giám sát hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.10.9.2 In thông báo kết quả giám sát hoàn thuế",
        "parent_id": "6.10.9 Báo cáo giám sát hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.10.9.4 Báo cáo chi tiết kết quả giám sát hoàn thuế",
        "parent_id": "6.10.9 Báo cáo giám sát hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.11 Hoàn thuế cho người nước ngoài",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.11.2 Tra cứu kết quả đăng ký|in QD chấm dứt HĐ bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế cho người nước ngoài",
        "is_folder": 0
    }, {
        "id": "6.11.5 Báo cáo tổng hợp kết quả hoàn thuế cho khách NN (Mẫu 01|QTr–HTNN)",
        "parent_id": "6.11 Hoàn thuế cho người nước ngoài",
        "is_folder": 0
    }, {
        "id": "6.11 Hoàn thuế cho người nước ngoài (hết hiệu lực)",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.11.1 Đăng ký bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế cho người nước ngoài",
        "is_folder": 0
    }, {
        "id": "6.11.3 Nhập dữ liệu hoàn thuế GTGT từ Hải quan, cửa khẩu",
        "parent_id": "6.11 Hoàn thuế cho người nước ngoài",
        "is_folder": 0
    }, {
        "id": "6.11.4 Nhập DS thống kê báo cáo định kỳ hàng Quý về bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế cho người nước ngoài",
        "is_folder": 0
    }, {
        "id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.11.1 Xử lý hồ sơ đăng ký|điều chỉnh|chấm dứt bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "is_folder": 0
    }, {
        "id": "6.11.2 Tra cứu hồ sơ đăng ký|điều chỉnh|chấm dứt bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "is_folder": 0
    }, {
        "id": "6.11.3 Danh sách địa điểm bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "is_folder": 0
    }, {
        "id": "6.11.4 Danh sách doanh nghiệp bán hàng hoàn thuế GTGT",
        "parent_id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "is_folder": 0
    }, {
        "id": "6.11.5 Tra cứu thông tin hóa đơn GTGT kiêm tờ khai hoàn thuế",
        "parent_id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "is_folder": 0
    }, {
        "id": "6.11.6 Nhận file DSDN được công nhận hàng bán hàng hoàn thuế GTGT trước nâng cấp",
        "parent_id": "6.11 Hoàn thuế GTGT cho người xuất cảnh",
        "is_folder": 0
    }, {
        "id": "6.12 Báo cáo hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.12.1 Sổ theo dõi tình hình giải quyết hồ sơ hoàn thuế (09AQTr-HT)",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.12.2 Báo cáo tổng hợp kết quả hoàn thuế (10AQTr-HT)",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.12.3 Báo cáo kết quả phân loại hoàn thuế (10BQTr-HT)",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.12.4 Báo cáo hoàn thuế",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.12.5 Danh sách thống kê hồ sơ hoàn KĐT theo từng nghiệp vụ trình ký",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.12.6 Danh sách thống kê hồ sơ hoàn KĐT theo từng hồ sơ hoàn",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.12.7 Bao cáo phân loại hoàn",
        "parent_id": "6.12 Báo cáo hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.14 Phê duyệt quyết định hoàn",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.15 Điều chỉnh hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.15.1 Điều chỉnh giao dịch lệnh hoàn",
        "parent_id": "6.15 Điều chỉnh hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.15.2 Điều chỉnh báo cáo hoàn thuế",
        "parent_id": "6.15 Điều chỉnh hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.15.3 Tra cứu giao dịch điều chỉnh báo cáo hoàn thuế",
        "parent_id": "6.15 Điều chỉnh hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.15.4 Điều chỉnh lệnh hoàn",
        "parent_id": "6.15 Điều chỉnh hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.15.5 Tra cứu|hạch toán phiếu điều chỉnh lệnh",
        "parent_id": "6.15 Điều chỉnh hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.18 Xử lý chứng từ hoàn",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.19 Danh sách VB ĐNHT|Hồ sơ ĐN hủy hồ sơ ĐNHT nhận vào TMS không thành công",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.20 Phê duyệt hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.21 Danh sách hồ sơ cán bộ cần xử lý",
        "parent_id": "6.20 Phê duyệt hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.22 Lãnh đạo bộ phận xem xét, phê duyệt",
        "parent_id": "6.20 Phê duyệt hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.23 Lãnh đạo cơ quan thuế xem xét, phê duyệt",
        "parent_id": "6.20 Phê duyệt hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.21 Chuyển luồng hồ sơ hoàn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.21.1 Chức năng trình phê duyệt chuyển luồng thủ công",
        "parent_id": "6.21 Chuyển luồng hồ sơ hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.21.2 Chức năng Tra cứu|Hủy trình|Phê duyệt|Từ chối chuyển luồng thủ công",
        "parent_id": "6.21 Chuyển luồng hồ sơ hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.22 Nhập|Tra cứu hồ sơ hoàn thuế có HV khai sai hoặc HV trốn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.23 Tra cứu, xác nhận quyết định có hành vi trốn thuế",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 0
    }, {
        "id": "6.24 Dữ liệu HSH chưa nhận|nhận vào TMS hỗ trợ phân loại tiêu chí hoàn lần đầu",
        "parent_id": "6.Xử lý hoàn thuế",
        "is_folder": 1
    }, {
        "id": "6.24.1 Nhập|nhận dữ liệu HSH không có trên TMS",
        "parent_id": "6.24 Dữ liệu HSH chưa nhận|nhận vào TMS hỗ trợ phân loại tiêu chí hoàn lần đầu",
        "is_folder": 0
    }, {
        "id": "6.24.2 Tra cứu dữ liệu HSH không có trên TMS",
        "parent_id": "6.24 Dữ liệu HSH chưa nhận|nhận vào TMS hỗ trợ phân loại tiêu chí hoàn lần đầu",
        "is_folder": 0
    }, {
        "id": "7.Xử lý qua ủy nhiệm thu",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "7.1 Đăng ký ủy nhiệm thu",
        "parent_id": "7.Xử lý qua ủy nhiệm thu",
        "is_folder": 0
    }, {
        "id": "7.2 Lập bảng kê số phải nộp giao UNT",
        "parent_id": "7.Xử lý qua ủy nhiệm thu",
        "is_folder": 0
    }, {
        "id": "7.3 Phê duyệt bảng kê số phải nộp giao UNT",
        "parent_id": "7.Xử lý qua ủy nhiệm thu",
        "is_folder": 0
    }, {
        "id": "7.4 Nhận file bảng kê biên lai từ UNT",
        "parent_id": "7.Xử lý qua ủy nhiệm thu",
        "is_folder": 0
    }, {
        "id": "7.5 Kiểm soát dữ liệu bảng kê biên lai nhận từ file",
        "parent_id": "7.Xử lý qua ủy nhiệm thu",
        "is_folder": 0
    }, {
        "id": "7.6 Hạch toán biên lai UNT cho NNT",
        "parent_id": "7.Xử lý qua ủy nhiệm thu",
        "is_folder": 0
    }, {
        "id": "8.Kế toán thuế",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "8.1 Xử lý chứng từ",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.1.1 Nhập|Hạch toán|Tra cứu|Xử lý CT thiếu thông tin cho 1 lô",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.2 Xử lý chứng từ thiếu thông tin cho nhiều lô",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.3 Xử lý bù trừ thủ công",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.5 Hủy bù trừ",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.6 In GNT vào NSNN chuyển đổi từ chứng từ điện tử",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.7 In giấy nộp tiền|Bảng kê nộp thuế",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.8 Bù trừ một người nộp thuế",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.9 In giấy đề nghị xác nhận số thuế đã nộp NSNN",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.1.11 Tra cứu|xử lý chứng từ phân bổ",
        "parent_id": "8.1 Xử lý chứng từ",
        "is_folder": 0
    }, {
        "id": "8.2 Chuyển nghĩa vụ thuế",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.2.1 Nhập thông báo chuyển nghĩa vụ thuế",
        "parent_id": "8.2 Chuyển nghĩa vụ thuế",
        "is_folder": 0
    }, {
        "id": "8.2.2 Tra cứu| nhận thông báo CNV thuế",
        "parent_id": "8.2 Chuyển nghĩa vụ thuế",
        "is_folder": 0
    }, {
        "id": "8.2.3 Báo cáo tình hình nộp thuế",
        "parent_id": "8.2 Chuyển nghĩa vụ thuế",
        "is_folder": 0
    }, {
        "id": "8.3 Kế toán sổ cái",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.3.1 Bảng cân đối tài khoản (một kỳ)",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.2 Bảng cân đối tài khoản (nhiều kỳ)",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.3 Danh sách giao dịch sổ chi tiết",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.4 Kết chuyển cuối kỳ số dư tài khoản 716 và 719",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.5 Sổ chi tiết tài khoản (phục vụ Q.Lý)",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.6 Tra cứu giao dịch sổ cái",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.7 Hạch toán dữ liệu lên sổ cái",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.8 Đóng tệp dữ liệu trước khi chuyển sổ cái",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.9 Tạo mã tệp dữ liệu",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.3.10 Tra cứu tệp dữ liệu sổ cái",
        "parent_id": "8.3 Kế toán sổ cái",
        "is_folder": 0
    }, {
        "id": "8.4 Khóa sổ kế toán",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.4.1 Kiểm tra trạng thái chuyển sổ tệp DL",
        "parent_id": "8.4 Khóa sổ kế toán",
        "is_folder": 0
    }, {
        "id": "8.4.2 Kết chuyển số dư cuối năm",
        "parent_id": "8.4 Khóa sổ kế toán",
        "is_folder": 0
    }, {
        "id": "8.4.3 Khoá sổ kế toán",
        "parent_id": "8.4 Khóa sổ kế toán",
        "is_folder": 0
    }, {
        "id": "8.5 Sổ thuế",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.5.1 In| Kết xuất sổ thuế (PIT)",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.2 Sổ thu nộp",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.3 In sổ thu nộp PNN",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.4 In thông báo số đã nộp",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.5 Sổ thu nộp dành cho NNT là DNL",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.6 Sổ nhật ký giao dịch (S2|KTT)",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.7 Tổng hợp sổ thuế 1 NNT",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.5.8 Sổ theo dõi tài khoản (S3|KTT)",
        "parent_id": "8.5 Sổ thuế",
        "is_folder": 0
    }, {
        "id": "8.6 Trao đổi thông tin",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.6.2 Xử lý chứng từ điện tử",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.3 In bảng kê chứng từ nộp ngân sách nhà nước",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.4 Xử lý biên lai",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 1
    }, {
        "id": "8.6.4.1 Nhận file biên lai excel CQT|UNT",
        "parent_id": "8.6.4 Xử lý biên lai",
        "is_folder": 0
    }, {
        "id": "8.6.4.2 Nhận biên lai PNN qua file",
        "parent_id": "8.6.4 Xử lý biên lai",
        "is_folder": 0
    }, {
        "id": "8.6.4.3 Xử lý biên lai Thu",
        "parent_id": "8.6.4 Xử lý biên lai",
        "is_folder": 0
    }, {
        "id": "8.6.4.4 Tra cứu số đã thu theo BL",
        "parent_id": "8.6.4 Xử lý biên lai",
        "is_folder": 0
    }, {
        "id": "8.6.4.5 Bảng kê BL nhận từ chương trình UNT",
        "parent_id": "8.6.4 Xử lý biên lai",
        "is_folder": 0
    }, {
        "id": "8.6.5 Tra cứu dữ liệu ID khoản nộp",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 1
    }, {
        "id": "8.6.5.1 Tra cứu chứng từ gom nhóm từ Etax|ICANHAN",
        "parent_id": "8.6.5 Tra cứu dữ liệu ID khoản nộp",
        "is_folder": 0
    }, {
        "id": "8.6.5.2 Tra cứu dữ liệu sổ thuế tổng hợp sang DATAHUB",
        "parent_id": "8.6.5 Tra cứu dữ liệu ID khoản nộp",
        "is_folder": 0
    }, {
        "id": "8.6.7 Kết chuyển lệnh hoàn",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.11 Kết xuất số thuế phải nộp sang GIP",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.12 Nhật ký nhận bảng kê chứng từ qua trục truyền tin",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.13 Đối soát chứng từ với bảng kê Kho bạc",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.14 Tra cứu danh sách chứng từ sai thông tin",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.15 Tra cứu|Gửi chứng từ điều chỉnh",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.6.16 Tra cứu|Gửi thông tin tra soát",
        "parent_id": "8.6 Trao đổi thông tin",
        "is_folder": 0
    }, {
        "id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.7.1 Kết xuất template| Nhận báo cáo CCTT tài chính",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.7.2 Cập nhật| Gửi phê duyệt BC CCTT tài chính",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.7.3 Phê duyệt báo cáo CCTT tài chính",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.7.4 Kết xuất báo cáo C01|CCTT",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.7.5 Tra cứu báo cáo CCTT tài chính",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.7.6 Kết xuất danh sách 01|DSDL",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.7.7 Kết xuất danh sách 02|DSDL",
        "parent_id": "8.7 Báo cáo cung cấp thông tin tài chính",
        "is_folder": 0
    }, {
        "id": "8.9 Báo cáo",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "parent_id": "8.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "8.9.1.1 Danh sách chứng từ hạch toán từ sổ chi tiết lên sổ cái",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.2 Danh sách giao dịch sổ chi tiết",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.3 Danh sách GNT từ 921 vào NSNN",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.4 Danh sách chứng từ",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.5 Danh sách NNT nộp bằng lệnh thu",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.6 Sổ kế toán chi tiết",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.7  Báo cáo số thu BC4",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.8 Báo cáo tổng hợp BC5",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.9 Báo cáo hoàn thuế BC7",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.10 Nhập số tồn cho các báo cáo (BC4 BC5, BC7)",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.11 Nhận file báo cáo đầu nhập tồn",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.12 Tra cứu danh sách giao dịch báo cáo kế toán",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.1.13 Tra cứu chứng từ nộp tại CQT phân bổ",
        "parent_id": "8.9.1 Báo cáo giao dịch sổ chi tiết",
        "is_folder": 0
    }, {
        "id": "8.9.2 Báo cáo kế toán thuế",
        "parent_id": "8.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "8.9.2.1 Báo cáo Tổng hợp thu nội địa (BC3A)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.2 Báo cáo Quyết toán NSNN năm (BC3B)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.3 Bảng đối chiếu số liệu với KBNN (BC10)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.4 Bảng đối chiếu số nộp kho bạc theo quyết toán NSNN (BC10-QT)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.5 Báo cáo kế toán",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.6 In bảng đối chiếu số nộp kho bạc",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.7 In báo cáo BC2BCT",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.8 In báo cáo nhanh BC2",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.9 Nhật ký chứng từ ghi sổ (mẫu S01|KTT)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.10 Sổ cái tài khoản hợp nhất (S03|KTT)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.11 Nhập báo cáo",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.12 Nhập số tồn cho báo cáo (BC2, BC3)",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.2.13 Nhập tồn báo cáo tháng 12|2014",
        "parent_id": "8.9.2 Báo cáo kế toán thuế",
        "is_folder": 0
    }, {
        "id": "8.9.3 Báo cáo kế toán tổng hợp",
        "parent_id": "8.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "8.9.3.1 Danh sách chứng từ hạch toán từ sổ chi tiết lên sổ cái",
        "parent_id": "8.9.3 Báo cáo kế toán tổng hợp",
        "is_folder": 0
    }, {
        "id": "8.9.3.2 Nhật ký giao dịch sổ cái",
        "parent_id": "8.9.3 Báo cáo kế toán tổng hợp",
        "is_folder": 0
    }, {
        "id": "8.9.3.3 Sổ cái",
        "parent_id": "8.9.3 Báo cáo kế toán tổng hợp",
        "is_folder": 0
    }, {
        "id": "8.9.3.4 Bảng cân đối tài khoản",
        "parent_id": "8.9.3 Báo cáo kế toán tổng hợp",
        "is_folder": 0
    }, {
        "id": "8.9.4 Báo cáo kiểm toán, thanh tra",
        "parent_id": "8.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "8.9.4.1 Báo cáo kiến nghị tăng thu NSNN của kiểm toán, thanh tra",
        "parent_id": "8.9.4 Báo cáo kiểm toán, thanh tra",
        "is_folder": 0
    }, {
        "id": "8.9.5 Báo cáo kiểm soát dữ liệu",
        "parent_id": "8.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "8.10 Đề nghị tra soát",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.10.1 Nhập đề nghị tra soát",
        "parent_id": "8.10 Đề nghị tra soát",
        "is_folder": 0
    }, {
        "id": "8.10.2 Tra cứu|Xử lý đề nghị tra soát",
        "parent_id": "8.10 Đề nghị tra soát",
        "is_folder": 0
    }, {
        "id": "8.11 Đề nghị xác nhận",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.11.1 Nhập đề nghị xác nhận",
        "parent_id": "8.11 Đề nghị xác nhận",
        "is_folder": 0
    }, {
        "id": "8.11.2 Tra cứu|xử lý đề nghị xác nhận",
        "parent_id": "8.11 Đề nghị xác nhận",
        "is_folder": 0
    }, {
        "id": "8.12 Đề nghị bù trừ ngân sách",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.12.1 Nhập đề nghị bù trừ ngân sách",
        "parent_id": "8.12 Đề nghị bù trừ ngân sách",
        "is_folder": 0
    }, {
        "id": "8.12.2 Tra cứu|Xử lý dề nghị bù trừ ngân sách",
        "parent_id": "8.12 Đề nghị bù trừ ngân sách",
        "is_folder": 0
    }, {
        "id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.13.1 Lập báo cáo kế toán theo TT 111",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.1.1 Lập báo cáo 01|BC-KTT",
        "parent_id": "8.13.1 Lập báo cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.1.2 Lập báo cáo 02|BC-KTT",
        "parent_id": "8.13.1 Lập báo cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.1.3 Lập báo cáo 03|BC-KTT",
        "parent_id": "8.13.1 Lập báo cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.1.4 Lập báo cáo 04|BC-KTT - Chi tiết",
        "parent_id": "8.13.1 Lập báo cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.2 Tra cứu cáo kế toán theo TT 111",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.2.1 Tra cứu kết quả tổng hợp báo cáo",
        "parent_id": "8.13.2 Tra cứu cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.2.2 In báo cáo 04|BC-KTT - Tổng hợp",
        "parent_id": "8.13.2 Tra cứu cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.2.3 Báo cáo thuyết minh khoanh nợ 2022",
        "parent_id": "8.13.2 Tra cứu cáo kế toán theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.3 Phê duyệt báo cáo kế toán thuế theo TT 111",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.3.1 DS Công việc xử lý của Kế toán trưởng",
        "parent_id": "8.13.3 Phê duyệt báo cáo kế toán thuế theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.3.2 DS Công việc xử lý của Lãnh đạo đơn vị",
        "parent_id": "8.13.3 Phê duyệt báo cáo kế toán thuế theo TT 111",
        "is_folder": 0
    }, {
        "id": "8.13.4 Nhận, tra cứu dữ liệu báo cáo từ file excel",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.4.1 Tra cứu kết quả nhận file LPTB",
        "parent_id": "8.13.4 Nhận, tra cứu dữ liệu báo cáo từ file excel",
        "is_folder": 0
    }, {
        "id": "8.13.5 Lập sổ kế toán TT111",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.5.1 Lập sổ kế toán TT111",
        "parent_id": "8.13.5 Lập sổ kế toán TT111",
        "is_folder": 0
    }, {
        "id": "8.13.6 Tra cứu dữ liệu trung gian BCKT TT111",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.6.1 Tra cứu giao dịch sổ cái",
        "parent_id": "8.13.6 Tra cứu dữ liệu trung gian BCKT TT111",
        "is_folder": 0
    }, {
        "id": "8.13.6.2 Tra cứu số dư đầu kỳ 2022",
        "parent_id": "8.13.6 Tra cứu dữ liệu trung gian BCKT TT111",
        "is_folder": 0
    }, {
        "id": "8.13.7 Quản lý bộ điều kiện không tổng hợp BC CCTTCC (04BC2, 04BC3)",
        "parent_id": "8.13 Sổ, Báo cáo thông tư kế toán thuế thu nội địa 111",
        "is_folder": 1
    }, {
        "id": "8.13.7.1 Khai báo điều kiện không tổng hợp BC CCTTTC",
        "parent_id": "8.13.7 Quản lý bộ điều kiện không tổng hợp BC CCTTCC (04BC2, 04BC3)",
        "is_folder": 0
    }, {
        "id": "8.13.7.2 Tra cứu điều kiện không tổng hợp BC CCTTTC",
        "parent_id": "8.13.7 Quản lý bộ điều kiện không tổng hợp BC CCTTCC (04BC2, 04BC3)",
        "is_folder": 0
    }, {
        "id": "8.14 Xử lý không hoàn trả nộp thừa",
        "parent_id": "8.Kế toán thuế",
        "is_folder": 1
    }, {
        "id": "8.14.1 Xử lý VB từ chối nhận lại số tiền NT",
        "parent_id": "8.14 Xử lý không hoàn trả nộp thừa",
        "is_folder": 1
    }, {
        "id": "8.14.1.1 Nhập VB từ chối nhận lại số tiền NT",
        "parent_id": "8.14.1 Xử lý VB từ chối nhận lại số tiền NT",
        "is_folder": 0
    }, {
        "id": "8.14.1.2 Tra cứu VB từ chối nhận lại số tiền NT",
        "parent_id": "8.14.1 Xử lý VB từ chối nhận lại số tiền NT",
        "is_folder": 0
    }, {
        "id": "8.14.2 Xử lý dữ liệu nộp thừa của NNT không hoạt động tại địa chỉ đã đăng ký",
        "parent_id": "8.14 Xử lý không hoàn trả nộp thừa",
        "is_folder": 1
    }, {
        "id": "8.14.2.1 Danh sách khoản nộp thừa của NNT trạng thái 06",
        "parent_id": "8.14.2 Xử lý dữ liệu nộp thừa của NNT không hoạt động tại địa chỉ đã đăng ký",
        "is_folder": 0
    }, {
        "id": "8.14.3 Xử lý dữ liệu nộp thừa quá thời hạn 10 năm",
        "parent_id": "8.14 Xử lý không hoàn trả nộp thừa",
        "is_folder": 1
    }, {
        "id": "8.14.3.1 Danh sách khoản nộp thừa quá thời hạn 10 năm",
        "parent_id": "8.14.3 Xử lý dữ liệu nộp thừa quá thời hạn 10 năm",
        "is_folder": 0
    }, {
        "id": "9.Quản lý nợ",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "9.1 Quản lý nợ",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.1.1 Cập nhật thông tin gia hạn",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.2 Phân loại nợ cho nhiều NNT",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.3 Tính phạt chậm nộp khi thực hiện tất toán",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.4 In thông báo trách nhiệm hoàn thành nghĩa vụ thuế",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.5 Hủy tiền chậm nộp",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.7 Tra cứu tiền chậm nộp",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.8 Hỗ trợ tính lại tiền chậm nộp của NNT",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.9 Điều chỉnh tiền chậm nộp 01 ngày",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.1.10 Tra cứu phân loại tính chất nợ của NNT trong tháng",
        "parent_id": "9.1 Quản lý nợ",
        "is_folder": 0
    }, {
        "id": "9.2 Quản lý các trường hợp nợ khó thu",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.2.1 Xem thông tin thay đổi trạng thái NNT",
        "parent_id": "9.2 Quản lý các trường hợp nợ khó thu",
        "is_folder": 0
    }, {
        "id": "9.2.3 Quản lý các trường hợp nợ khó thu",
        "parent_id": "9.2 Quản lý các trường hợp nợ khó thu",
        "is_folder": 0
    }, {
        "id": "9.3 Phân công công việc của cán bộ",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.3.1 Phân công lại công việc in thông báo nợ",
        "parent_id": "9.3 Phân công công việc của cán bộ",
        "is_folder": 0
    }, {
        "id": "9.3.2 Phân công lại công việc gọi điện thoại, làm việc với NN",
        "parent_id": "9.3 Phân công công việc của cán bộ",
        "is_folder": 0
    }, {
        "id": "9.3.3 Phân công xử lý các khoản nợ khó thu",
        "parent_id": "9.3 Phân công công việc của cán bộ",
        "is_folder": 0
    }, {
        "id": "9.3.4 Danh sách các công việc cần thực hiện của cán bộ thu nợ",
        "parent_id": "9.3 Phân công công việc của cán bộ",
        "is_folder": 0
    }, {
        "id": "9.3.5 Quản lý DS chức năng và tiêu chí",
        "parent_id": "9.3 Phân công công việc của cán bộ",
        "is_folder": 0
    }, {
        "id": "9.3.6 Phân công cán bộ quản lý nợ",
        "parent_id": "9.3 Phân công công việc của cán bộ",
        "is_folder": 0
    }, {
        "id": "9.4 Cưỡng chế nợ thuế",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.4.1 Quyết định cưỡng chế đã ban hành ngoài hệ thống",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 1
    }, {
        "id": "9.4.1.1 Nhập quyết định cưỡng chế đã ban hành ngoài hệ thống",
        "parent_id": "9.4.1 Quyết định cưỡng chế đã ban hành ngoài hệ thống",
        "is_folder": 0
    }, {
        "id": "9.4.1.2 Tra cứu quyết định cưỡng chế đã ban hành ngoài hệ thống",
        "parent_id": "9.4.1 Quyết định cưỡng chế đã ban hành ngoài hệ thống",
        "is_folder": 0
    }, {
        "id": "9.4.2 Xác minh thông tin",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 1
    }, {
        "id": "9.4.2.1 Nhập thông tin xác minh",
        "parent_id": "9.4.2 Xác minh thông tin",
        "is_folder": 0
    }, {
        "id": "9.4.2.2 Tra cứu thông tin xác minh",
        "parent_id": "9.4.2 Xác minh thông tin",
        "is_folder": 0
    }, {
        "id": "9.4.3 Xác định biện pháp cưỡng chế cho khoản nợ (Gán biện pháp CC)",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.4 Tạo QĐ cưỡng chế",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 1
    }, {
        "id": "9.4.4.1 Tạo QĐ cưỡng chế 1 NNT",
        "parent_id": "9.4.4 Tạo QĐ cưỡng chế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.4.2 Tạo QĐCC nhiều NNT bằng biện pháp Trích tiền|phong tỏa TK",
        "parent_id": "9.4.4 Tạo QĐ cưỡng chế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.4.3 Tạo QĐCC nhiều NNT bằng biện pháp Ngừng sử dụng hóa đơn",
        "parent_id": "9.4.4 Tạo QĐ cưỡng chế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.5 Ban hành quyết định cưỡng chế",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.6 In thông báo hóa đơn tiếp tục có giá trị sử dụng",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.7 Tra cứu lịch sử gán BPCC",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.8 Tra cứu nhật ký các biện pháp cưỡng chế",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.9 Báo cáo cưỡng chế nợ thuế",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 1
    }, {
        "id": "9.4.9.3 Báo cáo thống kê QĐ cưỡng chế thi hành quyết định hành chính thuế",
        "parent_id": "9.4.9 Báo cáo cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.9.5  DS NNT phải áp dụng cưỡng chế tài khảon",
        "parent_id": "9.4.9 Báo cáo cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.9.6 Báo cáo tình hình ban hành các biện pháp cưỡng chế",
        "parent_id": "9.4.9 Báo cáo cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.10 Lập lệnh thu ngân sách nhà nước",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.11 Nhập|Tra cứu quyết định chấm dứt cưỡng chế",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.12 Nhập|Tra cứu VB đề nghị khôi phục tình trạng pháp lý của DN (Mẫu 07-1|CC)",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.13 Nhập|Tra cứu quyết định về việc giao quyền (mẫu 09|CC)",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.4.14 VBĐN cưỡng chế bằng BP dừng làm thủ tục HQ",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 1
    }, {
        "id": "9.4.14.1 Lập VBĐN cưỡng chế bằng BP dừng làm thủ tục HQ",
        "parent_id": "9.4.14 VBĐN cưỡng chế bằng BP dừng làm thủ tục HQ",
        "is_folder": 0
    }, {
        "id": "9.4.14.2 Tra cứu|Xử lýVBĐN cưỡng chế bằng BP dừng làm thủ tục HQ",
        "parent_id": "9.4.14 VBĐN cưỡng chế bằng BP dừng làm thủ tục HQ",
        "is_folder": 0
    }, {
        "id": "9.4.16 Danh sách cưỡng chế",
        "parent_id": "9.4 Cưỡng chế nợ thuế",
        "is_folder": 1
    }, {
        "id": "9.4.16.1 Lập danh sách cưỡng chế",
        "parent_id": "9.4.16 Danh sách cưỡng chế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.16.2 In danh sách cưỡng chế",
        "parent_id": "9.4.16 Danh sách cưỡng chế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.4.16.3 Phê duyệt danh sách phải cưỡng chế nợ thuế",
        "parent_id": "9.4.16 Danh sách cưỡng chế",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "9.5 Công khai nợ thuế",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.5.1 Tra cứu|lập danh sách NNT nợ thuế để công khai",
        "parent_id": "9.5 Công khai nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.5.2 Duyệt danh sách NNT nợ thuế để công khai",
        "parent_id": "9.5 Công khai nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.5.3 Phê duyệt|Công khai các danh sách quản lý nợ và cưỡng chế nợ thuế ra website",
        "parent_id": "9.5 Công khai nợ thuế",
        "is_folder": 0
    }, {
        "id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.6.1 Khoanh nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.1.1 Nhập quyết định khoanh nợ",
        "parent_id": "9.6.1 Khoanh nợ",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.54",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.54_Khoan_XoaNo_ThuHoiHoan"
        }]
    }, {
        "id": "8.6.1.2 Tra cứu quyết định khoanh nợ",
        "parent_id": "9.6.1 Khoanh nợ",
        "is_folder": 0
    }, {
        "id": "9.6.2 Xóa nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.2.1 Nhập quyết định xóa nợ",
        "parent_id": "9.6.2 Xóa nợ",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.54",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.54_Khoan_XoaNo_ThuHoiHoan"
        }]
    }, {
        "id": "8.6.2.2 Tra cứu quyết định xóa nợ",
        "parent_id": "9.6.2 Xóa nợ",
        "is_folder": 0
    }, {
        "id": "9.6.3 Chấm dứt khoanh nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.3.1 Nhập quyết định chấm dứt khoanh nợ",
        "parent_id": "9.6.3 Chấm dứt khoanh nợ",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.54",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.54_Khoan_XoaNo_ThuHoiHoan"
        }]
    }, {
        "id": "9.6.3.2 Tra cứu quyết định chấm dứt khoanh nợ",
        "parent_id": "9.6.3 Chấm dứt khoanh nợ",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.54",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.54_Khoan_XoaNo_ThuHoiHoan"
        }]
    }, {
        "id": "9.6.4 Gia hạn nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.4.1 Nhập quyết định gia hạn nợ",
        "parent_id": "9.6.4 Gia hạn nợ",
        "is_folder": 0
    }, {
        "id": "9.6.4.2 Tra cứu quyết định gia hạn nợ",
        "parent_id": "9.6.4 Gia hạn nợ",
        "is_folder": 0
    }, {
        "id": "9.6.5 Miễn tiền chậm nộp theo NĐ92",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.5.1 Nhập văn bản đề nghị miễn tiền chậm nộp",
        "parent_id": "9.6.5 Miễn tiền chậm nộp theo NĐ92",
        "is_folder": 0
    }, {
        "id": "9.6.5.2 Tra cứu danh sách NNT hỗ trợ xét miễn TCN NĐ92",
        "parent_id": "9.6.5 Miễn tiền chậm nộp theo NĐ92",
        "is_folder": 0
    }, {
        "id": "9.6.5.3 Tra cứu đề nghị| tạo đề xuất miễn TCN",
        "parent_id": "9.6.5 Miễn tiền chậm nộp theo NĐ92",
        "is_folder": 0
    }, {
        "id": "9.6.5.4 Tra cứu|Xử lý đề xuất|quyết định miễn TCN",
        "parent_id": "9.6.5 Miễn tiền chậm nộp theo NĐ92",
        "is_folder": 0
    }, {
        "id": "9.6.5.5 In kết quả miễn tiền chậm nộp",
        "parent_id": "9.6.5 Miễn tiền chậm nộp theo NĐ92",
        "is_folder": 0
    }, {
        "id": "9.6.6 Nộp dần tiền thuế nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.6.1 Nhập QĐ nộp dần tiền thuế nợ",
        "parent_id": "9.6.6 Nộp dần tiền thuế nợ",
        "is_folder": 0
    }, {
        "id": "9.6.6.2 Tra cứu QĐ nộp dần tiền thuế nợ",
        "parent_id": "9.6.6 Nộp dần tiền thuế nợ",
        "is_folder": 0
    }, {
        "id": "9.6.6.3 In báo cáo quá hạn nộp dần",
        "parent_id": "9.6.6 Nộp dần tiền thuế nợ",
        "is_folder": 0
    }, {
        "id": "9.6.7 Miễn tiền chậm nộp",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.7.1 Nhập quyết định miễn tiền chậm nộp",
        "parent_id": "9.6.7 Miễn tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.7.2 Tra cứu quyết định miễn tiền chậm nộp",
        "parent_id": "9.6.7 Miễn tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.8 Không tính tiền chậm nộp",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.8.1 Tạo mới thông báo không tính tiền chậm nộp",
        "parent_id": "9.6.8 Không tính tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.8.2 Tra cứu QĐ không tính tiền chậm nộp",
        "parent_id": "9.6.8 Không tính tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.8.3 Tra cứu thông báo không tính tiền chậm nộp",
        "parent_id": "9.6.8 Không tính tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.9 Báo cáo xử lý nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.9.1 Báo cáo khoanh nợ theo NQ số: 94|2019|QH14",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 1
    }, {
        "id": "9.6.9.1.1 Báo cáo khoanh nợ chi tiết",
        "parent_id": "9.6.9.1 Báo cáo khoanh nợ theo NQ số: 94|2019|QH14",
        "is_folder": 0
    }, {
        "id": "9.6.9.1.2 Báo cáo khoanh nợ tổng hợp",
        "parent_id": "9.6.9.1 Báo cáo khoanh nợ theo NQ số: 94|2019|QH14",
        "is_folder": 0
    }, {
        "id": "9.6.9.2 Báo cáo xóa nợ theo NQ số: 94|2019|QH14",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 1
    }, {
        "id": "9.6.9.2.1 Báo cáo xóa nợ chi tiết",
        "parent_id": "9.6.9.2 Báo cáo xóa nợ theo NQ số: 94|2019|QH14",
        "is_folder": 0
    }, {
        "id": "9.6.9.2.2 Báo cáo xóa nợ tổng hợp",
        "parent_id": "9.6.9.2 Báo cáo xóa nợ theo NQ số: 94|2019|QH14",
        "is_folder": 0
    }, {
        "id": "9.6.9.5 Báo cáo miễn tiền chậm nộp theo NĐ92|2021",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 1
    }, {
        "id": "9.6.9.5.1 BC tình hình xử lý hồ sơ miễn TCN theo NĐ92",
        "parent_id": "9.6.9.5 Báo cáo miễn tiền chậm nộp theo NĐ92|2021",
        "is_folder": 0
    }, {
        "id": "9.6.9.5.2 BC tổng hợp tình hình miễn tiền TCN theo NĐ92",
        "parent_id": "9.6.9.5 Báo cáo miễn tiền chậm nộp theo NĐ92|2021",
        "is_folder": 0
    }, {
        "id": "9.6.9.5.3 BC chi tiết tình hình miễn TCN theo NĐ92",
        "parent_id": "9.6.9.5 Báo cáo miễn tiền chậm nộp theo NĐ92|2021",
        "is_folder": 0
    }, {
        "id": "9.6.9.6 Báo cáo NNT được xóa nợ tiền thuế, tiền chậm nộp",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 1
    }, {
        "id": "9.6.9.6.1 In danh sách NNT được xóa tiền nộp thuế, tiền thuế nợ",
        "parent_id": "9.6.9.6 Báo cáo NNT được xóa nợ tiền thuế, tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.9.6.2 Lập danh sách được xóa tiền nộp và cấp giấy CNKD mới",
        "parent_id": "9.6.9.6 Báo cáo NNT được xóa nợ tiền thuế, tiền chậm nộp",
        "is_folder": 0
    }, {
        "id": "9.6.9.7 Tra cứu danh sách NNT đang khoanh nợ có chứng từ thanh toán",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 0
    }, {
        "id": "9.6.9.3 Báo cáo chấm dứt khoanh nợ",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 1
    }, {
        "id": "9.6.9.3.1 Báo cáo chấm dứt khoanh nợ chi tiết",
        "parent_id": "9.6.9.3 Báo cáo chấm dứt khoanh nợ",
        "is_folder": 0
    }, {
        "id": "9.6.9.3.2 Báo cáo chấm dứt khoanh nợ tổng hợp",
        "parent_id": "9.6.9.3 Báo cáo chấm dứt khoanh nợ",
        "is_folder": 0
    }, {
        "id": "9.6.9.4 In báo cáo cung cấp thông tin số được khoanh, số thuế được xóa",
        "parent_id": "9.6.9 Báo cáo xử lý nợ",
        "is_folder": 0
    }, {
        "id": "9.6.10 Điều chỉnh khoanh nợ",
        "parent_id": "9.6 Khoanh nợ|Xóa nợ|Gia hạn nợ|Nộp dần tiền thuế nợ|Miễn TCN|không tính TCN",
        "is_folder": 1
    }, {
        "id": "9.6.10.1 Nhập điều chỉnh khoanh nợ",
        "parent_id": "9.6.10 Điều chỉnh khoanh nợ",
        "is_folder": 0
    }, {
        "id": "9.6.10.2 Tra cứu chỉnh khoanh nợ",
        "parent_id": "9.6.10 Điều chỉnh khoanh nợ",
        "is_folder": 0
    }, {
        "id": "9.7 Thông báo tạm hoãn xuất cảnh",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.7.1 Nhập|ban hành thông báo tạm hoãn xuất cảnh",
        "parent_id": "9.7 Thông báo tạm hoãn xuất cảnh",
        "is_folder": 0
    }, {
        "id": "9.7.2 Nhập|ban hành thông báo hủy bỏ tạm hoãn xuất cảnh",
        "parent_id": "9.7 Thông báo tạm hoãn xuất cảnh",
        "is_folder": 0
    }, {
        "id": "9.7.3 Nhập|ban hành thông báo gia hạn tạm hoãn xuất cảnh",
        "parent_id": "9.7 Thông báo tạm hoãn xuất cảnh",
        "is_folder": 0
    }, {
        "id": "9.7.4 Tra cứu thông báo tạm hoãn|gia hạn|hủy bỏ tạm hoãn xuất cảnh",
        "parent_id": "9.7 Thông báo tạm hoãn xuất cảnh",
        "is_folder": 0
    }, {
        "id": "9.7.5 Báo cáo tạm hoãn xuất cảnh",
        "parent_id": "9.7 Thông báo tạm hoãn xuất cảnh",
        "is_folder": 0
    }, {
        "id": "9.9 Báo cáo",
        "parent_id": "9.Quản lý nợ",
        "is_folder": 1
    }, {
        "id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "parent_id": "9.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "9.9.1.1 Báo cáo tổng hợp phân loại tiền thuế nợ theo CQT (Mẫu 01|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.2 Báo cáo phân loại tiền thuế nợ theo sắc thuế và theo LHDN (02|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.3 Báo cáo tổng hợp phân loại tiền thuế nợ theo NNKT (Mẫu 03|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.4 Báo cáo tình hình tiền thuế nợ (Mẫu 05|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 1
    }, {
        "id": "9.9.1.4.1 Nhập danh mục chỉ tiêu thu nợ năm",
        "parent_id": "9.9.1.4 Báo cáo tình hình tiền thuế nợ (Mẫu 05|QLN)",
        "is_folder": 0
    }, {
        "id": "9.9.1.4.2 Nhập báo cáo tình hình tiền thuế nợ",
        "parent_id": "9.9.1.4 Báo cáo tình hình tiền thuế nợ (Mẫu 05|QLN)",
        "is_folder": 0
    }, {
        "id": "9.9.1.4.3 Báo cáo tình hình tiền thuế nợ (Mẫu 05|QLN)",
        "parent_id": "9.9.1.4 Báo cáo tình hình tiền thuế nợ (Mẫu 05|QLN)",
        "is_folder": 0
    }, {
        "id": "9.9.1.5 Tạo lại thông báo 07",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.6 Nhật ký theo dõi thuế nợ của NNT (Mẫu 08|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.7 Sổ tổng hợp theo dõi tiền thuế nợ (Mẫu 09|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.8 Báo cáo tiền thuế chờ điều chỉnh (Mẫu 10|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.9 Báo cáo Phân loại tiền thuế nợ theo người nộp thuế (Mẫu 12|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.10 Báo cáo tổng hợp thông báo 07|QLN đã ban hành trong kỳ (Mẫu 14|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1.11 Danh sách hộ KD nợ tiền thuế, tiền phạt và tiền chậm nộp (Mẫu 15|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ 1401",
        "is_folder": 0
    }, {
        "id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ hiện hành",
        "parent_id": "9.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "9.9.1.7 Sổ tổng hợp theo dõi tiền thuế nợ (Mẫu 09|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ hiện hành",
        "is_folder": 0
    }, {
        "id": "9.9.1.12 Sổ tổng hợp theo dõi tiền thuế nợ dành cho NNT là DNL (Mẫu 09|QLN)",
        "parent_id": "9.9.1 Mẫu báo cáo theo qui trình quản lý nợ hiện hành",
        "is_folder": 0
    }, {
        "id": "9.9.1.5 Tạo lại thông báo 07",
        "parent_id": "9.9 Báo cáo",
        "is_folder": 0
    }, {
        "id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "parent_id": "9.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "9.9.2.1 Danh sách NNT sẽ phải cưỡng chế nợ thuế trong kỳ (Mẫu 01|BCCC)",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.2.2 Tổng hợp danh sách doanh nghiệp nợ thuế (theo CV 3173)",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.2.3  Danh sách quyết định xóa nợ đã hạch toán",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.2.4 Sổ nợ PNN",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.2.5 Sổ theo dõi tiền thuế nợ 1NNT toàn quốc",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.2.6 Sổ theo dõi tiền thuế nợ tổng hợp theo ngày",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.2.7 Báo cáo nợ theo ngày",
        "parent_id": "9.9.2 Mẫu báo cáo theo qui trình khác",
        "is_folder": 0
    }, {
        "id": "9.9.3 Báo cáo đã hết hiệu lực",
        "parent_id": "9.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "9.9.3.1 PIT-Sổ theo dõi tình hình nợ thuế chi tiết theo khoản nợ (đã hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.3.2 In Báo cáo tổng hợp phân loại nợ thuế (đã hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.3.3 Báo cáo tổng hợp TB sẽ áp dụng BP cưỡng chế nợ thuế (11|QLN - hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.3.4 Danh sách NNT có số tiền thuế nợ lớn (13|QLN - đã hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.3.5 Danh sách NNT sẽ phải cưỡng chế nợ thuế (20|QLN - đã hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.3.6 Báo cáo tình hình ban hành thông báo (mẫu 16|QLN - đã hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.3.7 Danh sách NNT sẽ phải cưỡng chế nợ thuế trong kỳ (Mẫu 01|BCCC-hết HL)",
        "parent_id": "9.9.3 Báo cáo đã hết hiệu lực",
        "is_folder": 0
    }, {
        "id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "parent_id": "9.9 Báo cáo",
        "is_folder": 1
    }, {
        "id": "9.9.4.1 BC TH phân loại tiền thuế nợ theo CQT (Mẫu số 01-1|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.2 BC TH phân loại tiền thuế nợ theo sắc thuế, LHKT (Mẫu 01-2|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.3 BC TH phân loại tiền chậm nộp theo sắc thuế (Mẫu số 01-2A|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.4 Báo cáo tiền thuế đang chờ điều chỉnh mẫu lục số 02-1|BC-QLN",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.5 BC TH phân loại tiền thuế nợ theo NNKD (Mẫu số 01-3|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.6 Báo cáo kết quả thu tiền thuế nợ của năm trước (Mẫu số 01-4|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.7 Báo cáo kết quả thu tiền thuế nợ phát sinh (Mẫu 01-4A|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.8 Báo cáo kết quả công khai thông tin NNT tiền thuế nợ(Mẫu 01-5|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.9 BC TH thông báo tiền thuế nợ đã ban hành trong kỳ (Mẫu 01-6|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.10 Danh sách hộ kinh doanh có tiền thuế nợ (Mẫu số 01|HKD-TTN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.11 Báo cáo tiền thuế nợ đã xử lý (Mẫu số 02-2|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.12 Báo cáo kết quả xử lý nợ (Mẫu số 02-3|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.13 Báo cáo kết quả khoanh nợ (Mẫu số 02-4|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.14 Báo cáo kết quả xóa nợ (Mẫu số 02-5|BC-QLN)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.15 Báo cáo phân loại tiền thuế nợ theo người nộp thuế (Mẫu số 01|NNT-BC)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.16 Nhật ký theo dõi tiền nợ thuế của NNT (Mẫu số 02|NNT-BC)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.17 Sổ theo dõi tình hình tiền thuế nợ (Mẫu số 03|NNT-BC)",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "9.9.4.18 Tạo lại thông báo 01|TTN",
        "parent_id": "9.9.4 Báo cáo nợ theo Quy trình 1129",
        "is_folder": 0
    }, {
        "id": "10.Xử lý thông tin giao dịch",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "10.1 Tra cứu thông tin giao dịch",
        "parent_id": "10.Xử lý thông tin giao dịch",
        "is_folder": 1
    }, {
        "id": "10.1.1 Tra cứu giao dịch sổ chi tiết",
        "parent_id": "10.1 Tra cứu thông tin giao dịch",
        "is_folder": 0
    }, {
        "id": "10.1.2 Tra cứu thông tin tổng quan NNT",
        "parent_id": "10.1 Tra cứu thông tin giao dịch",
        "is_folder": 0
    }, {
        "id": "10.2 Cập nhật các giao dịch hệ thống",
        "parent_id": "10.Xử lý thông tin giao dịch",
        "is_folder": 1
    }, {
        "id": "10.2.1 Cập nhật thông tin giao dịch chi tiết",
        "parent_id": "10.2 Cập nhật các giao dịch hệ thống",
        "is_folder": 0
    }, {
        "id": "11.Quản lý việc in thông báo và liên lạc với NNT",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "11.1 Quản lý việc in thông báo",
        "parent_id": "11.Quản lý việc in thông báo và liên lạc với NNT",
        "is_folder": 0,
        "upgradings": [{
            "version": "6.55",
            "link": "ftp://ftp.tct.vn > Program > TRIEN_KHAI > 2024 > TMS > 6.55 Cưỡng chế nhiều NNT"
        }, ]
    }, {
        "id": "11.2 Quản lý công việc gọi điện thoại|làm việc với NNT",
        "parent_id": "11.Quản lý việc in thông báo và liên lạc với NNT",
        "is_folder": 0
    }, {
        "id": "11.3 In quyết định cưỡng chế nợ thuế",
        "parent_id": "11.Quản lý việc in thông báo và liên lạc với NNT",
        "is_folder": 0
    }, {
        "id": "11.5 Quản lý việc tạo|Tra cứu thông báo",
        "parent_id": "11.Quản lý việc in thông báo và liên lạc với NNT",
        "is_folder": 1
    }, {
        "id": "11.5.1 Tạo lại thông báo",
        "parent_id": "11.5 Quản lý việc tạo|Tra cứu thông báo",
        "is_folder": 0
    }, {
        "id": "11.5.2 Tra cứu thông báo",
        "parent_id": "11.5 Quản lý việc tạo|Tra cứu thông báo",
        "is_folder": 0
    }, {
        "id": "12.Quản lý danh mục",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "12.1 Phân loại địa bàn theo khu vực",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.2 Phân bổ thuế suất theo khu vực và NN",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.3 Danh mục địa bàn thu",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.4 Phân bổ địa bàn thu",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.5 Thiết lập danh mục tài khoản kho bạc",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.6 Danh mục PNN",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 1
    }, {
        "id": "12.6.1 Danh mục PNN",
        "parent_id": "12.6 Danh mục PNN",
        "is_folder": 0
    }, {
        "id": "12.6.2 Kết xuất danh mục giá đất PNN",
        "parent_id": "12.6 Danh mục PNN",
        "is_folder": 0
    }, {
        "id": "12.6.3 Nhận file danh mục giá đất PNN",
        "parent_id": "12.6 Danh mục PNN",
        "is_folder": 0
    }, {
        "id": "12.6.4 Nhận file danh mục PNN",
        "parent_id": "12.6 Danh mục PNN",
        "is_folder": 0
    }, {
        "id": "12.7 Tiêu chí phân cấp quản lý MST",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.9 Danh mục mục lục ngân sách",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.10 Kết xuất danh mục",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 0
    }, {
        "id": "12.11 Danh mục tài nguyên khoáng sản",
        "parent_id": "12.Quản lý danh mục",
        "is_folder": 1
    }, {
        "id": "12.11.1 Nhập giá tính thuế",
        "parent_id": "12.11 Danh mục tài nguyên khoáng sản",
        "is_folder": 0
    }, {
        "id": "12.11.2 Tra cứu giá tính thuế tài nguyên",
        "parent_id": "12.11 Danh mục tài nguyên khoáng sản",
        "is_folder": 0
    }, {
        "id": "12.11.3 Nhận bảng giá tính thuế tài nguyên từ file excel",
        "parent_id": "12.11 Danh mục tài nguyên khoáng sản",
        "is_folder": 0
    }, {
        "id": "13.Quản lý hành nghề dịch vụ làm thủ tục về thuế",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "parent_id": "13.Quản lý hành nghề dịch vụ làm thủ tục về thuế",
        "is_folder": 1
    }, {
        "id": "13.1.1 Nhập thông tin cá nhân được cấp chứng chỉ hành nghề",
        "parent_id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "is_folder": 0
    }, {
        "id": "13.1.2 Sửa thông tin cá nhân được cấp chứng chỉ hành nghề",
        "parent_id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "is_folder": 0
    }, {
        "id": "13.1.3 Xem thông tin cá nhân được cấp chứng chỉ hành nghề",
        "parent_id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "is_folder": 0
    }, {
        "id": "13.1.4 Nhập thông tin cá nhân bị thu hồi chứng chỉ hành nghề",
        "parent_id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "is_folder": 0
    }, {
        "id": "13.1.5 Tra cứu thông tin cá nhân được cấp chứng chỉ",
        "parent_id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "is_folder": 0
    }, {
        "id": "13.1.6 Nhận thông tin cá nhân được cấp chứng chỉ hành nghề từ file .xls",
        "parent_id": "13.1 Quản lý cấp và thu hồi chứng chỉ hành nghề",
        "is_folder": 0
    }, {
        "id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "parent_id": "13.Quản lý hành nghề dịch vụ làm thủ tục về thuế",
        "is_folder": 1
    }, {
        "id": "13.2.1 Cấp giấy xác nhận lần đầu đối với ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.2 Cấp lại giấy xác nhận đối với ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.3 Nhập QĐ đình chỉ kinh doanh dịch vụ làm thủ tục về thuế đối với ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.4 Nhập thông tin QĐ đình chỉ KD DV làm TT về thuế của ĐLT hết hiệu lực",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.5 Nhập QĐ thu hồi giấy xác nhận của đại lý thuế",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.6 Tra cứu NNT kê khai qua ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.7 Tra cứu đại lý thuế",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.9 Nhập thông báo đình chỉ hành nghề đối với nhân viên ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.10 Nhập QĐ chấm dứt hành nghề đối với nhân viên ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.11 Nhập thông tin khắc phục sai phạm sau khi có QĐ chấm dứt hành nghề",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.12 Tra cứu nhân viên đại lý thuế",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.13 NNT kê khai đại lý thuế",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.14 Tra cứu lịch sử cấp giấy xác nhận của ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.2.15 Tra cứu lịch sử hành nghề của nhân viên ĐLT",
        "parent_id": "13.2 Quản lý đại lý thuế và nhân viên đại lý thuế",
        "is_folder": 0
    }, {
        "id": "13.3 Quản lý cập nhật kiến thức",
        "parent_id": "13.Quản lý hành nghề dịch vụ làm thủ tục về thuế",
        "is_folder": 1
    }, {
        "id": "13.3.1 Nhập thông tin cập nhật kiến thức",
        "parent_id": "13.3 Quản lý cập nhật kiến thức",
        "is_folder": 0
    }, {
        "id": "13.3.2 Nhận báo cáo cập nhật kiến thức qua file excel",
        "parent_id": "13.3 Quản lý cập nhật kiến thức",
        "is_folder": 0
    }, {
        "id": "13.3.3 Tra cứu kết quả cập nhật kiến thức",
        "parent_id": "13.3 Quản lý cập nhật kiến thức",
        "is_folder": 0
    }, {
        "id": "98.Tiện ích người sử dụng",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "98.1 Cập nhật CQT của NSD",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 0
    }, {
        "id": "98.2 Hiển thị các yêu cầu spool",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 0
    }, {
        "id": "98.3 Danh sách chức năng sử dụng",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 0
    }, {
        "id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 1
    }, {
        "id": "98.4.1 Đối chiếu nghĩa vụ thuế GTGT giữa công cụ rà soát và TMS",
        "parent_id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "is_folder": 0
    }, {
        "id": "98.4.2 Hỗ trợ tính nghĩa vụ thuế, tiền chậm nộp GTGT cho một NNT",
        "parent_id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "is_folder": 0
    }, {
        "id": "98.4.3 Điều chỉnh dữ liệu GTGT",
        "parent_id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "is_folder": 0
    }, {
        "id": "98.4.4 Báo cáo tổng hợp tiến độ rà soát dữ liệu GTGT",
        "parent_id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "is_folder": 0
    }, {
        "id": "98.4.5 Báo cáo chi tiết tiến độ rà soát dữ liệu GTGT",
        "parent_id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "is_folder": 0
    }, {
        "id": "98.4.6 Danh sách NNT có sai lệch Sổ thu nộp",
        "parent_id": "98.4 Chức năng hỗ trợ tính toán nghĩa vụ GTGT",
        "is_folder": 0
    }, {
        "id": "98.5 Chức năng hỗ trợ rà soát chương",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 1
    }, {
        "id": "98.5.1 Hỗ trợ thay đổi thông tin Chương",
        "parent_id": "98.5 Chức năng hỗ trợ rà soát chương",
        "is_folder": 0
    }, {
        "id": "98.5.2 Tra cứu danh sách NNT thay đổi thông tin chương",
        "parent_id": "98.5 Chức năng hỗ trợ rà soát chương",
        "is_folder": 0
    }, {
        "id": "98.7 Hỗ trợ điều chỉnh địa giới hành chính",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 1
    }, {
        "id": "98.7.1 Thay đổi thông tin địa chỉ ĐKT cho nhiều NNT",
        "parent_id": "98.7 Hỗ trợ điều chỉnh địa giới hành chính",
        "is_folder": 0
    }, {
        "id": "98.7.2 Thay đổi thông tin CQT quản lý cho nhiều NNT",
        "parent_id": "98.7 Hỗ trợ điều chỉnh địa giới hành chính",
        "is_folder": 0
    }, {
        "id": "98.9 Tra cứu, lấy kết quả các báo cáo chạy nền",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 0
    }, {
        "id": "98.10 Hợp nhất, sáp nhật (Địa bàn hành chính)",
        "parent_id": "98.Tiện ích người sử dụng",
        "is_folder": 1
    }, {
        "id": "98.10.1 Chuyển đổi nghĩa vụ thuế (nợ, nộp thừa)",
        "parent_id": "98.10 Hợp nhất, sáp nhật (Địa bàn hành chính)",
        "is_folder": 0
    }, {
        "id": "98.10.2 Chuyển đổi hồ sơ",
        "parent_id": "98.10 Hợp nhất, sáp nhật (Địa bàn hành chính)",
        "is_folder": 0
    }, {
        "id": "98.10.3 Chuyển đổi miễn giảm",
        "parent_id": "98.10 Hợp nhất, sáp nhật (Địa bàn hành chính)",
        "is_folder": 0
    }, {
        "id": "98.10.4 Chuyển đổi khoanh nợ",
        "parent_id": "98.10 Hợp nhất, sáp nhật (Địa bàn hành chính)",
        "is_folder": 0
    }, {
        "id": "98.10.5 Chuyển đổi hoàn",
        "parent_id": "98.10 Hợp nhất, sáp nhật (Địa bàn hành chính)",
        "is_folder": 1
    }, {
        "id": "98.10.5.1 Chuyển đổi hồ sơ chưa hạch toán QĐ hoàn",
        "parent_id": "98.10.5 Chuyển đổi hoàn",
        "is_folder": 0
    }, {
        "id": "98.10.5.2 Chuyển đổi hồ sơ đã hạch toán QĐ hoàn",
        "parent_id": "98.10.5 Chuyển đổi hoàn",
        "is_folder": 0
    }, {
        "id": "99.Quản trị hệ thống",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "99.1 Quản lý người sử dụng",
        "parent_id": "99.Quản trị hệ thống",
        "is_folder": 1
    }, {
        "id": "99.1.1 Cập nhật thông tin NSD",
        "parent_id": "99.1 Quản lý người sử dụng",
        "is_folder": 0
    }, {
        "id": "99.1.2 Cho người sử dụng",
        "parent_id": "99.1 Quản lý người sử dụng",
        "is_folder": 0
    }, {
        "id": "99.1.3 Vai trò theo gán người sử dụng",
        "parent_id": "99.1 Quản lý người sử dụng",
        "is_folder": 0
    }, {
        "id": "99.1.4 Tra cứu danh sách chức năng gán cho NSD",
        "parent_id": "99.1 Quản lý người sử dụng",
        "is_folder": 0
    }, {
        "id": "99.1.5 Danh sách các chức năng được gán cho vai trò",
        "parent_id": "99.1 Quản lý người sử dụng",
        "is_folder": 0
    }, {
        "id": "99.1.9 Báo cáo quản trị người dùng",
        "parent_id": "99.1 Quản lý người sử dụng",
        "is_folder": 1
    }, {
        "id": "99.1.9.1 Báo cáo tổng hợp thông tin đăng ký của NSD",
        "parent_id": "99.1.9 Báo cáo quản trị người dùng",
        "is_folder": 0
    }, {
        "id": "99.1.9.2 Báo cáo quản trị về vi phạm qui định phân quyền của người dùng",
        "parent_id": "99.1.9 Báo cáo quản trị người dùng",
        "is_folder": 0
    }, {
        "id": "99.1.9.3 Báo cáo tổng hợp kiểm soát tình trạng truy cập và sử dụng ứng dụng",
        "parent_id": "99.1.9 Báo cáo quản trị người dùng",
        "is_folder": 0
    }, {
        "id": "99.1.9.4 Báo cáo chi tiết kiểm soát tình trạng truy cập và sử dụng ứng dụng",
        "parent_id": "99.1.9 Báo cáo quản trị người dùng",
        "is_folder": 0
    }, {
        "id": "99.2 Thiết lập hệ thống",
        "parent_id": "99.Quản trị hệ thống",
        "is_folder": 1
    }, {
        "id": "99.2.1 Thiết lập thông tin thông báo",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.2 Thiết lập sinh số tự động cho TB nợ",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.3 Thiết lập sinh số tự động cho thông báo khoán",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.4 Thiết lập sinh số tự động cho TB KK",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.5 Danh mục chữ ký điện tử",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.6 Danh sách chức vụ của cơ quan thuế",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.7 Sơ đồ tổ chức",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.8 CQT và Mã số thuế CQT",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.9 Thiết lập sinh số tự động cho TB PNN",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.10 Danh mục ngưỡng nợ của CQT",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.11 Sơ đồ tổ chức (PIT)",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.14 Báo cáo tổng hợp vị trí - vai trò - chức năng",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.15 Thiết lập danh mục hồ sơ|phụ lục",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.16 Thiết lập footer thông báo, quyết định",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.17 Cấu hình hình thức ký thông báo|quyết định lệnh hoàn",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.18 Thiết lập thẩm quyền xử phạt VPHC",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.2.19 Thiết lập sinh số tự động cho TB",
        "parent_id": "99.2 Thiết lập hệ thống",
        "is_folder": 0
    }, {
        "id": "99.9 Quản trị truyền nhận dữ liệu",
        "parent_id": "99.Quản trị hệ thống",
        "is_folder": 1
    }, {
        "id": "99.9.2 Tra cứu gói dữ liệu truyền nhận",
        "parent_id": "99.9 Quản trị truyền nhận dữ liệu",
        "is_folder": 0
    }, {
        "id": "99.9.4 Tra cứu gói tin gửi sang TPH",
        "parent_id": "99.9 Quản trị truyền nhận dữ liệu",
        "is_folder": 0
    }, {
        "id": "99.9.5 Tra cứu gói tin gửi tra trục",
        "parent_id": "99.9 Quản trị truyền nhận dữ liệu",
        "is_folder": 0
    }, {
        "id": "99.9.8 Tra cứu báo cáo đối soát dữ liệu nhận từ QLTB-NĐ",
        "parent_id": "99.9 Quản trị truyền nhận dữ liệu",
        "is_folder": 0
    }, {
        "id": "99.9.9 Tra cứu gói tin đối soát gửi sang Website",
        "parent_id": "99.9 Quản trị truyền nhận dữ liệu",
        "is_folder": 0
    }, {
        "id": "Giao dịch ZTC_CONVERT_BK",
        "parent_id": null,
        "is_folder": 0
    }, {
        "id": "Giao dịch ZTC_SEARCH_CVBK",
        "parent_id": null,
        "is_folder": 0
    }, {
        "id": "In thông báo MST vãng lai",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "Print Report TAX F.P",
        "parent_id": "In thông báo MST vãng lai",
        "is_folder": 0
    }, {
        "id": "Tra cứu thông tin người phụ thuộc",
        "parent_id": null,
        "is_folder": 1
    }, {
        "id": "In mã số thuế NPT",
        "parent_id": "Tra cứu thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "Tra cuu thong tin NPT",
        "parent_id": "Tra cứu thông tin người phụ thuộc",
        "is_folder": 0
    }, {
        "id": "Tra cứu NPT",
        "parent_id": "Tra cứu thông tin người phụ thuộc",
        "is_folder": 0
    }
];
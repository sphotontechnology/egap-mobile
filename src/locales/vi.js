import {Platform} from 'react-native';

export default {
    common: {
        name: 'Tên',
        email: 'Email',
        password: 'Mật khẩu',
        notification: 'Thông báo',
        phone: 'Số điện thoại',
        titleAlert: 'Thông báo',
        version: 'Version ',
        alertLocation: 'Lấy vị trí người dùng thất bại.',
        emptyData: 'Không có dữ liệu',
        querySuccess: 'Truy vấn thành công.',
        alert: 'Alert',
        okay: 'Okay',
        cancel: 'Cancel',
        yes: 'Yes',
        no: 'No',
        appName: 'Nhật ký điện tử',
        hello: 'Xin chào !',
        slogan: 'Chúng tôi là liên hiệp HTX\n' + 'kinh tế số Việt Nam',
    }, message: {
        ERROR_OCCURRED: 'Đăng xuất thành công',
        NOT_INTERNET: 'Not internet.',
        UNAUTHORIZED: 'Unauthorized',
    }, appUpdate: {
        title: 'Cập nhật mới',
        message: 'Phiên bản này đã cũ. Vui lòng cập nhật mới từ ' + (Platform.OS === 'ios' ? 'App Store' : 'Play Store') + '.',
        buttonSubmit: 'Cập nhật',
    }, openPicker: {
        defaultTitle: 'Chọn ảnh',
        titleEditAvatar: 'Chọn ảnh đại diện',
        takePhotoButtonTitle: 'Chụp ảnh mới...',
        chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện...',
        cancel: 'Huỷ',
        overSize: 'Kích thước ảnh vượt quá giới hạn cho phép, vui lòng chọn ảnh có kích thước dưới 3MB',
    }, alertExitApp: {
        title: 'Thoát ứng dụng', description: 'Bạn chắc chắn muốn thoát ứng dụng?', cancel: 'Huỷ', ok: 'Thoát',
    }, button: {
        signIn: 'Đăng nhập',
        signUp: 'Đăng ký',
        forgotPassword: 'Quên mật khẩu?',
        resetPassword: 'Đặt lại mật khẩu',
        createAccount: 'Tạo tài khoản',
        profile: 'Thông tin',
        setting: 'Cài đặt',
        logout: 'Đăng xuất',
        update: 'Cập nhật',
        logInWithFacebook: 'Đăng nhập với Facebook',
        scanQRCodeButton: 'Quét mã QR',
        verify: 'Xác thực',
        seeAll: 'Xem tất cả',
        seeMore: 'Xem thêm',
        send: 'Gửi',
        confirm: 'Xác nhận',
        create: 'Tạo mới',
        addProduct: 'Thêm sản phẩm',
    }, validation: {
        string: {
            required: 'bắt buộc.',
            invalid: 'không đúng.',
            min: 'phải ít nhất',
            character: 'ký tự.',
            equalPassword: 'Mật khẩu không khớp',
        },
    }, textInput: {
        hintPhone: 'Số điện thoại',
        hintPassword: 'Mật khẩu',
        hintUsername: 'Tên',
        hintEmail: 'Email',
        hintBirthday: 'Ngày sinh',
        hintName: 'Họ và tên',
        hintConfirmPassword: 'Xác nhận mật khẩu',
        hintPhoneOrEmail: 'Số điện thoại hoặc email',
        hintReject: 'Nhập phản hồi',
        hintAffiliateCode: 'Nhập mã',
        hintOldPassword: 'Mật khẩu cũ',
        hintNewPassword: 'Mật khẩu mới',
        newLandName: 'Tên lô đất',
        area: 'Diện tích lô đất (m2)',
        productTime: 'Đợt 1, đợt 2, đợt 3...',
    }, tabBar: {
        land: 'Lô đất', product: 'Sản phẩm', process: 'Quy trình', account: 'Thông tin', today: 'Hôm nay', forecast: 'Dự báo',
    }, modal: {
        filterLand: {
            des: 'Tìm lô sản xuất chưa được kiểm tra trong các ngày gần đây',
            aDay: '1 ngày',
            threeDays: '3 ngày',
            aWeek: '1 tuần',
            aMonth: '1 tháng',
            cancel: 'Huỷ',
            filter: 'Lọc',
        },
    }, scenes: {
        auth: {
            signIn: {
                title: 'Đăng nhập', btnLogin: 'Đăng nhập',
            },
        }, main: {
            home: {
                title: 'Trang chủ', hello: 'Hello ',
            }, weatherAndForecast: {
                title: 'Thời tiết và dự báo', today: 'Hôm nay', forecast: 'Dự báo',
            }, landList: {productCount: 'Có %{count} sản phẩm'}, createLand: {
                title: 'Thêm lô đất mới',
            }, addProductToLand: {
                headerTitle: 'Thêm sản phẩm - ', productTime: 'Tên sản phẩm',
            }, addTask: {
                title: 'Thêm công việc',
            }, filter: {
                addProductToLand: {
                    headerTitle: 'Chọn danh mục',
                }, createLandContainer: {
                    headerTitle: 'Chọn chủ lô đất',
                }, addTask: {
                    headerTitle: 'Chọn công việc',
                },
            },
        },
    },
};

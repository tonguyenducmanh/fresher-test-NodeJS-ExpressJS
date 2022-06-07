
function ramdomDiaChi(){
    const diaChi = [
            {
                'name': 'Thành phố Hà Nội',
                'districts':[
                    {
                        'name': 'Quận Ba Đình',
                        'wards': [
                            'Phường Phúc Xá',
                            'Phường Trúc Bạch'
                        ]
                    },
                    {
                        'name': 'Quận Hoàn Kiếm',
                        'wards': [
                            'Phường Phúc Tân',
                            'Phường Đồng Xuân',
                            'Phường Hàng Mã'
                        ]
                    }
                ]
            },
            {
                'name': 'Tỉnh Thái Bình',
                'districts':[
                    {
                        'name': 'Thành phố Thái Bình',
                        'wards': [
                            'Phường Lê Hồng Phong',
                            'Phường Bồ Xuyên',
                            'Phường Đề Thám'
                        ]
                    },
                    {
                        'name': 'Huyện Tiền Hải',
                        'wards': [
                            'Thị trấn Tiền Hải',
                            'Xã Đông Trà',
                            'Xã Vũ Lăng',
                            'Xã Tây Lương',
                            'Xã Tây Ninh',
                            'Xã An Ninh'
                        ]
                    }
                ]
            },
            {
                'name': 'Tỉnh Thái Nguyên',
                'districts':[
                    {
                        'name': 'Thành phố Thái Nguyên',
                        'wards': [
                            'Phường Quán Triều',
                            'Phường Quang Vinh',
                            'Phường Túc Duyên'
                        ]
                    },
                    {
                        'name': 'Thành phố Sông Công',
                        'wards': [
                            'Phường Lương Sơn',
                            'Phường Châu Sơn'
                        ]
                    }
                ]
            }
    ]
    const tinhThanh = diaChi[Math.floor(Math.random() * diaChi.length)]
    const quanHuyenArray = diaChi[diaChi.indexOf(tinhThanh)].districts
    const quanHuyenLength = diaChi[diaChi.indexOf(tinhThanh)].districts.length
    const quanHuyen = quanHuyenArray[Math.floor(Math.random() * quanHuyenLength)]
    const phuongXaArray = quanHuyen.wards
    const phuongXaLength = quanHuyen.wards.length
    const phuongXa = phuongXaArray[Math.floor(Math.random() * phuongXaLength)]
    const result = [
        tinhThanh.name, 
        quanHuyen.name,
        phuongXa
    ]
    return result;
}
console.log(ramdomDiaChi()[0])
console.log(ramdomDiaChi()[1])
console.log(ramdomDiaChi()[2])

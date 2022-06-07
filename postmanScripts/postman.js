var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  pm.sendRequest("http://localhost:5000/customers/last", function (err, response) {
      const lastID = response.json()
      let lastIDArray
      lastID[0] ? lastIDArray = lastID[0]._id : lastIDArray = 'TN000000000000000'
      const lastIDNumber = parseInt(lastIDArray.split('').slice(2,17).join('')) +1
      const zeroPad = (num, places) => String(num).padStart(places, '0')
      const newIDCout =zeroPad(lastIDNumber, 15)
      const newTNCount = `TN${newIDCout}`
      return pm.variables.set('_id', newTNCount)
  });
  ;
  
  function randomXungHo(){
      const xungHo = ["anh", "chị", "ông", "bà"
      ]
      const the = xungHo[Math.floor(Math.random() * xungHo.length)]
      return the;
  }
  
  pm.variables.set('xungHo', randomXungHo());
  
  
  function ramdomPhongBan(){
      const phongban = [ '-' ,
      'Phòng Marketing' ,
      'Phòng hành chính' ,
      'Phòng công nghệ thông tin' ,
      'Phòng nghiên cứu và phát triển sản phẩm' ,
      'Phòng nhân sự' ,
      'Phòng kế toán' ,
      'Phòng kiểm toán' ,
      'Phòng chăm sóc khách hàng ' ,
      ]
      const the = phongban[Math.floor(Math.random() * phongban.length)]
      return the;
  }
  
  pm.variables.set('phongBan', ramdomPhongBan());
  
  function ramdomChucDanh(){
      const chucDanh = [ '-' ,
      'Giám đốc' ,
      'Phó giám đốc' ,
      'Trưởng phòng' ,
      'Phó phòng' ,
      'Nhân viên' ,
      'Thực tập sinh' ,
      ]
      const the = chucDanh[Math.floor(Math.random() * chucDanh.length)]
      return the;
  }
  
  pm.variables.set('chucDanh', ramdomChucDanh());
  
  function ramdomNguonGoc(){
      const nguongGoc = [ '-' ,
      'Giám đốc' ,
      'Không xác định' ,
      'Chủ động mua hàng' ,
      'Được giới thiệu' ,
      ]
      const the = nguongGoc[Math.floor(Math.random() * nguongGoc.length)]
      return the;
  }
  
  pm.variables.set('nguonGoc', ramdomNguonGoc());
  
  
  function ramdomToChuc(){
      const toChuc = [ 'Bảo vệ động vật hoang dã' ,
      'Y tế thế giới' ,
      'Khối quân sự mỹ bắc đại tây dương' ,
      'UNESCO' ,
      'Guinness World Records' ,
      'IDMB' ,
      'Rotten Tomatoes' ,
      'Marvels' ,
      'DC' ,
      'Disney' ,
      '-' ,
      ]
      const the = toChuc[Math.floor(Math.random() * toChuc.length)]
      return the;
  }
  
  pm.variables.set('toChuc', ramdomToChuc());
  
  
  
  function ramdomMoTaiNganHang(){
      const nganHang = [ 'BIDV' ,
      'TPbank' ,
      'VPbank' ,
      'MBbank' ,
      'Techcombank' ,
      'Viettinbank' ,
      'Saccombank' ,
      '-' ,
      ]
      const the = nganHang[Math.floor(Math.random() * nganHang.length)]
      return the;
  }
  
  pm.variables.set('moTaiNganHang', ramdomMoTaiNganHang());
  
  function ramdomLoaiHinh(){
      const loaiHinh = [     'Công ty nhà nước' ,
      'Công ty thương mại cổ phần' ,
      'Công ty tư nhân' ,
      'Tổ chức phi chính phủ' ,
      'Tổ chức tài chính' ,
      'Ngân hàng nhà nước' ,
      'Ngân hàng tư nhân' ,
      '-' ,
      ]
      const the = loaiHinh[Math.floor(Math.random() * loaiHinh.length)]
      return the;
  }
  
  pm.variables.set('loaiHinh', ramdomLoaiHinh());
  
  function ramdomNgayThanhLap(){
      const ngayThanhLap = [     '1991-12-20' ,
      '2000-10-12' ,
      '2008-05-01' ,
      '2011-04-14' ,
      '2015-07-21' ,
      '2019-09-15' ,
      '2022-06-06' ,
      '-' ,
      ]
      const the = ngayThanhLap[Math.floor(Math.random() * ngayThanhLap.length)]
      return the;
  }
  
  pm.variables.set('ngayThanhLap', ramdomNgayThanhLap());
  
  function ramdomLinhVuc(){
      const linhVuc = ['Công nghệ thông tin' ,
      'Kinh tế' ,
      'Tài chính' ,
      'Thương mại điện tử' ,
      'Kế toán' ,
      'Bất động sản' ,
      'Xây dựng' ,
      'Y tế' ,
      '-' ,
      ]
      const the = linhVuc[Math.floor(Math.random() * linhVuc.length)]
      return the;
  }
  
  pm.variables.set('linhVuc', ramdomLinhVuc());
  
  function ramdomNganhNghe(){
      const nganhNghe = [
      'Công nghệ thông tin' ,
      'Kinh tế' ,
      'Tài chính' ,
      'Thương mại điện tử' ,
      'Kế toán' ,
      'Bất động sản' ,
      'Xây dựng' ,
      'Y tế' ,
      '-' ,
      ]
      const the = nganhNghe[Math.floor(Math.random() * nganhNghe.length)]
      return the;
  }
  
  pm.variables.set('nganhNghe', ramdomNganhNghe());
  
  
  function ramdomDoanhThu(){
      const doanhThu = [
      'Dưới 100 triệu 1 năm' ,
      'Từ 100 triệu đến 500 triệu' ,
      'Từ 500 triệu đến 1 tỷ' ,
      'Trên 1 tỷ hàng năm' ,
      '-' ,
      ]
      const the = doanhThu[Math.floor(Math.random() * doanhThu.length)]
      return the;
  }
  
  pm.variables.set('doanhThu', ramdomDoanhThu());
  
  function ramdomMoTa(){
      const moTa = [
      'Xinh gái' ,
      'Đẹp trai' ,
      'Nhát gái' ,
      'Bên ngoài đẹp trai bên trong nhiều tiền' ,
      'Gọi anh là food boy' ,
      '-' ,
      ]
      const the = moTa[Math.floor(Math.random() * moTa.length)]
      return the;
  }
  
  pm.variables.set('moTa', ramdomMoTa());
  
  function ramdomMoTa(){
      const moTa = [
      '2000-03-14' ,
      'Đẹp trai' ,
      'Nhát gái' ,
      'Bên ngoài đẹp trai bên trong nhiều tiền' ,
      'Gọi anh là food boy' ,
      '-' ,
      ]
      const the = moTa[Math.floor(Math.random() * moTa.length)]
      return the;
  }
  
  pm.variables.set('moTa', ramdomMoTa());
  
  
  function ramdomLoaiTiemNang(){
      const loaiTiemNang = [
      '- Không chọn -' ,
      'Khách hàng lẻ' ,
      'Khách hàng dự án' ,
      'Khách hàng trẻ tuổi' ,
      'Khách hàng khó tính' ,
      'Khách hàng dễ tính' ,
      'Khách hàng lâu năm' ,
      ]
      const the = loaiTiemNang[Math.floor(Math.random() * loaiTiemNang.length)]
      return the;
  }
  
  pm.variables.set('loaiTiemNang', ramdomLoaiTiemNang());
  
  
  function ramdomDienThoaiDiDong(){
      const the = Math.random().toString().slice(2,12 );
      return the;
  }
  
  pm.variables.set('dienThoaiDiDong', ramdomDienThoaiDiDong());
  
  
  function ramdomDienThoaiCoQuan(){
      const the = Math.random().toString().slice(2,12 );
      return the;
  }
  
  pm.variables.set('dienThoaiCoQuan', ramdomDienThoaiCoQuan());
  
  
  function ramdomMaSoThue(){
      const the = Math.random().toString().slice(2,12 );
      return the;
  }
  
  pm.variables.set('maSoThue', ramdomMaSoThue());
  
  
  
  function ramdomTaiKhoanNganHang(){
      const the = Math.random().toString().slice(2,14 );
      return the;
  }
  
  pm.variables.set('taiKhoanNganHang', ramdomTaiKhoanNganHang());
  
  
  function ramdomDungChung(){
      const dungChung = [
      'true', 'false'
      ]
      const the = dungChung[Math.floor(Math.random() * dungChung.length)]
      return the;
  }
  
  pm.variables.set('dungChung', ramdomDungChung());
  
  function ramdomSoNha(){
      const soNha = [
      'Ngõ 15','Ngõ 16', 'Ngõ 17', 'Ngõ 18', 'Ngõ 19', 'Ngõ 20', 'Ngõ 21', 'Ngõ 22',
      'Ngõ 30','Ngõ 29', 'Ngõ 28', 'Ngõ 27', 'Ngõ 26', 'Ngõ 25', 'Ngõ 24', 'Ngõ 23',
      'Ngõ 14','Ngõ 13', 'Ngõ 12', 'Ngõ 11', 'Ngõ 10', 'Ngõ 9', 'Ngõ 8', 'Ngõ 7',
      'Ngõ 32','Ngõ 31', 'Ngõ 1', 'Ngõ 2', 'Ngõ 3', 'Ngõ 4', 'Ngõ 5', 'Ngõ 6',
      ]
      const the = soNha[Math.floor(Math.random() * soNha.length)]
      return the;
  }
  
  pm.variables.set('soNha', ramdomSoNha());
  
  
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
  
  let hihi = ramdomDiaChi()
  
  pm.variables.set('tinhThanh', hihi[0]);
  pm.variables.set('quanHuyen', hihi[1]);
  pm.variables.set('phuongXa', hihi[2]);
  
  function randomHovaDem(){
      const hovadem = ["Liễu Thị", "Trần Xuân", "Đặng Gia", "Tô Nguyễn", "Trần Hải", "Cao Thị", "Trần Ngọc", "Quốc Bảo", "Đặng Thị", "Lê Thị", "Phạm Thị", "Khổng Thị", "Trương Thị", "Phan Thị", "Nguyễn Minh","Nguyễn Hải", "Phạm Xuân", "Vũ Minh"
      ]
      const the = hovadem[Math.floor(Math.random() * hovadem.length)]
      return the;
  }
  
  
  function randomTen(){
      const ten = [ "Mạnh", "Oanh", "Nam", "Long", "Phương", "Giang", "Bảo","Hương", "Ly", "Lan", "Trang", "Tuấn","Ngọc", "Hiếu", "Cường", "Chi", "Linh", "Lành", "Mai", "Thu", "Kiên", "Trung", "Hoàng", "Hậu", "Bình", "Đông", "Hồng", "Huyền", "Khánh", "Ngân", "Nhung"
      ]
      const the = ten[Math.floor(Math.random() * ten.length)]
      return the;
  }
  
  pm.variables.set('ten', randomTen());
  
  function removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
      str = str.replace(/đ/g,"d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
      // Remove extra spaces
      // Bỏ các khoảng trắng liền nhau
      str = str.replace(/ + /g," ");
      str = str.trim();
      // Remove punctuations
      // Bỏ dấu câu, kí tự đặc biệt
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
      str = str.split(' ').join('')
      return str;
  }
  
  
  function randomHovaDem(){
      const hovadem = ["Liễu Thị", "Trần Xuân", "Đặng Gia", "Tô Nguyễn", "Trần Hải", "Cao Thị", "Trần Ngọc", "Quốc Bảo", "Đặng Thị", "Lê Thị", "Phạm Thị", "Khổng Thị", "Trương Thị", "Phan Thị", "Nguyễn Minh","Nguyễn Hải", "Phạm Xuân", "Vũ Minh"
      ]
      const the = hovadem[Math.floor(Math.random() * hovadem.length)]
      return the;
  }
  
  
  function randomTen(){
      const ten = [ "Mạnh", "Oanh", "Nam", "Long", "Phương", "Giang", "Bảo","Hương", "Ly", "Lan", "Trang", "Tuấn","Ngọc", "Hiếu", "Cường", "Chi", "Linh", "Lành", "Mai", "Thu", "Kiên", "Trung", "Hoàng", "Hậu", "Bình", "Đông", "Hồng", "Huyền", "Khánh", "Ngân", "Nhung"
      ]
      const the = ten[Math.floor(Math.random() * ten.length)]
      return the;
  }
  
  function removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
      str = str.replace(/đ/g,"d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
      // Remove extra spaces
      // Bỏ các khoảng trắng liền nhau
      str = str.replace(/ + /g," ");
      str = str.trim();
      // Remove punctuations
      // Bỏ dấu câu, kí tự đặc biệt
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
      str = str.split(' ').join('')
      return str;
  }
  
  const hoVaDemResult = randomHovaDem()
  const tenResult = randomTen()
  const result = [hoVaDemResult, tenResult]
  const resultEmail = removeVietnameseTones(result[0]).toLowerCase() + 
      removeVietnameseTones(result[1]).toLowerCase() + '@gmail.com'
  
  const resultEmailTwo = removeVietnameseTones(result[0]).toLowerCase() + 
      removeVietnameseTones(result[1]).toLowerCase() + '@job.com'
  
  pm.variables.set('hoVaDem', result[0]);
  pm.variables.set('ten', result[1]);
  pm.variables.set('emailCaNhan', resultEmail);
  pm.variables.set('emailCoQuan', resultEmailTwo);
  
  
  
  
  
  
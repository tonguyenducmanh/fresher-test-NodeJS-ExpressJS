import * as XLSX from 'xlsx/xlsx.mjs';

import styles from './ActionBar.module.css'
import stylesTwo from '../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesFour from '../MainBody/BodyTable/Table/Table.module.css'

export const ExportToExcellFile = (findList) =>{
    const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
    const checkedButton =  document.getElementsByClassName('hihi')
    const checkedRow =  document.getElementsByClassName(stylesTwo.trId)
    const iconCheckAll = document.getElementById('iconCheckAll')
    const actionBarOne = document.getElementById('actionBarOne')
    const actionBarTwo = document.getElementById('actionBarTwo')
    const moreMenu = document.getElementById('moreMenu')
    
        actionBarOne.classList.remove(styles.hiddenComponent)
        actionBarTwo.classList.add(styles.hiddenComponent)
        for( var i = 0 ; i < tdIds.length ; i ++){
            if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
                checkedButton[i].classList.remove(stylesTwo.iconHeadingChecked)
                checkedButton[i].classList.add(stylesTwo.iconHeading)
                checkedRow[i].classList.remove(stylesTwo.itemChecked)
                iconCheckAll.classList.remove(stylesFour.iconHeadingChecked)
                iconCheckAll.classList.add(stylesFour.iconHeading)
            }
        }
        moreMenu.classList.add(styles.hiddenMenu)
                //tự động tạo file excell tải về khi state của danh sách khác rộng ( là có 1 khách hàng tiềm năng được chọn tải về )
    if(findList !== ''){
        const rows = findList.map(row => ({
            // _id: row._id,
            //trường mã id khách hàng thực tế có lẽ không cần đọc mà cũng không nên đọc được nên k lấy
            loaitiemnang: row.loaitiemnang.join(', '),
            xungho: row.xungho,
            hovaten: row.hovadem + row.ten,
            chucdanh: row.chucdanh,
            dtdidong: row.dtdidong,
            dtcoquan: row.dtcoquan,
            //2 số điện thoại trên nếu có dữ liệu nhập vào dấu - thì xóa nó đi
            emailcoquan: row.emailcoquan,
            emailcanhan: row.emailcanhan,
            tochuc: row.tochuc,
            diachi: row.sonha,
            tinhthanhpho: row.tinhthanhpho,
            quanhuyen: row.quanhuyen,
            phuongxa: row.phuongxa,
            nguongoc: row.nguongoc,
            loaihinh: row.loaihinh,
            linhvuc: row.linhvuc,
            mota: row.mota,
            chusohuu: row.ten,
            doanhthu: row.doanhthu,
            dungchung: row.dungchung ? 'có' : 'không',
            zalo: row.zalo,
            // __v: row.__v
            //trường này được sinh ra tự động từ mongodb nên cũng không cần
            }));
        
            /*tạo workbook và worksheet */
            const worksheet = XLSX.utils.json_to_sheet(rows);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Khách hàng");
        
            /* hàng đầu tiên là tiêu đề */
            XLSX.utils.sheet_add_aoa(worksheet, [["Loại tiềm năng", "Xưng hô", "Họ và tên", "Chức danh", "Điện thoại di động", "Điện thoại cơ quan",
            "Email cá nhân","Email cơ quan", "Tổ chức", "Địa chỉ", "Tỉnh/Thành phố", "Quận/Huyện", "Phường/Xã", "Nguồn gốc", "Loại hình", "Lĩnh vực",
            "Mô tả", "Chủ sở hữu", "Doanh thu","Dùng chung","Zalo"

        ]], { origin: "A1" });
        
            /* chiều rộng của từng cột */
            worksheet["!cols"] = [ 
                { wch: 25 } ,{ wch: 10 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 },{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 } ,{ wch: 20 }
            ];
            /* xuất ra file excell với tên khachhang.xlsx */
            XLSX.writeFile(workbook, "khachhang.xlsx");
    }

}
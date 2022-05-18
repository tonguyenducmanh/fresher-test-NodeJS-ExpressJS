import React from "react";

import styles from './Table.module.css'

export const Table = () =>{
    return (
        <div className={styles.tableContainer}>
        <table className={styles.table}>
        <thead>
            <tr>
                <td className={`${styles.icon} ${styles.iconHeading}`}>
                </td>
                <td>Thẻ
                </td>
                <td>Xưng hô
                </td>
                <td>Họ và tên
                </td>
                <td>Chức danh
                </td>
                <td>ĐT di động
                </td>
                <td>ĐT cơ quan
                </td>
                <td>Email cơ quan
                </td>
                <td>Email cá nhân
                </td>
                <td>Tổ chức
                </td>
                <td>Địa chỉ
                </td>
                <td>Tỉnh/Thành phố
                </td>
                <td>Quận/Huyện
                </td>
                <td>Phường/Xã
                </td>
                <td>Nguồn gốc
                </td>
                <td>Loại hình
                </td>
                <td>Lĩnh vực
                </td>
                <td>Mô tả
                </td>
                <td>Bố cục
                </td>
                <td>Chủ sở hữu
                </td>
                <td>Doanh thu
                </td>
                <td>Dùng chung
                </td>
                <td>Facebook
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={`${styles.iconHeading}`}>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
            </tr>
        </tbody>
        </table>
        </div>
    )
}
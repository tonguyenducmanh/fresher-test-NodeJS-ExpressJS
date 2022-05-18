import React from "react";

import BodyTable from './BodyTable/BodyTable';
import SideBarLeft from './SideBarLeft/SideBarleft';
import SideBarRight from "./SideBarRight/SideBarRight";

import styles from './MainBody.module.css'
const MainBody = () =>{
    
    return (
        <div className={styles.container}>
            <SideBarLeft/>
            <BodyTable/>
            <SideBarRight/>
        </div>
    )
}

export default MainBody
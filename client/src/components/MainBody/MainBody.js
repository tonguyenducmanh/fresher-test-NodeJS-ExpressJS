import React from "react";

import BodyTable from './BodyTable/BodyTable';
import SideBarLeft from './SideBarLeft/SideBarleft';
import SideBarRight from "./SideBarRight/SideBarRight";

import { useEffect } from "react";
import stylesFour from "./SideBarLeft/SideBarLeft.module.css";
import stylesTwo from "./SideBarRight/SideBarRight.module.css";
import stylesThree from "./BodyTable/BodyTable.module.css";

import styles from './MainBody.module.css'
const MainBody = () =>{

    const left = document.getElementsByClassName(stylesFour.container)
    const right = document.getElementsByClassName(stylesTwo.container)
    const table = document.getElementsByClassName(stylesThree.container)
    const filterItemChecked = document.getElementsByClassName(stylesFour.filterItemChecked)
    const filterContainer = document.getElementsByClassName(stylesFour.filterContainer)
    const filterAction = document.getElementsByClassName(stylesFour.filterAction)
    const rightBox = document.getElementsByClassName(stylesTwo.rightBox)


    useEffect(()=>{
        const windowResizeEvent = ()=>{
           let  bodyElement = document.getElementsByTagName("BODY")[0]
            let newWidth = bodyElement.offsetWidth;
            console.log(newWidth)
            if(left[0]){
                left[0].style.removeProperty('flex')
                filterContainer[0].style.display = 'block'
                if(filterItemChecked.length>0){
                    filterAction[0].style.display ='flex'
                    }
            }
            if(right[0]){
                right[0].style.removeProperty('flex')
                rightBox[0].style.display = 'block'
            }
            if(table[0]){
                table[0].style.removeProperty('flex')
            }
        }
        window.addEventListener('resize', windowResizeEvent)
        return()=>{
            window.removeEventListener('resize', windowResizeEvent)
        }
    },[])
    
    return (
        <div className={styles.container}>
            <SideBarLeft/>
            <BodyTable/>
            <SideBarRight/>
        </div>
    )
}

export default MainBody
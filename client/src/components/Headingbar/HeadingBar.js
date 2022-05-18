import React from "react";

import HeadingTop from "./HeadingTop/HeadingTop";
import HeadingCategories from "./HeadingCategories/HeadingCategories";
import styles from './HeadingBar.module.css'
const HeadingBar = () =>{
    
    return (
        <div className={styles.container}>
            <HeadingTop/>
            <HeadingCategories />
            
        </div>
    )
}

export default HeadingBar
import React, {useEffect} from "react";

import HeadingBar from "./components/Headingbar/HeadingBar";
import ActionBar from "./components/ActionBar/ActionBar";
import MainBody from "./components/MainBody/MainBody";

import styles from './styles.css'
const App = () =>{

    useEffect(()=>{
        document.title = "Bán hàng"
    },[])

    return (
            <div className={styles.container}>
                <HeadingBar/>
                <ActionBar/>
                <MainBody/>
            </div>
    )
}

export default App
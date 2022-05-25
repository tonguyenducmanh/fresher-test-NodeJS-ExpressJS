import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import HeadingBar from "./components/Headingbar/HeadingBar";
import ActionBar from "./components/ActionBar/ActionBar";
import MainBody from "./components/MainBody/MainBody";
import CreateBar from "./components/CreateBar/CreateBar"
import CreateBody from "./components/CreateBody/CreateBody"
import Others from "./components/Others/Others";

import styles from './styles.css'
const App = () =>{

    useEffect(()=>{
        document.title = "Bán hàng"
    },[])

    return (
        <Router>
            <div className={styles.container}>
                <HeadingBar/>
                <Routes>
                    <Route exact path="/" element={
                    <>
                        <ActionBar/>
                        <MainBody/>
                    </>}>
                    </Route>
                    <Route exact path="/create" element={
                    <>
                        <CreateBar/>
                        <CreateBody/>
                    </>}>
                    </Route>
                    <Route exact path="/others" element={<Others />}>
                        
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
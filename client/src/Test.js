import React from "react";
import {DiaChi} from './components/CreateBody/AutoComplete/Array/DiaChi'
 const Test = () =>{
    return(
        <>
        <div>
            {DiaChi.map((data, key) =>{
                return (
                    <div key ={key}>
                        {data.name}
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default  Test
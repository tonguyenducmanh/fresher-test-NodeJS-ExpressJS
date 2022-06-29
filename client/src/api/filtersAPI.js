import axios from "axios";

export default axios.create({
    // baseURL: 'http://localhost:5000/filters',

    // URL ASP.Net Core Web API Entiry Framework

    baseURL: "https://localhost:7130/filters"

    // URL ASP.Net Core Web API Dapper

    // baseURL : 

    //URL deploy
    // // baseURL: 'https://ducmanh-first-app.herokuapp.com/filters',
    // headers:{
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
})
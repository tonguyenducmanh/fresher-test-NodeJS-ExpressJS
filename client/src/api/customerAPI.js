import axios from 'axios';

export default axios.create({

    // URL Node JS Express JS
    // baseURL: "http://localhost:5000/customers",

    // URL ASP.Net Core Web API Entiry Framework

    baseURL: "https://localhost:7130/customers/"

    // URL ASP.Net Core Web API Dapper

    // baseURL : "https://localhost:7246/customers/"

    // URL deploy
    // // baseURL: "https://ducmanh-first-app.herokuapp.com/customers",
    // headers: {
    //   // 'content-type': 'application/json',
    //   'Content-Type': 'multipart/form-data'
    //   //dùng cái này thay cho json để upload được file ảnh
    // },
  });
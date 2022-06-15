import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:5000/customers",

    // URL deploy
    // baseURL: "https://ducmanh-first-app.herokuapp.com/customers",
    headers: {
      // 'content-type': 'application/json',
      'Content-Type': 'multipart/form-data'
      //dùng cái này thay cho json để upload được file ảnh
    },
  });
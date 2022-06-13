import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5000/filters',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})
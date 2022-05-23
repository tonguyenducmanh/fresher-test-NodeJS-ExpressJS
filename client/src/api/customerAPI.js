import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:5000/customers",
    headers: {
      'content-type': 'application/json',
    }
  });
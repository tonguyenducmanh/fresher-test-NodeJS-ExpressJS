import axios from 'axios';

const url = 'http://localhost:5000/customers/'

export const fetchCustomers = () => axios.get(url)
export const countCustomer = () => axios.get(url.concat('count'))
export const createCustomer = (newCustomer) => axios.post(url, newCustomer)
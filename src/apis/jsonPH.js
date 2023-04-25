import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// creating axios instance
export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

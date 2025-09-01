// src/api/staffAxios.js
import axios from 'axios';

const staffAxios = axios.create({
  baseURL: 'http://localhost:8082', // Staff service backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default staffAxios;

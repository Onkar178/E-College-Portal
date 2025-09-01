// src/api/studentAxios.js
import axios from 'axios';

const studentAxios = axios.create({
  baseURL: 'http://localhost:8081',  // your student-service base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for auth token here if needed

export default studentAxios;

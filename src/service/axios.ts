// src/api/axiosInstance.ts
import axios from 'axios';

let token;

if (typeof window !== 'undefined') {
  token = localStorage.getItem('token');
  // use token here
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,  // Base URL for your API
  headers: {
    'Content-Type': 'application/json',
    // Add any other global headers like Authorization, etc.
    'Authorization': `Bearer ${token}`,
    //withCredentials: true
  },
});

export default axiosInstance;

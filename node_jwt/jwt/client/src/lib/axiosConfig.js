import axios from "axios";
import { toast } from "react-toastify";

// Create axios instance with base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// Request interceptor - automatically add token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Response interceptor - handle 401 errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      toast.error("Session expired. Please login again.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

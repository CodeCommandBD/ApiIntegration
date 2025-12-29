import axios from "axios";

// axios instance তৈরি
const api = axios.create({
  baseURL: "http://localhost:5000"
})


// request যাওয়ার আগে interceptor চলবে
api.interceptors.request.use((config) => {

  // এখন fake token ব্যবহার করছি
  const token = "fake-jwt-token"

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
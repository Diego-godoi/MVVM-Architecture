import axios from 'axios'

// config layer
// API consumption by axios
export const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
})

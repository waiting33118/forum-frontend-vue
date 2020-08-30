import axios from 'axios'
import Swal from 'sweetalert2'

const axiosInstance = axios.create({
  baseURL: 'https://forum-express-api.herokuapp.com/api'
})
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false
})

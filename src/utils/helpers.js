import axios from 'axios'
import Swal from 'sweetalert2'

export const apiHelper = axios.create({
  baseURL: 'https://forum-express-api.herokuapp.com/api'
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false
})

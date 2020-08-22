import { apiHelper } from './../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants ({ page, categoryId }) {
    return apiHelper.get('/restaurants', {
      headers: { Authorization: `Bearer ${getToken()}` },
      params: { page, categoryId }
    })
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}

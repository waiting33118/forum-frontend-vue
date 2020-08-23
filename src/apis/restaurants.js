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
  },
  getTop () {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFavorite (restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite (restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}

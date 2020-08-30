import { apiHelper } from './../utils/helpers'

export default {
  getRestaurants ({ page, categoryId }) {
    return apiHelper.get('/restaurants', {
      params: { page, categoryId }
    })
  },
  getRestaurant (restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds')
  },
  getTop () {
    return apiHelper.get('/restaurants/top')
  },
  addFavorite (restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite (restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  }
}

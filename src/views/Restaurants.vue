<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <RestaurantsNavPills :categories="categories" />
      <div class="row">
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :init-restaurant="restaurant"
        />
      </div>
      <RestaurantsPagination
        v-if="totalPage > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import Spinner from './../components/Spinner'
import restaurantAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data () {
    return {
      categories: [],
      categoryId: 0,
      currentPage: -1,
      restaurants: [],
      totalPage: -1,
      perviousPage: -1,
      nextPage: -1,
      isLoading: true
    }
  },
  created () {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ page, categoryId })
  },
  beforeRouteUpdate (to, from, next) {
    this.isLoading = true
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants ({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantAPI.getRestaurants({ page: queryPage, categoryId: queryCategoryId })
        if (response.statusText !== 'OK') throw new Error('data.statusText')
        const { restaurants, categories, categoryId, page, totalPage, prev, next } = response.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage.length
        this.perviousPage = prev
        this.nextPage = next
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取的餐廳資料，請重新整理頁面'
        })
      }
    }
  }
}
</script>

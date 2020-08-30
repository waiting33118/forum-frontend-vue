<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">
        人氣餐廳
      </h1>
      <hr>
      <PopularRestaurantCard
        v-for="restaurant in popularRestaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import PopularRestaurantCard from './../components/PopularRestaurantCard'
import Spinner from './../components/Spinner'
import restaurantAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    PopularRestaurantCard,
    Spinner
  },
  data () {
    return {
      popularRestaurants: [],
      isLoading: true
    }
  },
  created () {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants () {
      try {
        const { data } = await restaurantAPI.getTop()
        this.popularRestaurants = data.restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法讀取熱門餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>

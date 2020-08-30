<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">
        最新動態
      </h1>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'
import Spinner from './../components/Spinner'
import restaurantAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds () {
      try {
        const response = await restaurantAPI.getFeeds()
        if (response.statusText !== 'OK') throw new Error(response.statusText)
        const { comments, restaurants } = response.data
        this.comments = comments
        this.restaurants = restaurants
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

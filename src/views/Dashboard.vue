<template>
  <div class="container py-5">
    <div>
      <h1>
        {{ restaurant.name }}
      </h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>
    <hr>
    <ul>
      <li>
        評論數： {{ restaurant.Comments.length }}
      </li><li>
        瀏覽次數： {{ restaurant.viewCounts }}
      </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'Dashboard',
  data () {
    return {
      restaurant: {
        name: '',
        Category: {
          name: ''
        },
        Comments: [],
        viewCounts: 0
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        const { data } = await restaurantAPI.getRestaurant(restaurantId)
        this.restaurant = {
          ...this.restaurant,
          ...data.restaurant
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>

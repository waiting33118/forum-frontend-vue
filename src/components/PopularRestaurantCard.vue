<template>
  <div
    class="card mb-3"
    style="max-width: 540px;margin: auto;"
  >
    <div class="row no-gutters">
      <div class="col-md-4">
        <router-link :to="{ name:'restaurant', params:{id: restDetail.id}}">
          <img
            class="card-img"
            :src="restDetail.image? restDetail.image :'https://loremflickr.com/320/240/food,dessert,restaurant/?random=2'"
          >
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ restDetail.name }}
          </h5>
          <span class="badge badge-secondary">收藏數：{{ restDetail.FavoriteCount }}</span>
          <p class="card-text">
            {{ restDetail.description }}
          </p>
          <router-link
            :to="{name:'restaurant', params:{ id: restDetail.id}}"
            class="btn btn-primary mr-2"
          >
            Show
          </router-link>

          <button
            v-if="restDetail.isFavorited"
            type="button"
            class="btn btn-danger mr-2"
            @click.stop.prevent="deleteFavorite(restDetail.id)"
          >
            移除最愛
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFavorite(restDetail.id)"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import restaurantAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'PopularRestaurantCard',
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restDetail: this.restaurant
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await restaurantAPI.addFavorite(restaurantId)
        if (data.status !== 'success') throw new Error(status.message)
        this.restDetail = {
          ...this.restDetail,
          FavoriteCount: ++this.restDetail.FavoriteCount,
          isFavorited: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await restaurantAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') throw new Error(status.message)
        this.restDetail = {
          ...this.restDetail,
          FavoriteCount: --this.restDetail.FavoriteCount,
          isFavorited: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    }
  }
}
</script>

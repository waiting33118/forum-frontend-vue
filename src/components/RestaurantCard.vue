<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'restaurant', params:{ id:restaurant.id }}">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category.name }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {
    object-fit: cover;
    object-position: center;
  }
</style>

<script>
import userApi from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initRestaurant
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await userApi.addFavorite(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
          ...this.restaurant,
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
        const { data } = await userApi.deleteFavorite(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    },
    async addLike (restaurantId) {
      try {
        const { data } = await userApi.addLike(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入喜愛，請稍後再試'
        })
      }
    },
    async deleteLike (restaurantId) {
      try {
        const { data } = await userApi.deleteLike(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除喜愛，請稍後再試'
        })
      }
    }
  }
}
</script>

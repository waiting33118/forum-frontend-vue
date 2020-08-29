<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restInfo.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restInfo.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restInfo.image? restInfo.image :'https://loremflickr.com/320/240/food,dessert,restaurant/'"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restInfo.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restInfo.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restInfo.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restInfo.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'dashboard', params:{ id: restInfo.id }}"
      >
        Dashboard
      </router-link>

      <button
        v-if="restInfo.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="removeFavorite(restInfo.id)"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite(restInfo.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restInfo.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="removeLike(restInfo.id)"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike(restInfo.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restInfo: this.restaurant
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await userAPI.addFavorite(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restInfo = {
          ...this.restInfo,
          isFavorited: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請重新嘗試'
        })
      }
    },
    async addLike (restaurantId) {
      try {
        const { data } = await userAPI.addLike(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restInfo = {
          ...this.restInfo,
          isLiked: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入喜愛，請重新嘗試'
        })
      }
    },
    async removeFavorite (restaurantId) {
      try {
        const { data } = await userAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restInfo = {
          ...this.restInfo,
          isFavorited: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請重新嘗試'
        })
      }
    },
    async removeLike (restaurantId) {
      try {
        const { data } = await userAPI.deleteLike(restaurantId)
        if (data.status !== 'success') throw new Error(data.message)
        this.restInfo = {
          ...this.restInfo,
          isLiked: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除喜愛，請重新嘗試'
        })
      }
    }
  }
}
</script>

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
            @click.stop.prevent="deleteFavorite"
          >
            移除最愛
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFavorite"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    addFavorite () {
      this.restDetail = {
        ...this.restDetail,
        isFavorited: true
      }
    },
    deleteFavorite () {
      this.restDetail = {
        ...this.restDetail,
        isFavorited: false
      }
    }
  }
}
</script>

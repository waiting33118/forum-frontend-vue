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
      <a
        class="btn btn-primary btn-border mr-2"
        href="#"
      >Dashboard</a>

      <button
        v-if="restInfo.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="removeFavorite"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        v-if="restInfo.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="removeLike"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike"
      >
        Like
      </button>
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
      restInfo: this.restaurant
    }
  },
  methods: {
    addFavorite () {
      this.restInfo = {
        ...this.restInfo,
        isFavorited: true
      }
    },
    addLike () {
      this.restInfo = {
        ...this.restInfo,
        isLiked: true
      }
    },
    removeFavorite () {
      this.restInfo = {
        ...this.restInfo,
        isFavorited: false
      }
    },
    removeLike () {
      this.restInfo = {
        ...this.restInfo,
        isLiked: false
      }
    }
  }
}
</script>

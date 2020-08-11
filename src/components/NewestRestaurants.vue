<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>
          <a href="#">
            {{ restaurant.name }}
          </a>
          <small>{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>

<script>
import moment from 'moment'
moment.locale('zh-tw')
export default {
  filters: {
    fromNow (value) {
      return moment(value).fromNow()
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

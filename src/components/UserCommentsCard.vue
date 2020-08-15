<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment in comments"
        :key="comment.id"
        :to="{ name:'restaurant', params:{ id:comment.RestaurantId }}"
      >
        <img
          :src="comment.Restaurant.image"
          class="avatar"
          alt="avatar"
        >
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .avatar {
    margin: 2px;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
</style>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

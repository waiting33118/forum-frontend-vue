<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favorite in favoritedRestaurants"
        :key="favorite.id"
        :to="{ name:'restaurant', params:{ id:favorite.id }}"
      >
        <img
          :src="favorite.image"
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
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

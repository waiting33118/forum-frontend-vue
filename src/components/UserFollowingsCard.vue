<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name:'user', params:{ id:following.id }}"
      >
        <img
          :src="following.image"
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
    followings: {
      type: Array,
      required: true
    }
  }
}
</script>

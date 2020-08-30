<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name:'user', params:{ id:follower.id }}"
      >
        <img
          :src="follower.image | emptyImage"
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
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    followers: {
      type: Array,
      required: true
    }
  }
}
</script>

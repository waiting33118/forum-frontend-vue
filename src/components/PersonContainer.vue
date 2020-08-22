<template>
  <div class="col-12 col-sm-4 col-lg-3">
    <router-link :to="{name: 'user',params:{id: person.id}}">
      <img
        :src="person.image? person.image :'http://via.placeholder.com/300x300?text=No+Image'"
        width="140px"
        height="140px"
      >
    </router-link>
    <h2>{{ person.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ person.FollowerCount }}</span>
    <p class="mt-3">
      <button
        v-if="person.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="deleteFollowing(person.id)"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="addFollowing(person.id)"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<style scoped>
  img {
    object-fit: cover;
    object-position: center;
  }
</style>

<script>
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      person: this.user
    }
  },
  methods: {
    async addFollowing (userId) {
      try {
        const { data } = await userAPI.addFollowing(userId)
        if (data.status !== 'success') throw new Error(data.message)
        this.person = {
          ...this.person,
          FollowerCount: this.person.FollowerCount + 1,
          isFollowed: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '追蹤失敗，請重新嘗試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data } = await userAPI.deleteFollowing(userId)
        if (data.status !== 'success') throw new Error(data.message)
        this.person = {
          ...this.person,
          FollowerCount: this.person.FollowerCount - 1,
          isFollowed: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '取消追蹤失敗，請重新嘗試'
        })
      }
    }
  }
}
</script>

<template>
  <div class="col-12 col-sm-4 col-lg-3">
    <a href="#">
      <img
        :src="person.image? person.image :'http://via.placeholder.com/300x300?text=No+Image'"
        width="140px"
        height="140px"
      >
    </a>
    <h2>{{ person.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ person.FollowerCount }}</span>
    <p class="mt-3">
      <button
        v-if="person.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="deleteFollower"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="addFollower"
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
    addFollower () {
      this.person = {
        ...this.person,
        isFollowed: true
      }
    },
    deleteFollower () {
      this.person = {
        ...this.person,
        isFollowed: false
      }
    }
  }
}
</script>

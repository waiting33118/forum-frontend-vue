<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="userProfile.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
        <img
          v-if="userProfile.image"
          :src="userProfile.image"
          alt="avatar"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
  img {
    margin-top: 10px;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
</style>

<script>
import { mapState } from 'vuex'
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserEdit',
  data () {
    return {
      userProfile: {
        id: -1,
        name: '',
        image: ''
      },
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser () {
      this.setUser()
    }
  },
  created () {
    this.setUser()
  },
  methods: {
    setUser () {
      this.userProfile = {
        ...this.userProfile,
        ...this.currentUser
      }
    },
    handleFileChange (e) {
      const { files } = e.target
      if (!files.length) {
        this.userProfile.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.userProfile.image = imageURL
      }
    },
    async handleSubmit (e) {
      try {
        this.isProcessing = true
        const formData = new FormData(e.target)
        const { data } = await userAPI.update({ userId: this.userProfile.id, formData })
        if (data.status !== 'success') throw new Error(data.message)
        this.$router.push({ name: 'user', params: this.userProfile.id })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新資料，請稍後再試'
        })
      }
    }
  }
}
</script>

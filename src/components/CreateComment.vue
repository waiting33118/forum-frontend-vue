<template>
  <form @submit.stop.prevent="submitComment">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="textComment"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>

      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      textComment: '',
      isProcessing: false
    }
  },
  methods: {
    async submitComment () {
      try {
        this.isProcessing = true
        const { data } = await commentAPI.addComment({
          restaurantId: this.restaurantId,
          text: this.textComment
        })
        if (data.status !== 'success') throw new Error(data.message)
        this.$emit('submit-comment-trigger', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.textComment
        })
        this.isProcessing = false
        this.textComment = ''
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '留言失敗，請再次嘗試'
        })
      }
    }
  }
}
</script>

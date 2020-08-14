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
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import uuid from 'uuid/dist/v4'
export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      textComment: ''
    }
  },
  methods: {
    submitComment () {
      this.$emit('submit-comment-trigger', {
        id: uuid(),
        restaurantId: this.restaurantId,
        text: this.textComment
      })
      this.textComment = ''
    }
  }
}
</script>

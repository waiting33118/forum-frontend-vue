<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div
        v-for="comment in comments"
        :key="comment.id"
      >
        <h4>
          <a href="#">
            {{ comment.Restaurant? comment.Restaurant.name: '未命名餐廳' }}
          </a>
        </h4>
        <p>{{ comment.text }}</p>by
        <a href="#">
          {{ comment.User.name }}
        </a>
        {{ comment.createdAt | formNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('zh-tw')
export default {
  filters: {
    formNow (value) {
      return `-${moment(value).fromNow()}`
    }
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

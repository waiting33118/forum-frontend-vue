<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <!-- 美食達人 -->
    <div class="row text-center">
      <PersonContainer
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import PersonContainer from './../components/PersonContainer'
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UsersTop',
  components: {
    NavTabs,
    PersonContainer
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUserData()
  },
  methods: {
    async fetchUserData () {
      try {
        const { data } = await userAPI.getTopUsers()
        this.users = data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    }
  }
}
</script>

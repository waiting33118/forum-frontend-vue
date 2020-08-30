<template>
  <div class="container py-5">
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <template v-if="user.isAdmin">
            <td>admin</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleRole({userId:user.id,isAdmin:user.isAdmin})"
              >
                set as user
              </button>
            </td>
          </template>
          <template v-else>
            <td>user</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleRole({userId:user.id,isAdmin:user.isAdmin})"
              >
                set as admin
              </button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得用戶資料，請稍後再試'
        })
      }
    },
    async toggleRole ({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.editPermission({ userId, isAdmin: (!isAdmin).toString() })
        if (data.status !== 'success') throw new Error(data.message)
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin
            }
          }
          return user
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法更新權限，請稍後再試'
        })
      }
    }
  }
}
</script>

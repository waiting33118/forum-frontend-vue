<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-form-submit="afterFormSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
export default {
  components: {
    AdminRestaurantForm
  },
  methods: {
    afterFormSubmit (formData) {
      for (const [key, value] of formData.entries()) {
        console.log(key, value)
      }
    }
  }
}
</script>

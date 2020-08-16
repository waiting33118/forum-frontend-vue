<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
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
        v-if="restaurant.image"
        :src="restaurant.image"
        alt="uploadImage"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
    >
      送出
    </button>
  </form>
</template>

<style scoped>
  img {
    margin-top: 10px;
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
</style>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-05-17T03:45:22.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 1592,
      name: 'dark cousine',
      createdAt: '2020-05-17T03:28:54.000Z',
      updatedAt: '2020-05-17T03:46:06.000Z'
    },
    {
      id: 1692,
      name: '泰國料理',
      createdAt: '2020-06-10T07:46:42.000Z',
      updatedAt: '2020-06-10T08:06:22.000Z'
    },
    {
      id: 1702,
      name: '越式料理',
      createdAt: '2020-06-10T07:48:52.000Z',
      updatedAt: '2020-06-10T08:06:36.000Z'
    },
    {
      id: 1852,
      name: '6667',
      createdAt: '2020-07-17T08:52:03.000Z',
      updatedAt: '2020-07-17T08:56:37.000Z'
    },
    {
      id: 1862,
      name: '1234',
      createdAt: '2020-07-17T11:12:50.000Z',
      updatedAt: '2020-07-17T11:12:50.000Z'
    }
  ]
}
export default {
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      })
    }
  },
  data () {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: []
    }
  },
  created () {
    this.fetchCategories()
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant
    }
  },
  methods: {
    fetchCategories () {
      this.categories = dummyData.categories
    },
    handleFileChange (e) {
      const { files } = e.target
      if (!files.length) {
        this.restaurant.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-form-submit', formData)
    }
  }
}
</script>

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
const dummyData = {
  profile: {
    id: 652,
    name: 'test',
    email: 'test@example.com',
    password: '$2a$10$uU6.MzP6v.aGO/JSE.znQuQKKKbqIahmL9lSJr2mBjdSxqeFhKPge',
    isAdmin: true,
    image: null,
    createdAt: '2020-08-11T13:06:43.000Z',
    updatedAt: '2020-08-11T13:07:48.000Z',
    Comments: [],
    FavoritedRestaurants: [
      {
        id: 6,
        name: 'Vicenta Gutkowski Test By Nacho',
        tel: '128-905-3953',
        address: '371 Reuben Vista test',
        opening_hours: '00:00',
        description: 'labore',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123',
        viewCounts: 172,
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-07-22T09:21:00.000Z',
        CategoryId: 2,
        Favorite: {
          UserId: 652,
          RestaurantId: 6,
          createdAt: '2020-08-15T07:16:20.000Z',
          updatedAt: '2020-08-15T07:16:20.000Z'
        }
      },
      {
        id: 5,
        name: 'Mitchel Beatty Girl',
        tel: '171-324-8413',
        address: '85408 Francisca Square',
        opening_hours: '08:00',
        description: 'Aut cumque excepturi exercitationem libero voluptates impedit. Enim animi repellendus tempora doloremque. Esse in delectus sequi ullam sed animi.',
        image: 'https://i.imgur.com/awJFBLn.jpg',
        viewCounts: 440,
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-08-13T08:40:52.000Z',
        CategoryId: 3,
        Favorite: {
          UserId: 652,
          RestaurantId: 5,
          createdAt: '2020-08-15T07:16:21.000Z',
          updatedAt: '2020-08-15T07:16:21.000Z'
        }
      },
      {
        id: 7,
        name: 'Miss Letitia Will',
        tel: '(770) 750-6811',
        address: '8145 Laisha Keys',
        opening_hours: '08:00',
        description: 'Aut earum molestiae et ducimus adipisci ut maxime.\r\nVeritatis labore illum et similique cumque qui qui officia omnis.\r\nQui laudantium amet enim natus.\r\nVoluptatem quia est nam ut esse et.',
        image: 'https://i.imgur.com/50clDpn.jpg',
        viewCounts: 117,
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-07-17T16:27:47.000Z',
        CategoryId: 5,
        Favorite: {
          UserId: 652,
          RestaurantId: 7,
          createdAt: '2020-08-15T07:16:22.000Z',
          updatedAt: '2020-08-15T07:16:22.000Z'
        }
      }
    ],
    Followers: [],
    Followings: []
  },
  isFollowed: false
}
export default {
  data () {
    return {
      userProfile: {
        name: '',
        image: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser (userId) {
      const { name, image } = dummyData.profile
      this.userProfile = {
        name,
        image
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
    handleSubmit (e) {
      const formData = new FormData(e.target)
      for (const [name, value] of formData.entries()) {
        console.log(name, value)
      }
    }
  }
}
</script>

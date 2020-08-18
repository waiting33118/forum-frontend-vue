<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="userProfile.image? userProfile.image :'https://via.placeholder.com/300'"
        >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ userProfile.name }}
          </h5>
          <p class="card-text">
            {{ userProfile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ userProfile.commentCounts }}</strong> 已評論餐廳</li>
            <li><strong>{{ userProfile.favoritedRestaurantCounts }}</strong> 收藏的餐廳</li>
            <li><strong>{{ userProfile.followingCounts }}</strong> followings (追蹤者)</li>
            <li><strong>{{ userProfile.followerCounts }}</strong> followers (追隨者)</li>
          </ul>
          <p>
            <router-link :to="{ name:'user-edit', params: { id: userProfile.id } }">
              <button
                type="submit"
                class="btn btn-primary"
              >
                edit
              </button>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>

<script>
export default {
  props: {
    userProfile: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  }
}
</script>

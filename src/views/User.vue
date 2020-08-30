<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard
        :user-profile="userProfile"
        :current-user="currentUser"
      />

      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />
          <br>
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <br>
          <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      userProfile: {
        id: -1,
        name: '',
        email: '',
        image: '',
        commentCounts: 0,
        favoritedRestaurantCounts: 0,
        followerCounts: 0,
        followingCounts: 0
      },
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await userAPI.get(userId)
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings
        } = data.profile
        this.userProfile = {
          id,
          name,
          email,
          image,
          commentCounts: Comments.length,
          favoritedRestaurantCounts: FavoritedRestaurants.length,
          followerCounts: Followers.length,
          followingCounts: Followings.length
        }
        this.followings = Followings
        this.followers = Followers
        this.comments = Comments
        this.favoritedRestaurants = FavoritedRestaurants
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得個人資料，請稍後再試'
        })
      }
    }
  }
}
</script>

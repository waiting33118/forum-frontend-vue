import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import NotFound from '../views/NotFound.vue'
import store from './../store'

Vue.use(VueRouter)

const authorizeAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) return next({ name: 'NotFound' })
  next()
}

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/signin'
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurantsFeeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurantsTop',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'dashboard',
    component: () => import('./../views/Dashboard.vue')
  },
  {
    path: '/users/top',
    name: 'usersTop',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('./../views/User.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('./../views/UserEdit.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('./../views/AdminRestaurants.vue'),
    beforeEnter: authorizeAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('./../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('./../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('./../views/AdminRestaurant.vue'),
    beforeEnter: authorizeAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-category',
    component: () => import('./../views/AdminCategories.vue'),
    beforeEnter: authorizeAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-user',
    component: () => import('./../views/AdminUsers.vue'),
    beforeEnter: authorizeAdmin
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) isAuthenticated = await store.dispatch('fetchCurrentUser')
  const pathWithoutAuthentication = ['SignIn', 'SignUp']
  if (!isAuthenticated && !pathWithoutAuthentication.includes(to.name)) return next('/signin')
  if (isAuthenticated && pathWithoutAuthentication.includes(to.name)) return next('/restaurants')
  next()
})

export default router

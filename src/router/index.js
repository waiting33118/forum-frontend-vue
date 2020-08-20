import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/restaurants'
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
    component: () => import('./../views/AdminRestaurants.vue')
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('./../views/AdminRestaurantNew.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('./../views/AdminRestaurantEdit.vue')
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('./../views/AdminRestaurant.vue')
  },
  {
    path: '/admin/categories',
    name: 'admin-category',
    component: () => import('./../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-user',
    component: () => import('./../views/AdminUsers.vue')
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

export default router

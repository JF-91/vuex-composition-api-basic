import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/counter',
    name:'counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path:'/users',
    name:'users',
    component: () => import('../views/UsersView.vue')
  },
  {
    path:'/pokemon-search',
    name:'pokemon-search',
    component: () => import('../views/SearchPokemon.vue')
  },
  {
    path:'/pokemon/:id',
    name:'pokemon-id',
    component: () => import('../views/PokemonVue.vue')
  },
  {
    path:"/todo",
    name:"todo",
    component: () => import("../views/TodoView.vue")
  },
  {
    path:'/slot',
    name:'slot',
    component: () => import('../views/CustomSlot.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/' 

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadersView from "../views/yc_views/ReadersView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/readers',
    name: 'Readers',
    component: ReadersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

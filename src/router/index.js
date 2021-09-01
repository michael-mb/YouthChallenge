import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadersView from "../views/yc_views/ReadersView";
import ContactView from "../views/ContactView";
import OrphansView from "../views/yc_views/OrphansView";
import TeensView from "../views/yc_views/TeensView";

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
  },
  {
    path:'/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path:'/orphans',
    name: 'Orphans',
    component: OrphansView
  },
  {
    path:'/teens',
    name: 'Teens',
    component: TeensView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

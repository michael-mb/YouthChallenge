import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadersView from "../views/yc_views/ReadersView";
import ContactView from "../views/ContactView";
import OrphansView from "../views/yc_views/OrphansView";
import TeensView from "../views/yc_views/TeensView";
import UniversityView from "../views/yc_views/UniversityView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path:'/readers',
    name: 'Readers',
    component: ReadersView,
    props: true
  },
  {
    path:'/contact',
    name: 'Contact',
    component: ContactView,
    props: true
  },
  {
    path:'/orphans',
    name: 'Orphans',
    component: OrphansView,
    props: true

  },
  {
    path:'/teens',
    name: 'Teens',
    component: TeensView,
    props: true
  },
  {
    path:'/university',
    name: 'University',
    component: UniversityView,
    props: true
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

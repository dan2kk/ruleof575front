import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Screen from "../components/new/Screen"
import Screen3 from "../components/new/Screen3"
import Start from "../components/new/Start"
import { screenData, screen3Data, startData } from "../components/data"

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
    path: '/siganpyo',
    component: Screen,
    props: {
      yJh3RB1Props: screenData.yJh3RB1Props,
      yJh3RB2Props: screenData.yJh3RB2Props,
      yJh3RB3Props: screenData.yJh3RB3Props,
      yJh3RB4Props: screenData.yJh3RB4Props,
      yJh3RB5Props: screenData.yJh3RB5Props,
      yJh3RB6Props: screenData.yJh3RB6Props,
    },
  },
  {
    path: '/menu',
    component: Screen3,
    props: {
      x3eHZw8Props: screen3Data.x3eHZw8Props,
      qlPzu1Props: screen3Data.qlPzu1Props,
      fEdZ7vProps: screen3Data.fEdZ7vProps,
      nso1ChProps: screen3Data.nso1ChProps,
      x1dhSRZProps: screen3Data.x1dhSRZProps,
    },
  },
  {
    path: '/start',
    component: Start,
    props: {
      text_Label: "이름",
      mEH9rYProps: startData.mEH9rYProps,
      x0rpScvProps: startData.x0rpScvProps,
      dP9QAzProps: startData.dP9QAzProps,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

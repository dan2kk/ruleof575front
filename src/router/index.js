import { createRouter, createWebHistory } from 'vue-router'
import Start from "../components/Start";
import { startData } from "../data";

const routes =[
  {
    path: "/",
    component: Start,
    props: { userInfoTimeTableProps: startData.userInfoTimeTableProps, xMenuProps: startData.xMenuProps },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

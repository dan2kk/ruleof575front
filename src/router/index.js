import { createRouter, createWebHistory } from 'vue-router'
import Start from "../components/Start";
import TextboxMenuTab3 from "../components/TextboxMenuTab3";
import XMenu22 from "../components/XMenu22";
import Timetable22 from "../components/Timetable22";
import Cart3 from "../components/Cart3";
import { startData, textboxMenuTab3Data, xMenu22Data, timetable22Data, cart3Data } from "../data";
import Frame1 from "../components/Frame1";


const routes = [
  {
    path: "/",
    component: Start,
    props: { timetableProps: startData.timetableProps, xMenuProps: startData.xMenuProps },
  },
  {
    path: "/frame-1",
    component: Frame1,
  },
  {
    path: "/textbox-menu-tab",
    component: TextboxMenuTab3,
    props: {
      textbox1Props: textboxMenuTab3Data.textbox1Props,
      textbox2Props: textboxMenuTab3Data.textbox2Props,
      textbox3Props: textboxMenuTab3Data.textbox3Props,
      textbox4Props: textboxMenuTab3Data.textbox4Props,
    },
  },
  {
    path: "/menu",
    component: XMenu22,
    props: {
      xMenu2Props: xMenu22Data.xMenu2Props,
      xMenu3Props: xMenu22Data.xMenu3Props,
      xMenu4Props: xMenu22Data.xMenu4Props,
      xMenu5Props: xMenu22Data.xMenu5Props,
      xMenu6Props: xMenu22Data.xMenu6Props,
    },
  },
  {
    path: "/cart",
    component: Cart3,
    props: { timetableProps: cart3Data.timetableProps, timetableProps2: cart3Data.timetableProps2 },
  },
  {
    path: "/*",
    component: Timetable22,
    props: {
      timeline1Props: timetable22Data.timeline1Props,
      timeline2Props: timetable22Data.timeline2Props,
      timeline3Props: timetable22Data.timeline3Props,
      timeline4Props: timetable22Data.timeline4Props,
      timeline5Props: timetable22Data.timeline5Props,
      timeline6Props: timetable22Data.timeline6Props,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

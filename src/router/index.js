import { createRouter, createWebHistory } from 'vue-router'
import Start from "../components/Start";
import Frame1 from "../components/Frame1";
import { frame1Data, startData } from "../data";

const routes =[
  {
    path: "/",
    component: Start,
    props: { userInfoTimeTableProps: startData.userInfoTimeTableProps, xMenuProps: startData.xMenuProps },
  },
  {
    path: "/test",
    component: Frame1,
    props: { 
    textbox:frame1Data.textbox,
    userinfobox: frame1Data.userinfobox,
    loginbutton: frame1Data.loginbutton,
    iconbuttons: frame1Data.iconbuttons,
    menu: frame1Data.menu,
    gyoyangrecord: frame1Data.gyoyangrecord,
    graduationinforecord: frame1Data.graduationinforecord,
    courselistrecord: frame1Data.courselistrecord,
    courseinforecord: frame1Data.courseinforecord,
    timeblock: frame1Data.timeblock,
    timeline: frame1Data.timeline,
    textboxMenuTabProps: frame1Data.textboxMenuTabProps,
    initialMenuProps: frame1Data.initialMenuProps,
    gyoyangTableProps: frame1Data.gyoyangTableProps,
    graduationInfoTableProps: frame1Data.graduationInfoTableProps,
    courseListTableProps: frame1Data.courseListTableProps,
    timetableProps: frame1Data.timetableProps,
    userInfoTimeTableProps: frame1Data.userInfoTimeTableProps, },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

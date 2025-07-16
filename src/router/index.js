import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from "@/views/AboutPage.vue";
import MyMain from "@/views/MyMain.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";


const routes = [
  {
    name: "mymain",
    path: "/test",
    component: MyMain,
  },
  {
    name: "aboutpage",
  
    path:"/about",
   component:AboutPage,
  },
  {
    name:"ForgetPassword",
    path:"/ForgetPassword",
    component:ForgetPassword,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

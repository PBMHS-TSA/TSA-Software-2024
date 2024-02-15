import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import chat from "../views/Chat.vue";
import mf from "../views/mf.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat",
    name: "Chat",
    component: chat,
  },{
    path: "/mf",
    name: "Mf",
    component: mf,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
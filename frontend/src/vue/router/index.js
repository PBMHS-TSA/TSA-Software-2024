import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import chat from "../views/Chat.vue";
import mf from "../views/mf.vue";
import { CredentialManager,socket } from "../../globals";
import Map from "../views/components/Map.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/chat",
      name: "Chat",
      component: chat,
    },
    {
      path: "/mf",
      name: "Mf",
      component: mf,
    },
    {
      path: "/map",
      name: "Map",
      component: Map,
    },
    {path:"/logout",name:"Logout",beforeEnter:(to,from,next)=>{window.location.href= `http://localhost/socket/logout/${socket.id}`}},
    {
      path: "/sessionid/:token",
      name: "Session Id",
      component: mf,
      beforeEnter: (to, from, next) => {
        let id = to.params.token;
        if (token) {
          atob(token);
          CredentialManager.AddCheck();
        }
        if (to.params.id === "123") {
          next();
        } else {
          next({ name: "Home" });
        }
      },
    },
  ],
});

export default router;

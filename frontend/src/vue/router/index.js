import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import chat from "../views/Chat.vue";
import mf from "../views/mf.vue";
import profile from "../views/profile.vue";
import { CredentialManager, socket } from "../../globals";
import Map from "../views/components/Map.vue";
import CD from "../views/CreateDog.vue";
import MV from "../views/MobileView.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/mobileview",
      name: "MobileView",
      component: MV,
    },
    {
      path: "/createdog",
      name: "Create Dog",
      component: CD,
    },
    {
      path: "/profile",
      name: "Prfile",
      component: profile,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/chat/:id",
      name: "Chat",
      component: chat,
      props:true
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
    {
      path: "/logout",
      name: "Logout",
      beforeEnter: (to, from, next) => {
        window.location.href = `http://localhost/socket/logout/${socket.id}`;
      },
    },
    {
      path: "/sessionid/:token",
      name: "Session Id",
      component: mf,
      beforeEnter: (to, from, next) => {
        let token = to.params.token;
        if (token) {
          let cred = atob(token).split(".");

          CredentialManager.AddCheck(cred[0], cred[1], undefined, (res) => {});
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

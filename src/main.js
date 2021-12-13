import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Bio from "@/views/Bio.vue";
import Shows from "@/views/Shows.vue";
import News from "@/views/News.vue";
import Music from "@/views/Music.vue";
import Merch from "@/views/Merch.vue";
import Contact from "@/views/Contact.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/bio",
      component: Bio,
    },
    {
      path: "/shows",
      component: Shows,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/music",
      component: Music,
    },
    {
      path: "/merch",
      component: Merch,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

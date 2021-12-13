import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

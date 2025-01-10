import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/archive",
    name: "Archive",
    component: () =>
      import("../views/Archive.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/Contact.vue")
  },
  {
    path: "/articles/:id", 
    name: "show-article",
    component: () => import("../views/ShowArticle.vue")
  },
  {
    path: "/jsquantum-simulator",
    name: "jsquantum-simulator",
    component: () =>
      import("../views/AppQuantum.vue")
  },
  {
    path: "/special-pages",
    name: "special-pages",
    component: () =>
      import("../views/SpecialPages.vue")
  },
  {
    path: "/selling-pages",
    name: "selling-pages",
    component: () =>
      import("../views/SellingPages.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

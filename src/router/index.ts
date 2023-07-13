import { createRouter, createWebHistory } from "vue-router";
import MaintainView from "../views/MaintainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "base",
      component: MaintainView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MaintainView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/MaintainView.vue"),
    },
    {
      path: "/post-product",
      name: "post-product",
      component: () => import("../views/MaintainView.vue"),
    },
  ],
});

export default router;

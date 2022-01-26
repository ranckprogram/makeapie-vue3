import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { name: "echartList", path: "/", component: () => import("@/pages/List") },
  {
    name: "echartItem",
    path: "/:id",
    component: () => import("@/pages/Detail"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

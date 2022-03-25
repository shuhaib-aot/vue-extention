import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);
function LazyLoading(view: string) {
  return () => import(`@/views/${view}.vue`);
}
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: LazyLoading("Home"),
  },
  {
    path: "/about",
    name: "About",
    component: LazyLoading("About"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

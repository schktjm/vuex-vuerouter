import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home/Home.vue";
import About from "../components/About/About.vue";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/404.vue";
import store from "../store"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.state.isLoggedIn && to.path != '/login') {
    next('/login');
  }
  next();
});

export default router;

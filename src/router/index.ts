import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/advertisements/home/index.vue";
import NewView from "../views/advertisements/new/index.vue";
import DetailsView from "../views/advertisements/details/index.vue";
import SignInView from "../views/auth/sign-in/index.vue";
import SignUpView from "../views/auth/sign-up/index.vue";
import { auth } from "@/domain/firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new",
      name: "new",
      component: NewView,
    },
    {
      path: "/advertisements/:id",
      name: "details",
      component: DetailsView,
    }
  ],
});

router.beforeResolve(async (to, from) => {
  if (!auth.currentUser && to.name !== "sign-in") {
    return { name: "sign-in" };
  }
});

export default router;

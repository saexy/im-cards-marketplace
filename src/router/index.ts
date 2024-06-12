import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import store from "@/store";
import AuthView from "@/views/auth/AuthView.vue";
import AuthLoginView from "@/views/auth/AuthLoginView.vue";
import AuthRegisterView from "@/views/auth/AuthRegisterView.vue";
import AppView from "@/views/app/AppView.vue";
import { http } from "@/utils/http";
import AppHomeView from "@/views/app/AppHomeView.vue";
import AppMyCardsView from "@/views/app/AppMyCardsView.vue";

const AuthGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (!to.name?.toString().includes("auth")) {
    if (!localStorage.getItem("token")) {
      next("/auth/login");
    }
    let user = null;
    try {
      const response = await http.get("/me");
      user = response.data;

      store.commit("storeUser", user);
      next();
    } catch (error) {
      next("/auth/login");
    }
  } else {
    if (localStorage.getItem("token")) {
      let user = null;
      try {
        const response = await http.get("/me");
        user = response.data;

        store.commit("storeUser", user);
        next("/app");
      } catch (error) {
        next();
      }
    } else {
      next();
    }
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    name: "auth",
    beforeEnter: AuthGuard,
    component: AuthView,
    redirect: "/auth/login",
    children: [
      {
        path: "login",
        name: "auth-login",
        meta: {
          title: "IM - Login",
        },
        component: AuthLoginView,
      },
      {
        path: "register",
        name: "auth-register",
        meta: {
          title: "IM - Register",
        },
        component: AuthRegisterView,
      },
    ],
  },
  {
    path: "/app",
    name: "app",
    beforeEnter: AuthGuard,
    component: AppView,
    redirect: "/app/home",
    children: [
      {
        path: "home",
        name: "app-home",
        meta: {
          title: "IM - Página Inicial",
        },
        component: AppHomeView,
      },
      {
        path: "my-cards",
        name: "app-my-cards",
        meta: {
          title: "IM - Minhas Cartas",
        },
        component: AppMyCardsView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/auth",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to: any) => {
  document.title = to.meta?.title ?? "IM - Cards Marketplace";
});

export default router;

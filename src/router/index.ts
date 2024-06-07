import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthView from "@/views/auth/AuthView.vue";
import AuthLoginView from "@/views/auth/AuthLoginView.vue";
import AuthRegisterView from "@/views/auth/AuthRegisterView.vue";
import AppView from "@/views/app/AppView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    name: "auth",
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
    component: AppView,
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

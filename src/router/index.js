import { createWebHashHistory, createRouter } from "vue-router";

import layouts from "@/layouts/index.vue";

const routes = [
  {
    path: "",
    component: layouts,
    name: "layouts",
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "",
        component: () => import("@/pages/home/index.vue"),
        name: "Home",
        meta: {
          title: "Home",
        },
      },
      {
        path: "Promos",
        component: () => import("@/pages/Promos/index.vue"),
        name: "Promos",
        meta: {
          title: "Promos",
        },
      },
      {
        path: "Wallet",
        component: () => import("@/pages/Wallet/index.vue"),
        name: "Wallet",
        meta: {
          title: "Wallet",
        },
      },
      {
        path: "VIP",
        component: () => import("@/pages/VIP/index.vue"),
        name: "VIP",
        meta: {
          title: "VIP",
        },
      },
      {
        path: "Profile",
        component: () => import("@/pages/Profile/index.vue"),
        name: "Profile",
        redirect: { name: "Settings" },
        meta: {
          title: "Profile",
        },
        children: [
          {
            path: "Settings",
            component: () => import("@/pages/Profile/components/Settings.vue"),
            name: "Settings",
            meta: {
              title: "Settings",
            },
          },
          {
            path: "KYC",
            component: () => import("@/pages/Profile/components/Kyc.vue"),
            name: "KYC",
            meta: {
              title: "KYC",
            },
          },
        ],
      },
      {
        path: "PromoDetails",
        component: () => import("@/pages/PromoDetails/index.vue"),
        name: "PromoDetails",
        meta: {
          title: "PromoDetails",
        },
      },
      {
        path: "Games",
        component: () => import("@/pages/Games/index.vue"),
        name: "Games",
        meta: {
          title: "Games",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from) => {
  // console.log(to.meta.title);
  document.title = to.meta.title;
  // const token = localStorage.getItem('token')
  // if (!token && to.name !== 'login') {
  //     return { name: 'login' }
  // } else {
  //     return true
  // }
});

export default router;

import { createWebHashHistory, createRouter } from "vue-router";

import layouts from "@/layouts/index.vue";

const routes = [
  {
    path: "/",
    component: layouts,
    name: "layouts",
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/",
        component: () => import("@/pages/home/index.vue"),
        name: "home",
        meta: {
          title: "统计仪表盘",
          icon: "Odometer",
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

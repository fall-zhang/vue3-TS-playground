import type { RouteRecordRaw } from 'vue-router'
// const allFile = import.meta.glob('@/pages/**/*.vue')
// console.log(allFile)
const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/linktop2',
    component: import('@C/_collection/index.vue'),
    meta: { pageTitle: '模块查看系统' },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/LayoutPage1/index.vue'),
        meta: { pageTitle: '模块查看系统' }
      }
    ]
  }
  // {
  //   path: '/linktop2',
  //   name: 'linktop2',
  //   component: BlankRouter,
  //   meta: { menuName: "领效2.0" },
  //   children: [
  //     {
  //       path: '/linktop2/genCode',
  //       name: 'linktop2-genCode',
  //       // (genVueSFC.[hash].js)
  //       component: () => import('@/pages/genVueSFC/index.vue'),
  //       meta: { menuName: "代码生成" },
  //     },
  //     {
  //       path: '/linktop2/about',
  //       name: 'linktop2-about',
  //       component: () => import('@/pages/dialog/index.vue'),
  //       meta: { menuName: "更多" },
  //     }
  //   ]
  // },
]
export default asyncRoutes

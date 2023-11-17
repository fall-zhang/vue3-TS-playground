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
        component: () => import('@P/EditTable/index.vue'),
        meta: { pageTitle: '系统' }
      }
    ]
  },
  {
    path: '/edit-table',
    name: 'linktop23',
    component: () => import('@P/EditTable/EditTable.vue'),
    meta: { pageTitle: '模块系统' },
  },
  {
    path: '/edit-table2',
    name: 'linktop223',
    component: () => import('@P/EditTable2/EditTableSelect.vue'),
    meta: { pageTitle: '模块系统' },
  }
  // {
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

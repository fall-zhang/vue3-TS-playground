import type { RouteRecordRaw } from 'vue-router'
// import { BlankLayout } from '../layout'
import { isDevelopment } from '@/config'
import ErrorPage404 from '@/pages/404.vue'
// import RedirectRouter from '@/pages/ConstantPage/RedirectRouter.vue'
const constRouters: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@P/home.vue')
  }, {
    path: '/components',
    component: isDevelopment ? () => import('@C/_collection/index.vue') : ErrorPage404,
    meta: { pageTitle: '模块查看系统' },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/EditTable/EditTable.vue'),
        meta: { pageTitle: '模块查看系统' }
      }
    ]
  }, {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:id',
    component: ErrorPage404
  }

]
export default constRouters

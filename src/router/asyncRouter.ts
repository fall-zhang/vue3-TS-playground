import type { RouteRecordRaw } from 'vue-router'
const allFile = import.meta.glob('@/pages/**/*.vue')
console.log(allFile)
const asyncRoutes: RouteRecordRaw[] = []
export default asyncRoutes

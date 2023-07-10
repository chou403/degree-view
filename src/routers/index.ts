import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from "./content"

const router = createRouter({
  history: createWebHistory(),    // 使用history模式
  // history: createWebHashHistory(),	 // 使用hash模式
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/Home' && to.path !== '/') {
//       const store = useCommon()
//       if (store.routes.length < 1) {

//         CommonService.GetDynamicRoutes.then((res:any) => {
//               store.addRoutes(res.data.data, router)
//               next({ path: to.path, replace: true })

//           }).catch(_ => {
//               next()
//           })

//       } else {
//           next()
//       }
//   } else {
//       next()
//   }
// })

export default router

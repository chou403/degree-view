//定义关于counter的store
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
let modules = import.meta.glob("@/views/*.vue")

/*defineStore 是需要传参数的，其中第一个参数是id，就是一个唯一的值，
简单点说就可以理解成是一个命名空间.
第二个参数就是一个对象，里面有三个模块需要处理，第一个是 state，
第二个是 getters，第三个是 actions。
*/
const useCommonStore = defineStore('common', {
    state: () => {
        return {
            // 路由表
            routes: [] as Array<RouteRecordRaw>
        }
    },

    getters: {

    },

    actions: {
        // 添加动态路由，并同步到状态管理器中
        addRoutes(data: Array<any>, router: any) {
            data.forEach(m => {
                this.routes.push({
                    path: m.path,
                    name: m.name,
                    // 错误示例：components:()=>import(`../views/Pages/${m.component}`)
                    // 正确示例如下：
                    component: modules[`@/views/${m.component}`],
                })
            })

            this.routes.forEach(m => router.addRoute(m))
        },
    }
})

export default useCommonStore
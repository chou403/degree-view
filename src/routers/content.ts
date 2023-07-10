// 路由 自动化
const files = import.meta.glob('./modules/*.ts')
let routers: any = []
for (const key in files) {
    files[key]().then((res: any) => {
        routers[key.replace(/(\.\/module\/|\.ts)/g, '')] = res.default
    })
}

export default routers;

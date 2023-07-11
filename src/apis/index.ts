// http 自动化
const files = import.meta.glob('./modules/*.ts')
const api: any = {}
for (const key in files) {
    files[key]().then((res: any) => {
        api[key.replace(/(\.\/modules\/|\.ts)/g, '')] = res.default
    })
}

export default api;
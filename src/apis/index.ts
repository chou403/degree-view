// http 自动化
const files = import.meta.glob('./modules/*.ts')
let apis: any = []
for (const key in files) {
    files[key]().then((res: any) => {
        apis[key.replace(/(\.\/module\/|\.ts)/g, '')] = res.default
    })
}

export default apis;

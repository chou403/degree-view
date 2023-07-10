// store 自动化
const files = import.meta.glob('./modules/*.ts')
let modules: any = {}
for (const key in files) {
    files[key]().then((res: any) => {
        modules[key.replace(/(\.\/module\/|\.ts)/g, '')] = res.default
    })
}

export default modules;

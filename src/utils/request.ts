import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import NProgress from 'nprogress'
import { showMessage } from "./status";   // 引入状态码文件
import { showFailToast } from 'vant';
// import config from '..config/index';

interface ResType<T> {
    flag: boolean
    code: number
    data?: T
    message: string
    err?: string
}

interface Http {
    get<T>(url: string, params?: unknown): Promise<ResType<T>>

    post<T>(url: string, params?: unknown): Promise<ResType<T>>

    upload(url: string, params?: unknown): Promise<string>

    download(url: string): void
}

// axios对象
const service: AxiosInstance = axios.create({
    // axios请求基础URL
    // 由于本项目使用mock + vite-plugin-mock启动的mock服务，默认使用的端口号与页面一致
    baseURL: "/degree",
    timeout: 5000,
    withCredentials: true, // 异步请求携带cookie
    // responseType: "blob",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})


// 添加请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            // @ts-ignore
            config.headers.token = token
        }
        // 在发送请求之前做些什么
        return config
    },
    (error: any) => {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

//http response 拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        // const dataAxios = response.data
        // 这个状态码是和后端约定的
        // const code = dataAxios.reset
        // return dataAxios
        return response
    },
    (error: any) => {
        const { response } = error;
        if (response) {
            switch (response.status) {
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                    break
                // 403 token过期                
                // 登录过期对用户进行提示                
                // 清除本地token和清空vuex中token对象                
                // 跳转登录页面                
                case 403:
                    sessionStorage.clear()
                    break
                // 404请求不存在                
                case 404:
                    break;
                // 其他错误，直接抛出错误提示                
                default:
            }

            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);           // 传入响应码，匹配响应码对应信息
            return Promise.reject(response.data);
        } else {
            showFailToast('网络连接异常,请稍后再试!');
        }
    }
);

export const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            service
                .get(url, { params })
                .then((res) => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch((err) => {                    
                    NProgress.done()
                    reject(err.data)
                })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            service
                .post(url, JSON.stringify(params))
                .then((res) => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch((err) => {
                    NProgress.done()
                    reject(err.data)
                })
        })
    },
    upload(url, file) {
        return new Promise((resolve, reject) => {
            NProgress.start()
            service
                .post(url, file, {
                    responseType: 'blob',
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then((res) => {
                    NProgress.done()
                    resolve(res.data)
                })
                .catch((err) => {
                    NProgress.done()
                    reject(err.data)
                })
        })
    },
    download(url) {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = url
        iframe.onload = function () {
            document.body.removeChild(iframe)
        }
        document.body.appendChild(iframe)
    },
}

// export default http
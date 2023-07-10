import axios from 'axios'
import { showMessage } from "./status";   // 引入状态码文件
import { showFailToast } from 'vant';
// import config from '..config';

// axios对象
const service = axios.create({
    // axios请求基础URL
    // 由于本项目使用mock + vite-plugin-mock启动的mock服务，默认使用的端口号与页面一致
    baseURL: "/api",
    timeout: 5000,
    withCredentials: true, // 异步请求携带cookie
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'token': '80c483d59ca86ad0393cf8a98416e2a1'
    }
})

// 添加请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config
    },
    error => {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

//http response 拦截器
service.interceptors.response.use(
    response => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        // const dataAxios = response.data
        // 这个状态码是和后端约定的
        // const code = dataAxios.reset
        // return dataAxios
        return response;
    },
    error => {
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

// 封装 post 请求
let post = function (url = "", data_ = {}) {
    return new Promise((resolve, reject) => {
        service.post(url, data_).then((res) => {
            // 成功
            return resolve(res)
        }).catch((err) => {
            // 失败
            return reject(err)
        })
    })
}

// 封装 get 请求
let get = function (url = "", data_ = {}) {
    return new Promise((resolve, reject) => {
        let params = data_;
        service.get(url, {
            params
        }).then((res) => {
            // 成功
            return resolve(res)
        }).catch((err) => {
            // 失败
            return reject(err)
        })
    })
}

export default {
    post,
    get,
}
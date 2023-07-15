import { http } from '@/utils/request'

export default {
    commonLogin(params: any) {
        return http.post('/login/commonLogin', params)
    },
    getLoginQr(params: any) {
        return http.get('/login/getLoginQr', params)
    },
    bindUserIdAndToken(params: any) {
        return http.get('/login/bindUserIdAndToken', params)
    }
}
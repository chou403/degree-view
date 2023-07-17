import { http } from '@/utils/request'

export default {
    commonLogin(params: any) {
        return http.post('/login/commonLogin', params)
    },
    getLoginQr() {
        return http.upload('/login/getLoginQr')
    },
    bindUserIdAndToken(params: any) {
        return http.get('/login/bindUserIdAndToken', params)
    }
}
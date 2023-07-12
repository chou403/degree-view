import { http } from '@/utils/request'

export default {
    getUser(params: any) {
        return http.get('/getUser', params)
    },
    getPerson(params: any) {
        return http.get('/getPerson', params)
    }
}


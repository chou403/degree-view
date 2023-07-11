import http from '@/utils/request'

export default {
     testApi(params: any) {        
        return http.get('/test', params)
    },
    GetDynamicRoutes(params: any) {
        return http.get('/routes', params)
    }
}


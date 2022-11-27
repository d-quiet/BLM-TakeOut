import http from '../utils/https'

// 登录接口
export function checkUser(data) {
    return http({
        url: '/api/userCheck',
        method: 'post',
        data
    })
}

// 注册接口
export function reg(data) {
    return http({
        url: '/api/regUser',
        method: 'post',
        data
    })
}
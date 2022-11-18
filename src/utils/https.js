import axios from 'axios'
import { Toast } from 'vant'

//创建一个axios对象
const http = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        http.get(url, { params }).then((resp) => {
            resolve(resp.data);
        }, err => {
            reject(err);
        });
    });
}

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        http.post(url, data, {
            headers: {
                ContentType: 'Application/json',
            }
        }).then((resp) => {
            resolve(resp.data);
        }, err => {
            reject(err);
        });
    });
}

export default http
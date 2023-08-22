import axios from 'axios'
import {ElMessage} from "element-plus";
import router from "@/router";
const instance = axios.create({
    baseURL: 'http://localhost:8080',//配置项目固定域名
    timeout: 3000//设置超时时间
})
export const domain = "http://localhost:8080/ssmqj7b0/upload/";

// 请求拦截
// 所有的网络请求都会走这个方法,可以在请求添加自定义内容
instance.interceptors.request.use(config => {
    config.headers['pet-token'] = localStorage.getItem('token') // 请求头带上token
    return config
}, error => {
    return Promise.reject(error)
})


// 响应拦截
// 此处可以根据服务器返回的状态码做相应的数据
instance.interceptors.response.use(response => {
    const res = response.data
    if (response.status == 200) {
        if (res.code == 0) {
            if (response.config.method == 'post') {
                ElMessage.success("操作成功！");
            }
        } else {
            ElMessage.error(res.msg);
            if (res.code == 401) {
                router.push('loginIndex')
            }
        }

    } else {
        ElMessage.error("服务器连接失败");
    }
    return response.data
}, error => {
    return Promise.reject(error)
})


//封装get和post请求
export function get(url, params) {
    return instance.get(url, {params})
}

export function post(url, params) {
    return instance.get(url, {params})
}

export default instance
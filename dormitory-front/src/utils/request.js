import axios from "axios";
import {showFailToast} from "vant/es";
import router from "../config/router";

const request = axios.create({
    baseURL: 'http://localhost:9000',
    timeout: 5000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
/*
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers['Authorization'] = useUserStore().getBearerToken;

    // config.headers['token'] = user.token;  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});
*/


/*request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    const token = useUserStore().loginInfo.token
    config.headers['Authorization'] = 'Bearer ' + token;  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});*/

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        // 当权限验证不通过的时候给出提示
        if (res.code === '401') {
            showFailToast(res.msg)
            router.push("/")
        }
        return res;
    },
    error => {
        showFailToast('接口或网络异常')
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default request
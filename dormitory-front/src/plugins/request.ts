import axios,{AxiosInstance} from "axios";

const request: AxiosInstance = axios.create({
    baseURL: 'http://localhost:9000/api',
});


request.defaults.withCredentials = true;

request.interceptors.request.use(function (config) {
    console.log('我要发请求',config)
    return config;
},function (error) {
    return Promise.reject(error);
    });

request.interceptors.response.use(function (respone) {
    console.log('我要响应请求',respone)
    return respone.data;
},function (error) {
    return Promise.reject(error);
})




export default request
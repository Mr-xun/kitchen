import request from "./http";
const ORIGIN_PATH = "http://62.234.138.175:8080/kitchen"; //远端
const LOCAL_PATH = "http://192.168.13.240:8080/kitchen"; //本地
// let _CURRENT_PATH_ = (function() {
//     //选择接口
//     let currentHost = window.location.host;
//     switch (currentHost) {
//         case "62.234.138.175:8000":
//             return ORIGIN_PATH;
//         default:
//             return ORIGIN_PATH;
//     }
// })();
export default {
    registerAccount(params) {
        //用户注册
        return request.post(ORIGIN_PATH + "/user/register", params);
    },
    loginAccount(params) {
        //用户登录
        return request.post(ORIGIN_PATH + "/user/login", params);
    }
};

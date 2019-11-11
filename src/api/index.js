import request from "./http";
const ORIGIN_PATH = "http://62.234.138.175:8080/kitchen"; //远端
// const LOCAL_PATH = "http://192.168.13.240:8080/kitchen"; //本地
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
    },
    outLoginAccount(params) {
        //用户退出登录
        return request.post(ORIGIN_PATH + "/user/logout", params);
    },
    getUserInfo(params) {
        //获取用户信息
        return request.post(ORIGIN_PATH + "/user/getInfo", params);
    },
    getStoryPictureList() {
        //获取厨房故事列表
        return request.get(ORIGIN_PATH + "/food/getFoodList");
    },
    getStoryPictureLook(params) {
        //查看厨房故事单个详情
        return request.post(ORIGIN_PATH + "/food/getFoodDetail", params);
    },
    giveLike(params) {
        //点赞
        return request.post(ORIGIN_PATH + "/food/praiseFoodInfo", params);
    },
    lookDisheDetails(id) {
        return request.get(
            `http://120.55.28.235/public/getRecipeListByIds.shtml?ids=263893360`
        );
    }
};

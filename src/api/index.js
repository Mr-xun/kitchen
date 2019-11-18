import request from './http';
const ORIGIN_PATH = 'http://62.234.138.175:8080/kitchen'; //远端
// const LOCAL_PATH = "http://192.168.13.240:8080/kitchen"; //本地

export default {
	registerAccount(params) {
		//用户注册
		return request.post(ORIGIN_PATH + '/user/register', params);
	},
	loginAccount(params) {
		//用户登录
		return request.post(ORIGIN_PATH + '/user/login', params);
	},
	outLoginAccount() {
		//用户退出登录
		return request.post(ORIGIN_PATH + '/user/logout');
	},
	getUserInfo(params) {
		//获取用户信息
		return request.post(ORIGIN_PATH + '/user/getInfo', params);
	},
	getStoryPictureList(params) {
		//获取厨房故事列表
		return request.post(ORIGIN_PATH + '/food/getFoodList', params);
	},
	getStoryPictureLook(params) {
		//查看厨房故事单个详情
		return request.post(ORIGIN_PATH + '/food/getFoodDetail', params);
	},
	giveLike(params) {
		//点赞
		return request.post(ORIGIN_PATH + '/food/praiseFoodInfo', params);
	},
	collectionFood(params) {
		//收藏
		return request.post(ORIGIN_PATH + '/relation/collectionFoodInfo', params);
	},
	removeCollectionFood(params) {
		//移除收藏
		return request.post(ORIGIN_PATH + '/relation/removeCollectionInfo', params);
	},
	getCollectionFoods(params) {
		//收藏美食列表
		return request.post(ORIGIN_PATH + '/relation/getUserCollections', params);
	},
	collectionHistory(params) {
		//保存历史
		return request.post(ORIGIN_PATH + '/relation/collectionHistoryInfo', params);
	},
	getCollectionHistory(params) {
		//获取历史记录
		return request.post(ORIGIN_PATH + '/relation/getHistoryInfo', params);
	},
	collectionBasket(params) {
		//收集菜篮子
		return request.post(ORIGIN_PATH + '/relation/collectionBasketInfo', params);
	},
	removeBasket(params) {
		//移除菜篮子
		return request.post(ORIGIN_PATH + '/relation/removeBasketInfo', params);
	},
	getBasketList(params) {
		//获取菜篮子列表
		return request.post(ORIGIN_PATH + '/relation/getBasketInfo', params);
	},
	lookDisheDetails(id) {
		return request.get(`http://120.55.28.235/public/getRecipeListByIds.shtml?ids=263893360`);
	}
};

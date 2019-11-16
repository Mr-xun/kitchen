import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Button, Toast } from 'antd-mobile';
import '../styles/more.scss';
import HaveInfo from '../components/More/HaveInfo';
import NoInfo from '../components/More/NoInfo';
import api from '../api';

const Item = List.Item;
const mapStateToProps = (state, props) => {
	return {
		user_info: state.user_info
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		removeUser: () => {
			dispatch({
				type: 'USER_INFO',
				payload: {}
			});
		}
	};
};
class MoreUI extends Component {
	goLogin = () => {
		this.props.history.push('/kitchen/login');
	};
	goHistory = () => {
		this.props.history.push('/kitchen/history');
	};
	goCollect = () => {
		// const { user_info } = this.props;
		this.props.history.push('/kitchen/collect');

		// if (user_info.account) {
		// 	this.props.history.push('/kitchen/collect');
		// } else {
		// 	Toast.info('请先登录', 0.5, () => {
		// 		this.goLogin();
		// 	});
		// }
	};
	goShopBasket = () => {
		this.props.history.push('/kitchen/shopBasket');

		// const { user_info } = this.props;
		// if (user_info.account) {
		// 	this.props.history.push('/kitchen/shopBasket');
		// } else {
		// 	Toast.info('请先登录', 0.5, () => {
		// 		this.goLogin();
		// 	});
		// }
	};
	goodReputate = () => {
		const { user_info } = this.props;
		if (user_info.account) {
			Toast.info('点赞成功', 1);
		} else {
			Toast.info('请先登录', 0.5, () => {
				this.goLogin();
			});
		}
	};
	outLogin = () => {
		api
			.outLoginAccount()
			.then((res) => {
				let { code, msg } = res.data;
				if (code === 0) {
					this.props.removeUser();
				} else {
					Toast.info(msg, 1);
				}
			})
			.catch((err) => {
				Toast.info('服务器异常', 1);
			});
	};
	render() {
		const { user_info } = this.props;
		let TopInfo = user_info.account ? <HaveInfo userInfo={user_info} /> : <NoInfo />;
		let OutLogin = () => (
			<div className="outLogin-btn">
				<Button type="warning" onClick={this.outLogin}>
					退出登录
				</Button>
			</div>
		);
		let OutBtn = user_info.account ? <OutLogin /> : null;
		return (
			<div className="more-main">
				<div className="more-title"> 更多 </div> {TopInfo}
				<div className="list-cont">
					<List>
						<Item
							thumb={require('../assets/images/shoucang_1.png')}
							arrow="horizontal"
							onClick={this.goCollect}
						>
							菜谱收藏
						</Item>
						<Item
							thumb={require('../assets/images/lanzi.png')}
							onClick={this.goShopBasket}
							arrow="horizontal"
						>
							菜篮子
						</Item>
						<Item
							thumb={require('../assets/images/history.png')}
							arrow="horizontal"
							onClick={this.goHistory}
						>
							历史记录
						</Item>
						<Item
							thumb={require('../assets/images/dianzan.png')}
							onClick={this.goodReputate}
							arrow="horizontal"
						>
							用着不错， 赏个好评去
						</Item>
					</List>
				</div>
				{OutBtn}
			</div>
		);
	}
}
const More = connect(mapStateToProps, mapDispatchToProps)(MoreUI);
export default More;

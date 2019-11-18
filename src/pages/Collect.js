import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import '../styles/collect.scss';
import { connect } from 'react-redux';
import api from '../api';
const mapStateToProps = (state, props) => {
	return {
		user_info: state.user_info
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {};
};
class HistoryUI extends Component {
	constructor() {
		super();
		this.state = {
			showRemove: false,
			listData: []
		};
	}
	goBack = () => {
		this.props.history.go(-1);
	};
	controlOpenRemove = () => {
		this.setState({
			showRemove: true
		});
	};
	controlCloseRemove = () => {
		this.setState({
			showRemove: false
		});
	};
	goDetailsPage = (name, foodId) => {
		if (foodId) {
			this.props.history.push({
				pathname: `/kitchen/disheDetail/${name}/${foodId}`
			});
		} else {
			this.props.history.push({
				pathname: `/kitchen/disheDetail/${name}/null`
			});
		}
	};
	goLogin = () => {
		this.props.history.push('/kitchen/login');
	};
	getCollectList = () => {
		const { user_info } = this.props;
		if (user_info.account) {
			let params = { account: user_info.account };
			api.getCollectionFoods(params).then((res) => {
				let { code, data } = res.data;
				if (code === 0) {
					this.setState({
						listData: data.relations
					});
				} else {
					this.setState({
						listData: []
					});
					Toast.info('暂无数据',0.3);
				}
			});
		} else {
			Toast.info('请先登录', 0.5, () => {
				this.goLogin();
			});
		}
	};
	removeCollectFood = (foodId) => {
		const { user_info } = this.props;
		let params = {
			foodId,
			account: user_info.account
		};
		api
			.removeCollectionFood(params)
			.then((res) => {
				let { code, msg } = res.data;
				if (code === 0) {
					Toast.info('取消收藏成功', 0.5);
					this.getCollectList();
				} else if (code === -1) {
					Toast.info(msg, 0.5);
				} else {
					Toast.info('取消收藏失败', 0.5);
				}
			})
			.catch((err) => {
				console.log(err);
				Toast.info('服务器异常', 0.5);
			});
	};
	componentWillMount() {
		this.getCollectList();
	}
	render() {
		let { showRemove, listData } = this.state;
		let ControlBtn = showRemove
			? () => (
					<div className="control" onClick={this.controlCloseRemove}>
						<span>完成</span>
					</div>
				)
			: () => (
					<div className="control" onClick={this.controlOpenRemove}>
						<img src={require('../assets/images/clear.png')} alt="" />
					</div>
				);
		let RemoveBtn = ({ foodId }) => {
			if (showRemove) {
				return (
					<div
						className="remove"
						onClick={() => {
							this.removeCollectFood(foodId);
						}}
					>
						X
					</div>
				);
			} else {
				return <span />;
			}
		};

		return (
			<div className="collect-main">
				<div className="top-title">
					<div className="back-btn" onClick={this.goBack}>
						<img src={require('../assets/images/fanhui.png')} alt="" />
					</div>
					<h3 className="title">我的收藏</h3>
					<ControlBtn />
				</div>
				<div className="collect-content">
					<div className="col-wrap">
						{listData.map((item, index) => {
							return (
								<div className="col-box" key={index}>
									<RemoveBtn foodId={item.foodId} />
									<img
										src={item.imageid}
										alt=""
										onClick={() => {
											this.goDetailsPage(item.foodName, item.foodId);
										}}
									/>
									<h5 className="dishe-name">{item.foodName}</h5>
								</div>
							);
						})}
					</div>
					<p className="tip">快去收藏更多~</p>
				</div>
			</div>
		);
	}
}
const History = connect(mapStateToProps, mapDispatchToProps)(HistoryUI);
export default History;

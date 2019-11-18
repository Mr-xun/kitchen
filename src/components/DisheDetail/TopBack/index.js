import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import api from '../../../api';

import './index.scss';
const mapStateToProps = (state, props) => {
	return {
		user_info: state.user_info
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {};
};
class TopBackUI extends Component {
	goBack = () => {
		this.props.history.go(-1);
	};
	removeBasket = () => {
		const { user_info } = this.props;
		const { foodId } = this.props.match.params;
		if (foodId !== 'null') {
			if (user_info.account) {
				let params = { account: user_info.account, foodId };
				api.removeBasket(params).then((res) => {
					let { code, msg } = res.data;
					if (code === 0) {
						Toast.info('移除成功', 0.5);
						let foodId = this.props.match.params.foodId;
						this.props.refreshData(foodId);
					} else if (code === -1) {
						Toast.info(msg, 0.5);
					} else {
						Toast.info('移除失败', 0.5);
					}
				});
			} else {
				Toast.info('请先登录再进行操作', 0.5);
			}
		} else {
			Toast.info('该数据源不可操作', 0.5);
		}
	};
	addBasket = () => {
		const { user_info } = this.props;
		const { foodId } = this.props.match.params;
		if (foodId !== 'null') {
			if (user_info.account) {
				let params = { account: user_info.account, foodId };
				api.collectionBasket(params).then((res) => {
					let { code, msg } = res.data;
					if (code === 0) {
						Toast.info('添加成功', 0.5);
						let foodId = this.props.match.params.foodId;
						this.props.refreshData(foodId);
					} else if (code === -1) {
						Toast.info(msg, 0.5);
					} else {
						Toast.info('添加失败', 0.5);
					}
				});
			} else {
				Toast.info('请先登录再进行操作', 0.5);
			}
		} else {
			Toast.info('该数据源不可操作', 0.5);
		}
	};
	render() {
		const ControlBtn = this.props.serveData.basketFlag ? (
			<img
				className="lanzi"
				onClick={this.removeBasket}
				src={require('../../../assets/images/yichu.png')}
				alt=""
			/>
		) : (
			<img className="lanzi" onClick={this.addBasket} src={require('../../../assets/images/lanzi.png')} alt="" />
		);
		return (
			<div className="top-title">
				<div className="back-btn" onClick={this.goBack}>
					<img src={require('../../../assets/images/fanhui.png')} alt="" />
				</div>
				<h3 className="title">菜谱详情</h3>
				<div className="control">
					{/* <img src={require("../../../assets/images/shoucang_1.png")} alt="" /> */}
					{ControlBtn}
				</div>
			</div>
		);
	}
}
const TopBack = connect(mapStateToProps, mapDispatchToProps)(TopBackUI);
export default withRouter(TopBack);

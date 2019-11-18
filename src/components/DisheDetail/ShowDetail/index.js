import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import disheData from '../../../assets/js/disheDetailsData';
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
class ShowDetailUI extends Component {
	constructor() {
		super();
		this.state = {
			serveData: {}
		};
	}
	addHistory = (foodId) => {
		const { user_info } = this.props;
		if (user_info.account) {
			let params = { account: user_info.account, foodId };
			api.collectionHistory(params);
		}
	};
	removeBasket = () => {
		const { user_info } = this.props;
		const { foodId } = this.props.match.params;
		if (foodId !== 'null') {
			if (user_info.account) {
				let params = { account: user_info.account, foodId };
				api
					.removeBasket(params)
					.then((res) => {
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
					})
					.catch((err) => {
						Toast.info('服务异常', 0.5);
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
				api
					.collectionBasket(params)
					.then((res) => {
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
					})
					.catch((err) => {
						Toast.info('服务异常', 0.5);
					});
			} else {
				Toast.info('请先登录再进行操作', 0.5);
			}
		} else {
			Toast.info('该数据源不可操作', 0.5);
		}
	};
	componentWillMount() {
		let foodId = this.props.match.params.foodId;
		if (foodId) {
			this.addHistory(foodId);
		}
	}
	render() {
		let detailData = { materialList: [], stepList: [] };
		const ControlBtn = this.props.serveData.basketFlag ? (
			<span onClick={this.removeBasket}>移除菜篮子</span>
		) : (
			<span onClick={this.addBasket}>加入菜篮子</span>
		);
		if (this.props.serveData.foodName) {
			detailData = this.props.serveData;
		} else {
			detailData = disheData[this.props.name].list[0];
		}

		return (
			<div className="content">
				<div className="dishe-master-img">
					<img src={detailData.imageid} alt="" />
				</div>
				<h3 className="dishe-name">{detailData.name || detailData.foodName}</h3>
				{/* <p className="collect-info">
                    已有{22}人点赞<span>11人收藏</span>
                </p>
                <p className="origin-info">
                    {detailData.authorname}
                    <br />
                    来自网上厨房
                </p> */}
				<div className="dishe-explain">
					<p className="symbol">“</p>
					<p className="explain-cont">{detailData.description}</p>
					<p className="symbol">”</p>
				</div>
				<div className="materials-wrap">
					<h6>材料{ControlBtn}</h6>
					<ul className="materials-box">
						{detailData.materialList.map((item, index) => {
							return (
								<li className="box-line" key={index}>
									<div className="left">{item.name}</div>
									<div className="right">{item.dosage}</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="cooking-steps-wrap">
					<h4>
						<span>一</span>烹饪步骤<span>一</span>
					</h4>
					{detailData.stepList.map((step, index) => {
						return (
							<div className="step-box" key={index}>
								<h4>{index + 1}</h4>
								<div className="img-show">
									<img src={step.imageid} alt="" />
									<p>{step.details}</p>
								</div>
							</div>
						);
					})}
					{detailData.tipList.map((tipItem, index) => {
						return (
							<div className="tip-content" key={index}>
								<h4>
									<span>一</span>小贴士<span>一</span>
								</h4>
								<div className="small-tip">
									<p>{tipItem.details}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
const ShowDetail = connect(mapStateToProps, mapDispatchToProps)(ShowDetailUI);
export default withRouter(ShowDetail);

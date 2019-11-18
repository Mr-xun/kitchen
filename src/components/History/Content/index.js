import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
class ContentUI extends Component {
	constructor() {
		super();
		this.state = {
			listData: []
		};
	}
	goLogin = () => {
		this.props.history.push('/kitchen/login');
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
	getHistoryData = () => {
		const { user_info } = this.props;
		if (user_info.account) {
			let params = { account: user_info.account };
			api.getCollectionHistory(params).then((res) => {
				let { code, data } = res.data;
				if (code === 0) {
					this.setState({
						listData: data.relations
					});
				} else {
					Toast.info('暂无数据');
				}
			});
		} else {
			Toast.info('请先登录', 0.3, () => {
				this.goLogin();
			});
		}
	};
	componentDidMount() {
		this.getHistoryData();
	}
	render() {
		let { listData } = this.state;
		return (
			<div className="history-content">
				{listData.map((item, index) => {
					return (
						<div
							className="history-box"
							key={index}
							onClick={() => {
								this.goDetailsPage(item.foodName, item.foodId);
							}}
						>
							<div className="lt-img">
								<img src={item.imageid} alt="" />
							</div>
							<div className="rt-info">
								<p className="dishe-name"> {item.foodName} </p>
								<p className="author-name"> {item.author} </p>
								<p className="origin"> 来自网上厨房 </p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
const Content = connect(mapStateToProps, mapDispatchToProps)(ContentUI);
export default withRouter(Content);

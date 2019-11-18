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
class MaterialsLookUI extends Component {
	constructor() {
		super();
		this.state = {
			listData: []
		};
	}
	goLogin = () => {
		this.props.history.push('/kitchen/login');
	};

	getMaterialsData = () => {
		const { user_info } = this.props;
		if (user_info.account) {
			let params = { account: user_info.account, flag: 0 };
			api.getBasketList(params).then((res) => {
				let { code, data } = res.data;
				if (code === 0) {
					this.setState({
						listData: data.materials
					});
				} else {
					this.setState({
						listData: [ { materials: [] } ]
					});
					Toast.info('暂无数据');
				}
			});
		} else {
			Toast.info('请先登录', 0.3, () => {
				this.goLogin();
			});
		}
	};
	componentWillMount() {
		this.getMaterialsData();
	}
	render() {
		let { listData } = this.state;
		return (
			<div className="materials-content">
				{listData.map((item, index) => {
					return (
						<div className="materials-box" key={index}>
							<h2 className="materials-title">{item.materialName}</h2>
							<ul className="materials-list">
								{item.materials.map((materialItem, _index) => {
									return (
										<li key={_index}>
											<div className="name">{materialItem.name}</div>
											<div className="quantity">{materialItem.dosage}</div>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		);
	}
}
const MaterialsLook = connect(mapStateToProps, mapDispatchToProps)(MaterialsLookUI);
export default withRouter(MaterialsLook);

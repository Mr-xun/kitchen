import React, { Component } from 'react';
import {  Toast } from 'antd-mobile';
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
			listData:[]
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
	goLogin = () => {
		this.props.history.push('/kitchen/login');
	};
	getCollectList = ()=>{
		// const { user_info } = this.props;
		// if (user_info.account) {
			let params = {account:'kim123'}
			api.getCollectionFoods(params).then(res=>{
				let {code,data} = res.data;
				if(code ===0){
					this.setState({
						listData:data
					})
				}else{
					Toast.info('暂无数据');
				}
			})
		// } else {
		// 	Toast.info('请先登录', 0.5, () => {
		// 		this.goLogin();
		// 	});
		// }
	}
	componentWillMount(){
		this.getCollectList()
	}
	render() {
		let { showRemove } = this.state;
		let ControlBtn = showRemove
			? () => (
					<div className="control" onClick={this.controlCloseRemove}>
						<span>完成</span>
					</div>
				)
			: () => (
					<div className="control" onClick={this.controlOpenRemove}>
						<img src={require('../assets/images/lanzi.png')} alt="" />
					</div>
				);
		let RemoveBtn = showRemove ? <div className="remove">X</div> : null;
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
						<div className="col-box">
							{RemoveBtn}
							<img src={require('../assets/images/dish_one.jpg')} alt="" />
							<h5 className="dishe-name">这是名字</h5>
						</div>
						<div className="col-box">
							{RemoveBtn}
							<img src={require('../assets/images/dish_one.jpg')} alt="" />
							<h5 className="dishe-name">这是名字</h5>
						</div>
						<div className="col-box">
							{RemoveBtn}
							<img src={require('../assets/images/dish_one.jpg')} alt="" />
							<h5 className="dishe-name">这是名字</h5>
						</div>
						<div className="col-box">
							{RemoveBtn}
							<img src={require('../assets/images/dish_one.jpg')} alt="" />
							<h5 className="dishe-name">这是名字</h5>
						</div>
					</div>
					<p className="tip">快去收藏更多~</p>
				</div>
			</div>
		);
	}
}
const History = connect(mapStateToProps, mapDispatchToProps)(HistoryUI);
export default History

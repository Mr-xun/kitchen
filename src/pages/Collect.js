import React, { Component } from 'react';
import '../styles/collect.scss';
export default class History extends Component {
	constructor() {
		super();
		this.state = {
			showRemove: false
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

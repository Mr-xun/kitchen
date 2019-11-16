import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

class TopControl extends Component {
	constructor() {
		super();
	}
	goBack = () => {
		this.props.history.go(-1);
	};
	render() {
		return (
			<div className="top-title">
				<div className="back-btn" onClick={this.goBack}>
					<img src={require('../../../assets/images/fanhui.png')} alt="" />
				</div>
				<h3 className="title">菜篮子(2)</h3>
				<div
					className="control"
					onClick={() => {
						this.props.elpty();
					}}
				>
					<span>清空</span>
				</div>
			</div>
		);
	}
}
export default withRouter(TopControl);

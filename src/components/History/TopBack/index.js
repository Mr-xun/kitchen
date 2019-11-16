import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
class BackTop extends Component {
	goBack = () => {
		this.props.history.go(-1);
	};
	render() {
		return (
			<div className="top-title">
				<div className="back-btn" onClick={this.goBack}>
					<img src={require('../../../assets/images/fanhui.png')} alt="" />
				</div>
				<h3 className="title">历史记录</h3>
			</div>
		);
	}
}
export default withRouter(BackTop);

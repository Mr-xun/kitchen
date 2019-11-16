import React, { Component } from 'react';
import TopBack from '../components/History/TopBack';
import Content from '../components/History/Content';

import '../styles/history.scss';
export default class History extends Component {
	goBack = () => {
		this.props.history.go(-1);
	};
	render() {
		return (
			<div className="history-main">
				<TopBack />
				<Content />
			</div>
		);
	}
}

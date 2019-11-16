import React, { Component } from 'react';
import './index.scss';
export default class Content extends Component {
	render() {
		return (
			<div className="history-content">
				<div className="history-box">
					<div className="lt-img">
						<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
					</div>
					<div className="rt-info">
						<p className="dishe-name">这是名字</p>
						<p className="author-name">作者名字</p>
						<p className="origin">来自数据源</p>
					</div>
				</div>
				<div className="history-box">
					<div className="lt-img">
						<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
					</div>
					<div className="rt-info">
						<p className="dishe-name">这是名字</p>
						<p className="author-name">作者名字</p>
						<p className="origin">来自数据源</p>
					</div>
				</div>
				<div className="history-box">
					<div className="lt-img">
						<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
					</div>
					<div className="rt-info">
						<p className="dishe-name">这是名字</p>
						<p className="author-name">作者名字</p>
						<p className="origin">来自数据源</p>
					</div>
				</div>
				<div className="history-box">
					<div className="lt-img">
						<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
					</div>
					<div className="rt-info">
						<p className="dishe-name">这是名字</p>
						<p className="author-name">作者名字</p>
						<p className="origin">来自数据源</p>
					</div>
				</div>
			</div>
		);
	}
}

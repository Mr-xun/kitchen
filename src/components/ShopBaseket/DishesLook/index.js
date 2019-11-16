import React, { Component } from 'react';
import './index.scss';
export default class DishesLook extends Component {
	removeBasket = () => {};
	render() {
		return (
			<div className="dishes-content">
				<div className="dishes-box">
					<div className="top-info">
						<div className="left-show">
							<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
							<h5>这是名字</h5>
						</div>
						<div className="rt-control">
							<span onClick={this.removeBasket}>移除菜篮子</span>
						</div>
					</div>
					<ul className="dishes-list">
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
					</ul>
				</div>
				<div className="dishes-box">
					<div className="top-info">
						<div className="left-show">
							<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
							<h5>这是名字</h5>
						</div>
						<div className="rt-control">
							<span onClick={this.removeBasket}>移除菜篮子</span>
						</div>
					</div>
					<ul className="dishes-list">
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
					</ul>
				</div>
				<div className="dishes-box">
					<div className="top-info">
						<div className="left-show">
							<img src={require('../../../assets/images/dish_one.jpg')} alt="" />
							<h5>这是名字</h5>
						</div>
						<div className="rt-control">
							<span onClick={this.removeBasket}>移除菜篮子</span>
						</div>
					</div>
					<ul className="dishes-list">
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
						<li>
							<div className="name">生抽</div>
							<div className="quantity">1段</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

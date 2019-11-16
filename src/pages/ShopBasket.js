import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import '../styles/shopBasket.scss';
import TopControl from '../components/ShopBaseket/TopControl';
import MaterialsLook from '../components/ShopBaseket/MaterialsLook';
import DishesLook from '../components/ShopBaseket/DishesLook';

const tabs = [ { title: '按材料查看' }, { title: '按菜品查看' } ];

export default class ShopBasket extends Component {
	goBack = () => {
		this.props.history.go(-1);
	};
	controlCloseRemove = () => {
		console.log('empty');
	};
	render() {
		return (
			<div className="shopBasket-main">
				<TopControl elpty={this.controlCloseRemove} />
				<div className="shopBasket-content">
					<Tabs
						tabs={tabs}
						tabBarActiveTextColor="#fc9023"
						tabBarUnderlineStyle={{ border: '1.5px #fc9023 solid' }}
						onChange={(tab, index) => {
							console.log('onChange', index, tab);
						}}
						onTabClick={(tab, index) => {
							console.log('onTabClick', index, tab);
						}}
					>
						<MaterialsLook />
						<DishesLook />
					</Tabs>
				</div>
			</div>
		);
	}
}

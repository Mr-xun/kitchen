import React, { Component } from 'react';
import Content from '../components/KitchenStory';
import '../styles/kitchenStory.scss';
export default class KitChenStory extends Component {
	render() {
		return (
			<div className="story-main">
				<h2 className="title">厨房故事</h2>
				<Content />
			</div>
		);
	}
}

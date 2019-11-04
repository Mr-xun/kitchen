import React, { Component } from "react";
import "../styles/kitchenStory.scss";
export default class KitChenStory extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="story-main">
                <h2 className="title">厨房故事</h2>
                <div className="stroy-content">
                    <div className="story-box">
                        <p className="info">
                            【牙签肉】冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等
                        </p>
                        <img
                            className="info-img"
                            src={require("../assets/images/dish_one.jpg")}
                            alt=""
                        />
                        <p className="from-info">
                            来自 <span>寻味手机</span>
                        </p>
                    </div>
                    <div className="story-box">
                        <p className="info">
                            【牙签肉】冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等
                        </p>
                        <img
                            className="info-img"
                            src={require("../assets/images/dish_one.jpg")}
                            alt=""
                        />
                        <p className="from-info">
                            来自 <span>寻味手机</span>
                        </p>
                    </div>
                    <div className="story-box">
                        <p className="info">
                            【牙签肉】冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等
                        </p>
                        <img
                            className="info-img"
                            src={require("../assets/images/dish_one.jpg")}
                            alt=""
                        />
                        <p className="from-info">
                            来自 <span>寻味手机</span>
                        </p>
                    </div>
                    <div className="story-box">
                        <p className="info">
                            【牙签肉】冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等冬日的周末，电视剧跟牙签肉更配，等等
                        </p>
                        <img
                            className="info-img"
                            src={require("../assets/images/dish_one.jpg")}
                            alt=""
                        />
                        <p className="from-info">
                            来自 <span>寻味手机</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

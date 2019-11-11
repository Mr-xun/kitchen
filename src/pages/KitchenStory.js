import React, { Component } from "react";
import { Toast, ActivityIndicator } from "antd-mobile";

import "../styles/kitchenStory.scss";
import "../api";
import api from "../api";
export default class KitChenStory extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            animating: false
        };
    }
    getDataList = () => {
        this.setState({ animating: true });
        api.getStoryPictureList()
            .then(res => {
                let { code, data, msg } = res.data;
                if (code === 0) {
                    this.setState({
                        list: data
                    });
                } else {
                    this.setState({
                        list: []
                    });
                    Toast.info(msg, 0.5);
                }
                this.setState({ animating: false });
            })
            .catch(err => {
                this.setState({ animating: false });
                Toast.info("网络异常", 0.5);
            });
    };
    componentDidMount() {
        this.getDataList();
    }
    clickGiveLike = foodId => {
        let params = {
            foodId
        };
        api.giveLike(params)
            .then(res => {
                let { code, data } = res.data;
                if (code === 0) {
                    this.getDataList();
                } else {
                    Toast.info("点赞失败", 0.5);
                }
            })
            .catch(err => {
                Toast.info("服务器异常", 0.5);
            });
    };
    goDetailsPage = (name, foodId) => {
        // Toast.info("该链接暂未开放", 0.5);
        // this.props.history.push({ pathname: "/kitchen/disheDetail/" + name });
        if (foodId) {
            this.props.history.push({
                pathname: `/kitchen/disheDetail/${name}/${foodId}`
            });
        } else {
            this.props.history.push({
                pathname: `/kitchen/disheDetail/${name}/null`
            });
        }
    };
    render() {
        let { list } = this.state;
        return (
            <div className="story-main">
                <h2 className="title">厨房故事</h2>
                <div className="stroy-content">
                    <ActivityIndicator
                        toast
                        text="Loading..."
                        animating={this.state.animating}
                    />
                    {list.map((item, index) => {
                        return (
                            <div key={index} className="story-box">
                                <p className="info">{item.description}</p>
                                <img
                                    onClick={() => {
                                        this.goDetailsPage(
                                            `${item.foodName}`,
                                            `${item.foodId}`
                                        );
                                    }}
                                    className="info-img"
                                    src={item.imageid}
                                    alt=""
                                />
                                <div className="from-info">
                                    <div className="origin">
                                        来自 <span>寻味手机</span>
                                    </div>
                                    <div
                                        className="give-like"
                                        onClick={() => {
                                            this.clickGiveLike(item.foodId);
                                        }}
                                    >
                                        <img
                                            src={require("../assets/images/dianzan.png")}
                                            alt=""
                                        />
                                        <span>{item.praises}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

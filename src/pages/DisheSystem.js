//菜系页面
import React, { Component } from "react";
import "../styles/disheSystem.scss";
export default class DisheSystem extends Component {
    constructor() {
        super();
        this.state = {
            currenTitle: ""
        };
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.go(-1);
    }
    goDetailsPage(name) {
        this.props.history.push({ pathname: "/kitchen/disheDetail/" + name });
    }
    componentDidMount() {
        let title = this.props.match.params.title;
        this.setState({
            currenTitle: title
        });
    }
    render() {
        let { currenTitle } = this.state;
        return (
            <div className="disheSystem-main">
                <div className="top-title">
                    <div className="back-btn" onClick={this.goBack}>
                        <img
                            src={require("../assets/images/fanhui.png")}
                            alt=""
                        />
                    </div>
                    <h3 className="title">{currenTitle}</h3>
                </div>
                <div className="content">
                    <div
                        className="dishe-box"
                        onClick={() => {
                            this.goDetailsPage("宫保鸡丁");
                        }}
                    >
                        <div className="img-box">
                            <img
                                src={require("../assets/images/find_2.jpg")}
                                alt=""
                            />
                            <div className="control-box">
                                <div className="like-box">
                                    <img
                                        src={require("../assets/images/dianzan_act.png")}
                                        alt=""
                                    />
                                    <span>122</span>
                                </div>
                                <div className="collect-box">
                                    <img
                                        src={require("../assets/images/shoucang_act.png")}
                                        alt=""
                                    />
                                    <span>222</span>
                                </div>
                            </div>
                        </div>
                        <div className="dishe-info">
                            <div className="explain">
                                <h4>松仁鱼米</h4>
                                <p>
                                    这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明
                                </p>
                            </div>
                            <div className="origin-user">
                                <img
                                    src={require("../assets/images/auto_1.jpg")}
                                    alt=""
                                />
                                <span>我的厨房</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dishe-box"
                        onClick={() => {
                            this.goDetailsPage("宫保鸡丁");
                        }}
                    >
                        <div className="img-box">
                            <img
                                src={require("../assets/images/find_2.jpg")}
                                alt=""
                            />
                            <div className="control-box">
                                <div className="like-box">
                                    <img
                                        src={require("../assets/images/dianzan_act.png")}
                                        alt=""
                                    />
                                    <span>122</span>
                                </div>
                                <div className="collect-box">
                                    <img
                                        src={require("../assets/images/shoucang_act.png")}
                                        alt=""
                                    />
                                    <span>222</span>
                                </div>
                            </div>
                        </div>
                        <div className="dishe-info">
                            <div className="explain">
                                <h4>松仁鱼米</h4>
                                <p>
                                    这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明
                                </p>
                            </div>
                            <div className="origin-user">
                                <img
                                    src={require("../assets/images/auto_1.jpg")}
                                    alt=""
                                />
                                <span>我的厨房</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dishe-box"
                        onClick={() => {
                            this.goDetailsPage("宫保鸡丁");
                        }}
                    >
                        <div className="img-box">
                            <img
                                src={require("../assets/images/find_2.jpg")}
                                alt=""
                            />
                            <div className="control-box">
                                <div className="like-box">
                                    <img
                                        src={require("../assets/images/dianzan_act.png")}
                                        alt=""
                                    />
                                    <span>122</span>
                                </div>
                                <div className="collect-box">
                                    <img
                                        src={require("../assets/images/shoucang_act.png")}
                                        alt=""
                                    />
                                    <span>222</span>
                                </div>
                            </div>
                        </div>
                        <div className="dishe-info">
                            <div className="explain">
                                <h4>松仁鱼米</h4>
                                <p>
                                    这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明
                                </p>
                            </div>
                            <div className="origin-user">
                                <img
                                    src={require("../assets/images/auto_1.jpg")}
                                    alt=""
                                />
                                <span>我的厨房</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dishe-box"
                        onClick={() => {
                            this.goDetailsPage("宫保鸡丁");
                        }}
                    >
                        <div className="img-box">
                            <img
                                src={require("../assets/images/find_2.jpg")}
                                alt=""
                            />
                            <div className="control-box">
                                <div className="like-box">
                                    <img
                                        src={require("../assets/images/dianzan_act.png")}
                                        alt=""
                                    />
                                    <span>122</span>
                                </div>
                                <div className="collect-box">
                                    <img
                                        src={require("../assets/images/shoucang_act.png")}
                                        alt=""
                                    />
                                    <span>222</span>
                                </div>
                            </div>
                        </div>
                        <div className="dishe-info">
                            <div className="explain">
                                <h4>松仁鱼米</h4>
                                <p>
                                    这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明
                                </p>
                            </div>
                            <div className="origin-user">
                                <img
                                    src={require("../assets/images/auto_1.jpg")}
                                    alt=""
                                />
                                <span>我的厨房</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dishe-box"
                        onClick={() => {
                            this.goDetailsPage("宫保鸡丁");
                        }}
                    >
                        <div className="img-box">
                            <img
                                src={require("../assets/images/find_2.jpg")}
                                alt=""
                            />
                            <div className="control-box">
                                <div className="like-box">
                                    <img
                                        src={require("../assets/images/dianzan_act.png")}
                                        alt=""
                                    />
                                    <span>122</span>
                                </div>
                                <div className="collect-box">
                                    <img
                                        src={require("../assets/images/shoucang_act.png")}
                                        alt=""
                                    />
                                    <span>222</span>
                                </div>
                            </div>
                        </div>
                        <div className="dishe-info">
                            <div className="explain">
                                <h4>松仁鱼米</h4>
                                <p>
                                    这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明这里是菜的说明
                                </p>
                            </div>
                            <div className="origin-user">
                                <img
                                    src={require("../assets/images/auto_1.jpg")}
                                    alt=""
                                />
                                <span>我的厨房</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

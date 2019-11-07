//菜系页面
import React, { Component } from "react";
import "../styles/disheDetail.scss";
export default class DisheDetail extends Component {
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
    componentDidMount() {
        console.log(this.props.match.params.title);
        let title = this.props.match.params.title;
        this.setState({
            currenTitle: title
        });
    }
    render() {
        let { currenTitle } = this.state;
        return (
            <div className="disheDetail-main">
                <div className="top-title">
                    <div className="back-btn" onClick={this.goBack}>
                        <img
                            src={require("../assets/images/fanhui.png")}
                            alt=""
                        />
                    </div>
                    <h3 className="title">菜谱详情</h3>
                    <div className="control">
                        <img
                            src={require("../assets/images/shoucang.png")}
                            alt=""
                        />
                        <img
                            src={require("../assets/images/lanzi.png")}
                            alt=""
                        />
                    </div>
                </div>
                <div className="content">
                    <div className="dishe-master-img">
                        <img
                            src={require("../assets/images/find_1.jpg")}
                            alt=""
                        />
                    </div>
                    <h3 className="dishe-name">松仁鱼米</h3>
                    <p className="collect-info">
                        已有22人点赞<span>11人收藏</span>
                    </p>
                    <p className="origin-info">
                        朋友四月去看海
                        <br />
                        来自十月厨房
                    </p>
                    <div className="dishe-explain">
                        <p className="symbol">“</p>
                        <p className="explain-cont">
                            时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。时至今日，这个菜日月洗礼，厨师们静默历练，非常好吃了。
                        </p>
                        <p className="symbol">”</p>
                    </div>
                    <div className="materials-wrap">
                        <h6>
                            材料<span>加入菜篮子</span>
                        </h6>
                        <ul className="materials-box">
                            <li className="box-line">
                                <div className="left">面粉</div>
                                <div className="right">200克</div>
                            </li>
                            <li className="box-line">
                                <div className="left">面粉</div>
                                <div className="right">200克</div>
                            </li>
                            <li className="box-line">
                                <div className="left">面粉</div>
                                <div className="right">200克</div>
                            </li>
                            <li className="box-line">
                                <div className="left">面粉</div>
                                <div className="right">200克</div>
                            </li>
                            <li className="box-line">
                                <div className="left">面粉</div>
                                <div className="right">200克</div>
                            </li>
                            <li className="box-line">
                                <div className="left">面粉</div>
                                <div className="right">200克</div>
                            </li>
                        </ul>
                    </div>
                    <div className="cooking-steps-wrap">
                        <h4>
                            <span>一</span>烹饪步骤<span>一</span>
                        </h4>
                        <div className="step-box">
                            <h4>1</h4>
                            <div className="img-show">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p>准备面粉和杂粮粉</p>
                            </div>
                        </div>
                        <div className="step-box">
                            <h4>2</h4>
                            <div className="img-show">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p>准备面粉和杂粮粉</p>
                            </div>
                        </div>
                        <div className="step-box">
                            <h4>3</h4>
                            <div className="img-show">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p>准备面粉和杂粮粉</p>
                            </div>
                        </div>
                        <div className="step-box">
                            <h4>4</h4>
                            <div className="img-show">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p>准备面粉和杂粮粉</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

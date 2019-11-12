import React, { Component } from "react";
import "./index.scss";
export default class HaveInfo extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        let { userInfo } = this.props;
        return (
            <div className="top-info">
                <div className="have-info-content">
                    <div className="have-info-box">
                        <div className="have-user-img">
                            <img
                                src={require("../../../assets/images/auto_1.jpg")}
                                alt=""
                            />
                        </div>
                        <div className="have-rl-box">
                            <div className="have-user-name">
                                {userInfo.nickname}
                            </div>
                            <div className="have-iser-tit">
                                <p>
                                    <span>{userInfo.account}</span>
                                    <span>{userInfo.gender ? "男" : "女"}</span>
                                    <span>
                                        {userInfo.createTime
                                            ? userInfo.createTime.slice(0, 10)
                                            : userInfo.createTime}
                                        加入
                                    </span>
                                </p>
                                <p>{userInfo.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="have-user-attent">
                        <div className="have-attent-box">
                            <h6>贴子</h6>
                            <span>0</span>
                        </div>
                        <div className="have-attent-box">
                            <h6>菜谱</h6>
                            <span>0</span>
                        </div>
                        <div className="have-attent-box">
                            <h6>关注</h6>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="have-card">
                    <div className="have-card-box">
                        <h6>我的厨包</h6>
                        <span>0</span>
                    </div>
                    <div className="have-card-box">
                        <h6>我的积分</h6>
                        <span>0</span>
                    </div>
                    <div className="have-card-box">
                        <h6>优惠券</h6>
                        <span>0</span>
                    </div>
                </div>
            </div>
        );
    }
}

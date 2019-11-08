import React, { Component } from "react";
import { Toast } from "antd-mobile";

import { disheSystemData } from "../../assets/js/disheSystemData";
import "./index.scss";
import { withRouter } from "react-router-dom";
class DisheSystemWrap extends Component {
    constructor() {
        super();
        this.state = {};
    }
    goDetailsPage(name) {
        let { title } = this.props;
        if (title === "早餐") {
            this.props.history.push({
                pathname: "/kitchen/disheDetail/" + name
            });
        } else {
            Toast.info("该链接暂未开放", 0.5);
        }
    }
    render() {
        let { title } = this.props;
        return (
            <div className="content">
                {disheSystemData[title].map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="dishe-box"
                            onClick={() => {
                                this.goDetailsPage(`${item.name}`);
                            }}
                        >
                            <div className="img-box">
                                <img src={item.imageid} alt="" />
                                <div className="control-box">
                                    <div className="like-box">
                                        <img
                                            src={require("../../assets/images/white_dianzan.png")}
                                            alt=""
                                        />
                                        <span>{item.infos.likeCount}</span>
                                    </div>
                                    <div className="collect-box">
                                        <img
                                            src={require("../../assets/images/white_shoucang.png")}
                                            alt=""
                                        />
                                        <span>
                                            {item.infos.collectionCount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="dishe-info">
                                <div className="explain">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="origin-user">
                                    <img src={item.user.imageid} alt="" />
                                    <span>{item.user.nickname}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default withRouter(DisheSystemWrap);

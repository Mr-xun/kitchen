import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Toast } from "antd-mobile";
import { findData } from "../../../assets/js/findData";
import "./index.scss";
class FindContent extends Component {
    goPage = type => {
        if (type === "早餐" || type === "宝宝辅食") {
            this.props.history.push({
                pathname: "/kitchen/disheSystem/" + type
            });
        } else {
            Toast.info("该链接暂未开放");
        }
    };
    render() {
        return (
            <div className="bot-warp">
                {findData.map((mainList, index) => {
                    return (
                        <div className="class-box" key={index}>
                            <h2 className="class-title">{mainList.name}</h2>
                            <div className="img-cont">
                                {mainList.list.map((smallList, _index) => {
                                    return (
                                        <div
                                            className="img-box"
                                            key={_index}
                                            onClick={() => {
                                                this.goPage(
                                                    `${smallList.name}`
                                                );
                                            }}
                                        >
                                            <img
                                                src={smallList.imageid}
                                                alt=""
                                            />
                                            <p className="img-name">
                                                {smallList.name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default withRouter(FindContent);

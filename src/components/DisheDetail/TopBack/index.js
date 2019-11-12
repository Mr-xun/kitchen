import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
class TopBack extends Component {
    goBack = () => {
        this.props.history.go(-1);
    };
    render() {
        return (
            <div className="top-title">
                <div className="back-btn" onClick={this.goBack}>
                    <img
                        src={require("../../../assets/images/fanhui.png")}
                        alt=""
                    />
                </div>
                <h3 className="title">菜谱详情</h3>
                <div className="control">
                    <img
                        src={require("../../../assets/images/shoucang_1.png")}
                        alt=""
                    />
                    <img
                        className="lanzi"
                        src={require("../../../assets/images/lanzi.png")}
                        alt=""
                    />
                </div>
            </div>
        );
    }
}
export default withRouter(TopBack);

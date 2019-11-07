import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
class NoInfo extends Component {
    constructor() {
        super();
        this.goLogin = this.goLogin.bind(this);
    }
    goLogin() {
        this.props.history.push("/kitchen/login");
    }
    render() {
        return (
            <div className="top-info" onClick={this.goLogin}>
                <div className="nolog-img">
                    <img
                        src={require("../../../assets/images/more_login.png")}
                        alt=""
                    />
                </div>
                <div className="login-txt">
                    <h5>登录 / 注册账号</h5>
                    <p>
                        解锁收藏、云端同步功能
                        <br />
                        收藏内容不丢失
                    </p>
                </div>
            </div>
        );
    }
}
export default withRouter(NoInfo);

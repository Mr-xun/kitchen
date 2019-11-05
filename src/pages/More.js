import React, { Component } from "react";
import { List } from "antd-mobile";
import "../styles/more.scss";
const Item = List.Item;
export default class More extends Component {
    constructor() {}
    render() {
        return (
            <div className="more-main">
                <div className="more-title">更多</div>
                <div className="top-info">
                    <div className="nolog-img">
                        <img
                            src={require("../assets/images/more_login.png")}
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
                <div className="list-cont">
                    <List>
                        <Item
                            thumb={require("../assets/images/shoucang_1.png")}
                            arrow="horizontal"
                            onClick={() => {}}
                        >
                            菜谱收藏
                        </Item>
                        <Item
                            thumb={require("../assets/images/lanzi.png")}
                            onClick={() => {}}
                            arrow="horizontal"
                        >
                            菜篮子
                        </Item>
                        <Item
                            thumb={require("../assets/images/history.png")}
                            arrow="horizontal"
                            onClick={() => {}}
                        >
                            历史记录
                        </Item>
                        <Item
                            thumb={require("../assets/images/dianzan.png")}
                            onClick={() => {}}
                            arrow="horizontal"
                        >
                            用着不错，赏个好评去
                        </Item>
                    </List>
                </div>
            </div>
        );
    }
}

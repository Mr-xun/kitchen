import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Button, Toast } from "antd-mobile";
import "../styles/more.scss";
import HaveInfo from "../components/More/HaveInfo";
import NoInfo from "../components/More/NoInfo";
import api from "../api";

const Item = List.Item;
const mapStateToProps = (state, props) => {
    return {
        user_info: state.user_info
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        outLogin: () => {
            api.outLoginAccount()
                .then(res => {
                    let { code, msg, data } = res.data;
                    if (code === 0) {
                        dispatch({
                            type: "USER_INFO",
                            payload: {}
                        });
                    } else {
                        Toast.info(msg, 1);
                    }
                })
                .catch(err => {
                    Toast.info("服务器异常", 1);
                });
        }
    };
};
class MoreUI extends Component {
    constructor() {
        super();
        this.state = {};
        this.goLogin = this.goLogin.bind(this);
    }
    goLogin() {
        this.props.history.push("/kitchen/login");
    }

    render() {
        const { user_info } = this.props;
        let TopInfo = user_info.account ? (
            <HaveInfo userInfo={user_info} />
        ) : (
            <NoInfo />
        );
        let OutLogin = () => (
            <div className="outLogin-btn">
                <Button type="warning" onClick={this.props.outLogin}>
                    退出登录
                </Button>
            </div>
        );
        let OutBtn = user_info.account ? <OutLogin /> : null;

        return (
            <div className="more-main">
                <div className="more-title">更多</div>
                {TopInfo}
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
                {OutBtn}
            </div>
        );
    }
}
const More = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoreUI);
export default More;

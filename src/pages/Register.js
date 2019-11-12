import React, { Component } from "react";
import { List, InputItem, Button, Toast } from "antd-mobile";
import { createForm } from "rc-form";
import api from "../api";
import "../styles/register.scss";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            btnLoading: false
        };
        this.goLoginPage = this.goLoginPage.bind(this);
        this.register = this.register.bind(this);
    }
    goLoginPage() {
        this.props.history.push("/kitchen/login");
    }
    register() {
        this.props.form.validateFields({ force: true }, error => {
            if (!error) {
                this.setState({
                    btnLoading: true
                });
                let params = this.props.form.getFieldsValue();
                params.gender = params.gender === "男" ? true : false;
                api.registerAccount(params).then(res => {
                    let { code, msg } = res.data;
                    if (code === 0) {
                        Toast.info("注册成功，将前往登录", 0.5, () => {
                            this.props.history.push("/kitchen/login");
                        });
                    } else {
                        Toast.info(msg, 1);
                    }
                    this.setState({
                        btnLoading: false
                    });
                });
            } else {
                Toast.info("请输入完整所需信息", 1);
            }
        });
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        let { btnLoading } = this.state;
        return (
            <div className="register-main">
                <div className="top-back" onClick={this.goLoginPage}>
                    <img src={require("../assets/images/fanhui.png")} alt="" />
                </div>
                <div className="register-wrap">
                    <h3 className="log-title">请注册</h3>
                    <div className="form-content">
                        <List>
                            <InputItem
                                {...getFieldProps("account", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入账号"
                                        }
                                    ]
                                })}
                                error={!!getFieldError("account")}
                                placeholder="请输入账号"
                            >
                                <img
                                    style={{
                                        margin: "0 auto",
                                        height: "22px",
                                        width: "22px"
                                    }}
                                    src={require("../assets/images/zhanghao.png")}
                                    alt=""
                                />
                            </InputItem>
                            <InputItem
                                {...getFieldProps("password", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入密码"
                                        }
                                    ]
                                })}
                                error={!!getFieldError("password")}
                                type="password"
                                placeholder="请输入密码"
                            >
                                <img
                                    style={{
                                        margin: "0 auto",
                                        height: "22px",
                                        width: "22px"
                                    }}
                                    src={require("../assets/images/mima.png")}
                                    alt=""
                                />
                            </InputItem>
                            <InputItem
                                {...getFieldProps("nickname", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入昵称"
                                        }
                                    ]
                                })}
                                error={!!getFieldError("nickname")}
                                placeholder="请输入昵称"
                            >
                                <img
                                    style={{
                                        margin: "0 auto",
                                        height: "22px",
                                        width: "22px"
                                    }}
                                    src={require("../assets/images/nicheng.png")}
                                    alt=""
                                />
                            </InputItem>
                            <InputItem
                                {...getFieldProps("phone", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入手机号"
                                        }
                                    ]
                                })}
                                error={!!getFieldError("phone")}
                                placeholder="请输入手机号"
                            >
                                <img
                                    style={{
                                        margin: "0 auto",
                                        height: "22px",
                                        width: "22px"
                                    }}
                                    src={require("../assets/images/shoujihao.png")}
                                    alt=""
                                />
                            </InputItem>
                            <InputItem
                                {...getFieldProps("gender", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入性别"
                                        }
                                    ]
                                })}
                                error={!!getFieldError("gender")}
                                placeholder="请输入性别（男或女）"
                            >
                                <img
                                    style={{
                                        margin: "0 auto",
                                        height: "22px",
                                        width: "22px"
                                    }}
                                    src={require("../assets/images/gender.png")}
                                    alt=""
                                />
                            </InputItem>
                        </List>
                        <div className="btn">
                            <Button
                                type="warning"
                                disabled={btnLoading}
                                loading={btnLoading}
                                onClick={this.register}
                            >
                                注册
                            </Button>
                        </div>
                        <div className="choose-fun">
                            <p>
                                <span onClick={this.goLoginPage}>返回登录</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="more-register">
                    <div className="register-box">
                        <img src={require("../assets/images/qq.png")} alt="" />
                    </div>
                    <div className="register-box">
                        <img
                            src={require("../assets/images/weixin.png")}
                            alt=""
                        />
                    </div>
                    <div className="register-box">
                        <img
                            src={require("../assets/images/weibo.png")}
                            alt=""
                        />
                    </div>
                    <div className="register-box">
                        <img
                            src={require("../assets/images/youxiang.png")}
                            alt=""
                        />
                    </div>
                </div>
                <div className="register-tip">
                    <p>
                        注册/登录即代表同意<em>《爱厨房用户协议》</em>
                    </p>
                </div>
            </div>
        );
    }
}
const LoginWrapper = createForm()(Register);
export default LoginWrapper;

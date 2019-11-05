import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import "../styles/find.scss";
export default class Find extends Component {
    constructor() {
        super();
        this.state = { value: "" };
    }
    onChange = value => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: "" });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    };
    render() {
        return (
            <div className="find-main">
                <div className="top-ipt">
                    <SearchBar
                        value={this.state.value}
                        placeholder="搜索菜谱"
                        onSubmit={value => console.log(value, "onSubmit")}
                        onClear={value => console.log(value, "onClear")}
                        onFocus={() => console.log("onFocus")}
                        onBlur={() => console.log("onBlur")}
                        onCancel={() => console.log("onCancel")}
                        showCancelButton={false}
                        onChange={this.onChange}
                    />
                </div>
                <div className="bot-warp">
                    <div className="class-box">
                        <h2 className="class-title">主食小吃</h2>
                        <div className="img-cont">
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">早餐</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">宝宝辅食</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">烘培</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">食疗</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">养生</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">一日三餐</h2>
                        <div className="img-cont">
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">早餐</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">午餐</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">晚餐</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">夜宵</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">主食小吃</h2>
                        <div className="img-cont">
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">点心</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">粥品</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">面食</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">米食</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">饮品</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">主食小吃</h2>
                        <div className="img-cont">
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">主食小吃</h2>
                        <div className="img-cont">
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">家常菜</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

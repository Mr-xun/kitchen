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
    goPage(type) {
        this.props.history.push({ pathname: "/kitchen/disheSystem/" + type });
    }
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
                        <h2 className="class-title">热门分类</h2>
                        <div className="img-cont">
                            <div
                                className="img-box"
                                onClick={() => {
                                    this.goPage("早餐");
                                }}
                            >
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">早餐</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("宝宝辅食");
                                }}>
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">宝宝辅食</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("烘培");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">烘培</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("食疗养生");
                                }}>
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">食疗养生</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">一日三餐</h2>
                        <div className="img-cont">
                            <div className="img-box"  onClick={() => {
                                    this.goPage("早餐");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">早餐</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("午餐");
                                }}>
                                <img
                                    src={require("../assets/images/find_2.jpg")}
                                    alt=""
                                />
                                <p className="img-name">午餐</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("晚餐");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">晚餐</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("夜宵");
                                }}>
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
                            <div className="img-box"  onClick={() => {
                                    this.goPage("点心");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">点心</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("粥品");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">粥品</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("面食");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">面食</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("米食");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">米食</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("饮品");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">饮品</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">时令美食</h2>
                        <div className="img-cont">
                            <div className="img-box"  onClick={() => {
                                    this.goPage("秋季美食");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">秋季美食</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("夏季美食");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">夏季美食</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("春季美食");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">春季美食</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("冬季美食");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">冬季美食</p>
                            </div>
                        </div>
                    </div>
                    <div className="class-box">
                        <h2 className="class-title">美容养生</h2>
                        <div className="img-cont">
                            <div className="img-box"  onClick={() => {
                                    this.goPage("补血益气");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">补血益气</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("健脾开胃");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">健脾开胃</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("清肺止咳");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">清肺止咳</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("温补驱寒");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">温补驱寒</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("食疗养生");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">食疗养生</p>
                            </div>
                            <div className="img-box"  onClick={() => {
                                    this.goPage("减脂健身");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">减脂健身</p>
                            </div><div className="img-box"  onClick={() => {
                                    this.goPage("美容养颜");
                                }}>
                                <img
                                    src={require("../assets/images/find_1.jpg")}
                                    alt=""
                                />
                                <p className="img-name">美容养颜</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

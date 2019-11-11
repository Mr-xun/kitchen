import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import "./index.scss";
export default class TopIpt extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
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
            <div className="top-ipt">
                <div className="lt-icon">
                    <img
                        style={{
                            width: "22px",
                            height: "22px"
                        }}
                        src={require("../../../assets/images/home.png")}
                        alt=""
                    />
                </div>
                <div className="cen-searh">
                    <SearchBar
                        value={this.state.value}
                        placeholder="搜索 菜谱/食材"
                        onSubmit={value => console.log(value, "onSubmit")}
                        onClear={value => console.log(value, "onClear")}
                        onFocus={() => console.log("onFocus")}
                        onBlur={() => console.log("onBlur")}
                        onCancel={() => console.log("onCancel")}
                        showCancelButton={false}
                        onChange={this.onChange}
                    />
                </div>
                <div className="rt-men">
                    <img
                        style={{
                            width: "22px",
                            height: "22px"
                        }}
                        src={require("../../../assets/images/kefu.png")}
                        alt=""
                    />
                </div>
            </div>
        );
    }
}

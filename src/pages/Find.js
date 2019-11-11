import React, { Component } from "react";
import { SearchBar, Toast } from "antd-mobile";

import { findData } from "../assets/js/findData";
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
            <div className="find-main">
                <div className="search-ipt">
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
            </div>
        );
    }
}

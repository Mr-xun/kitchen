import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import "./index.scss";
export default class SearchIpt extends Component {
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
        );
    }
}

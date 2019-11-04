import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
export default class SearchInp extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
    }
    componentDidMount() {}
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
        );
    }
}

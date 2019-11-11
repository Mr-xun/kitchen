import React, { Component } from "react";
import "./index.scss";
export default class ChooseType extends Component {
    constructor() {
        super();
        this.state = {};
    }
    openChange = type => {
        this.props.onOpenChange(type);
    };
    render() {
        return (
            <div className="choose-type">
                <div className="choose-box">
                    <div
                        className="type-box"
                        onClick={() => {
                            this.openChange("菜谱分类");
                        }}
                    >
                        <img
                            src={require("../../../assets/images/type_1.png")}
                            alt=""
                        />
                        <p>菜谱分类</p>
                    </div>
                    <div
                        className="type-box"
                        onClick={() => {
                            this.openChange("西餐分类");
                        }}
                    >
                        <img
                            src={require("../../../assets/images/type_2.png")}
                            alt=""
                        />
                        <p>西餐分类</p>
                    </div>
                    <div
                        className="type-box"
                        onClick={() => {
                            this.openChange("厨房用具");
                        }}
                    >
                        <img
                            src={require("../../../assets/images/type_3.png")}
                            alt=""
                        />
                        <p>厨房用具</p>
                    </div>
                    <div
                        className="type-box"
                        onClick={() => {
                            this.openChange("中西厨房");
                        }}
                    >
                        <img
                            src={require("../../../assets/images/type_4.png")}
                            alt=""
                        />
                        <p>中西厨房</p>
                    </div>
                </div>
            </div>
        );
    }
}

//菜系页面
import React, { Component } from "react";
import ShowDetail from "../components/DisheDetail/ShowDetail";
import api from "../api";

import "../styles/disheDetail.scss";
export default class DisheDetail extends Component {
    constructor() {
        super();
        this.state = {
            currenName: "",
            foodId: null,
            serveData: {}
        };
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.go(-1);
    }
    getDetails = id => {
        let params = {
            foodId: id
        };
        api.getStoryPictureLook(params).then(res => {
            let { code, data, msg } = res.data;
            if (code == 0) {
                data.tipList = [data.tip];
                this.setState({
                    serveData: data
                });
            }
        });
    };
    componentWillMount() {
        let name = this.props.match.params.name;
        let foodId = this.props.match.params.foodId;
        if (foodId) {
            this.getDetails(foodId);
        }
        this.setState({
            currenName: name,
            foodId: foodId
        });
    }
    render() {
        let { currenName, serveData } = this.state;
        return (
            <div className="disheDetail-main">
                <div className="top-title">
                    <div className="back-btn" onClick={this.goBack}>
                        <img
                            src={require("../assets/images/fanhui.png")}
                            alt=""
                        />
                    </div>
                    <h3 className="title">菜谱详情</h3>
                    <div className="control">
                        <img
                            src={require("../assets/images/shoucang_1.png")}
                            alt=""
                        />
                        <img
                            className="lanzi"
                            src={require("../assets/images/lanzi.png")}
                            alt=""
                        />
                    </div>
                </div>
                <ShowDetail name={currenName} serveData={serveData} />
            </div>
        );
    }
}

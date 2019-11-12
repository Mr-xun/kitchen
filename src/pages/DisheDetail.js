//菜系页面
import React, { Component } from "react";
import TopBack from "../components/DisheDetail/TopBack";
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
    }
    getDetails = id => {
        let params = {
            foodId: id
        };
        api.getStoryPictureLook(params).then(res => {
            let { code, data } = res.data;
            if (code === 0) {
                let tips = data.tip.replace(/\\n/g, "\n");
                data.tipList = [{ details: tips }];
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
                <TopBack />
                <ShowDetail name={currenName} serveData={serveData} />
            </div>
        );
    }
}

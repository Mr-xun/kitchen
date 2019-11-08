//菜系页面
import React, { Component } from "react";
import "../styles/disheSystem.scss";
import DisheSystemWrap from "../components/DisheSystem";
export default class DisheSystem extends Component {
    constructor() {
        super();
        this.state = {
            currenTitle: ""
        };
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.go(-1);
    }

    componentWillMount() {
        let title = this.props.match.params.title;
        this.setState({
            currenTitle: title
        });
    }
    render() {
        let { currenTitle } = this.state;
        return (
            <div className="disheSystem-main">
                <div className="top-title">
                    <div className="back-btn" onClick={this.goBack}>
                        <img
                            src={require("../assets/images/fanhui.png")}
                            alt=""
                        />
                    </div>
                    <h3 className="title">{currenTitle}</h3>
                </div>
                <DisheSystemWrap title={currenTitle} />
            </div>
        );
    }
}

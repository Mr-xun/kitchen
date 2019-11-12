//菜系页面
import React, { Component } from "react";
import "../styles/disheSystem.scss";
import TopBack from "../components/DisheSystem/TopBack";
import DisheSystemWrap from "../components/DisheSystem/Content";
export default class DisheSystem extends Component {
    constructor() {
        super();
        this.state = {
            currenTitle: ""
        };
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
                <TopBack title={currenTitle} />
                <DisheSystemWrap title={currenTitle} />
            </div>
        );
    }
}

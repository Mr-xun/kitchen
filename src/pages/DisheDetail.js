//菜系页面
import React, { Component } from "react";
import ShowDetail from "../components/DisheDetail/ShowDetail";
import "../styles/disheDetail.scss";
export default class DisheDetail extends Component {
    constructor() {
        super();
        this.state = {
            currenName: ""
        };
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.go(-1);
    }
    componentWillMount() {
        let name = this.props.match.params.name;
        this.setState({
            currenName: name
        });
    }
    render() {
        let { currenName } = this.state;
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
                        <img className='lanzi'
                            src={require("../assets/images/lanzi.png")}
                            alt=""
                        />
                    </div>
                </div>
                <ShowDetail name={currenName} />
            </div>
        );
    }
}

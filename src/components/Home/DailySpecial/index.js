import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import deilySpecialData from "../../../assets/js/dailySpecialData";
import "./index.scss";
class DailySpecial extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goDetailsPage = name => {
        this.props.history.push({ pathname: "/kitchen/disheDetail/" + name });
    };
    render() {
        return (
            <div className="day-recommend">
                <h4>每日推荐</h4>
                {deilySpecialData.dayList.map((item, index) => {
                    return (
                        <div
                            className="day-box"
                            key={index}
                            onClick={() => {
                                this.goDetailsPage(item.name);
                            }}
                        >
                            <img src={item.imageid} alt="" />
                            <div className="dish-info">
                                <h5 className="dish-name">{item.name}</h5>
                                <div className="bottom">
                                    <div className="author-box">
                                        <img src={item.user.imageid} alt="" />
                                        <span className="aut-name">
                                            {item.user.nickname}
                                        </span>
                                    </div>
                                    <div className="collect-box">
                                        <img
                                            style={{
                                                width: "12px",
                                                height: "12px"
                                            }}
                                            src={require("../../../assets/images/shoucang.png")}
                                            alt=""
                                        />
                                        <span>
                                            {item.infos.collectionCount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default withRouter(DailySpecial);

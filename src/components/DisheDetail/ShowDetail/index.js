import React, { Component } from "react";
import disheData from "../../../assets/js/disheDetailsData";
import "./index.scss";
export default class ShowDetail extends Component {
    constructor() {
        super();
        this.state = {
            serveData: {}
        };
    }
    render() {
        let detailData = { materialList: [], stepList: [] };
        if (this.props.serveData.foodName) {
            detailData = this.props.serveData;
        } else {
            detailData = disheData[this.props.name].list[0];
        }
        return (
            <div className="content">
                <div className="dishe-master-img">
                    <img src={detailData.imageid} alt="" />
                </div>
                <h3 className="dishe-name">
                    {detailData.name || detailData.foodName}
                </h3>
                {/* <p className="collect-info">
                    已有{22}人点赞<span>11人收藏</span>
                </p>
                <p className="origin-info">
                    {detailData.authorname}
                    <br />
                    来自网上厨房
                </p> */}
                <div className="dishe-explain">
                    <p className="symbol">“</p>
                    <p className="explain-cont">{detailData.description}</p>
                    <p className="symbol">”</p>
                </div>
                <div className="materials-wrap">
                    <h6>
                        材料<span>加入菜篮子</span>
                    </h6>
                    <ul className="materials-box">
                        {detailData.materialList.map((item, index) => {
                            return (
                                <li className="box-line" key={index}>
                                    <div className="left">{item.name}</div>
                                    <div className="right">{item.dosage}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="cooking-steps-wrap">
                    <h4>
                        <span>一</span>烹饪步骤<span>一</span>
                    </h4>
                    {detailData.stepList.map((step, index) => {
                        return (
                            <div className="step-box" key={index}>
                                <h4>{index + 1}</h4>
                                <div className="img-show">
                                    <img src={step.imageid} alt="" />
                                    <p>{step.details}</p>
                                </div>
                            </div>
                        );
                    })}
                    {detailData.tipList.map((tipItem, index) => {
                        return (
                            <div className="tip-content" key={index}>
                                <h4>
                                    <span>一</span>小贴士<span>一</span>
                                </h4>
                                <div className="small-tip">
                                    <p>{tipItem.details}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

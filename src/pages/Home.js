import React, { PureComponent as Component } from "react";
import "../styles/home.scss";
import { Icon, Carousel } from "antd-mobile";
import SearchInp from "../components/SearchInp";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                "AiyWuByWklrrUDlFignR",
                "TekJlZRVCjLFexlOCuWn",
                "IJOtIlfsYdTyaDTRVrLI"
            ],
            imgHeight: 176
        };
    }
    render() {
        return (
            <div className="home-main">
                <div className="top-ipt">
                    <div className="lt-icon">
                        <Icon type="ellipsis" />
                    </div>
                    <div className="cen-searh">
                        <SearchInp />
                    </div>
                    <div className="rt-men">
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../assets/images/kefu.png")}
                            alt=""
                        />
                    </div>
                </div>
                <div className="home-conent">
                    <div className="choose-type">
                        <div className="type-box">
                            <img
                                src={require("../assets/images/type_1.png")}
                                alt=""
                            />
                            <p>菜谱分类</p>
                        </div>
                        <div className="type-box">
                            <img
                                src={require("../assets/images/type_2.png")}
                                alt=""
                            />
                            <p>西餐分类</p>
                        </div>
                        <div className="type-box">
                            <img
                                src={require("../assets/images/type_3.png")}
                                alt=""
                            />
                            <p>厨房用具</p>
                        </div>
                        <div className="type-box">
                            <img
                                src={require("../assets/images/type_4.png")}
                                alt=""
                            />
                            <p>中西厨房</p>
                        </div>
                    </div>
                    <div className="carousel-wrap">
                        <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) =>
                                console.log(`slide from ${from} to ${to}`)
                            }
                            afterChange={index =>
                                console.log("slide to", index)
                            }
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{
                                        display: "inline-block",
                                        width: "100%",
                                        height: this.state.imgHeight
                                    }}
                                >
                                    <img
                                        src={require("../assets/images/dish_one.jpg")}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "4rem",
                                            verticalAlign: "top"
                                        }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(
                                                new Event("resize")
                                            );
                                            this.setState({
                                                imgHeight: "auto"
                                            });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </div>
                    <div className="day-recommend">
                        <h4>每日推荐</h4>
                        <div className="day-box">
                            <img
                                src={require("../assets/images/dish_one.jpg")}
                                alt=""
                            />
                            <div className="dish-info">
                                <h5 className="dish-name">宫保鸡丁</h5>
                                <div className="bottom">
                                    <div className="author-box">
                                        <img
                                            src={require("../assets/images/auto_1.jpg")}
                                            alt=""
                                        />
                                        <span className="aut-name">小家常</span>
                                    </div>
                                    <div className="collect-box">
                                        <Icon type="ellipsis" />
                                        <span>16.5W</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="day-box">
                            <img
                                src={require("../assets/images/dish_one.jpg")}
                                alt=""
                            />
                            <div className="dish-info">
                                <h5 className="dish-name">宫保鸡丁</h5>
                                <div className="bottom">
                                    <div className="author-box">
                                        <img
                                            src={require("../assets/images/auto_1.jpg")}
                                            alt=""
                                        />
                                        <span className="aut-name">小家常</span>
                                    </div>
                                    <div className="collect-box">
                                        <Icon type="ellipsis" />
                                        <span>16.5W</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

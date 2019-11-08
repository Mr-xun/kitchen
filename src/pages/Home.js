import React, { PureComponent as Component } from "react";
import "../styles/home.scss";
import { Drawer, List, Toast } from "antd-mobile";
import SearchInp from "../components/SearchInp";
import CarouselWrap from "../components/Home/CarouselWrap";
import DailySpecial from "../components/Home/DailySpecial";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                "AiyWuByWklrrUDlFignR",
                "TekJlZRVCjLFexlOCuWn",
                "IJOtIlfsYdTyaDTRVrLI"
            ],
            disheClassify: {
                ["菜谱分类"]: ["家常菜谱", "热门菜谱", "最新菜谱", "视频菜谱"],
                ["西餐分类"]: [
                    "法式菜肴",
                    "英式菜肴",
                    "意式菜肴",
                    "美式菜肴",
                    "俄式菜肴"
                ],
                ["厨房用具"]: [
                    "储藏用具",
                    "洗涤用具",
                    "调理用具",
                    "烹调用具",
                    "进餐用具"
                ],
                ["中西厨房"]: ["厨房刀具", "厨房炉灶", "中西厨设备"]
            },
            currentClassify: [],
            chooseClassify: "",
            imgHeight: 176,
            open: false
        };
    }
    goDetailsPage = name => {
        this.props.history.push({ pathname: "/kitchen/disheDetail/" + name });
    };
    goSystemPage = type => {
        if (type === "家常菜谱") {
            this.props.history.push({
                pathname: "/kitchen/disheSystem/" + type.slice(0, 3)
            });
        } else {
            Toast.info("该链接暂未开放", 0.5);
        }
    };
    onOpenChange = type => {
        let { disheClassify, chooseClassify } = this.state;
        this.setState({
            open: !this.state.open
        });
        if (type) {
            this.setState({
                currentClassify: disheClassify[type]
            });
        }
        if (
            type &&
            chooseClassify &&
            chooseClassify !== type &&
            this.state.open
        ) {
            setTimeout(() => {
                this.setState({
                    currentClassify: disheClassify[type],
                    open: !this.state.open
                });
            }, 0);
        }
        this.setState({
            chooseClassify: type
        });
    };
    render() {
        let { currentClassify } = this.state;
        const sidebar = (
            <List>
                {currentClassify.map((item, index) => {
                    return (
                        <List.Item
                            key={index}
                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                            multipleLine
                            onClick={() => {
                                this.goSystemPage(item);
                            }}
                        >
                            {item}
                        </List.Item>
                    );
                })}
            </List>
        );
        return (
            <div className="home-main">
                <div className="top-ipt">
                    <div className="lt-icon">
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../assets/images/home.png")}
                            alt=""
                        />
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
                        <div className="choose-box">
                            <div
                                className="type-box"
                                onClick={() => {
                                    this.onOpenChange("菜谱分类");
                                }}
                            >
                                <img
                                    src={require("../assets/images/type_1.png")}
                                    alt=""
                                />
                                <p>菜谱分类</p>
                            </div>
                            <div
                                className="type-box"
                                onClick={() => {
                                    this.onOpenChange("西餐分类");
                                }}
                            >
                                <img
                                    src={require("../assets/images/type_2.png")}
                                    alt=""
                                />
                                <p>西餐分类</p>
                            </div>
                            <div
                                className="type-box"
                                onClick={() => {
                                    this.onOpenChange("厨房用具");
                                }}
                            >
                                <img
                                    src={require("../assets/images/type_3.png")}
                                    alt=""
                                />
                                <p>厨房用具</p>
                            </div>
                            <div
                                className="type-box"
                                onClick={() => {
                                    this.onOpenChange("中西厨房");
                                }}
                            >
                                <img
                                    src={require("../assets/images/type_4.png")}
                                    alt=""
                                />
                                <p>中西厨房</p>
                            </div>
                        </div>
                    </div>

                    <div className="bot-content">
                        <Drawer
                            className="my-drawer"
                            enableDragHandle
                            contentStyle={{
                                color: "#A6A6A6",
                                textAlign: "center"
                            }}
                            sidebar={sidebar}
                            open={this.state.open}
                            onOpenChange={this.onOpenChange}
                        >
                            <CarouselWrap />
                            <DailySpecial />
                        </Drawer>
                    </div>
                </div>
            </div>
        );
    }
}

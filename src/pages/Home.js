import React, { PureComponent as Component } from "react";
import "../styles/home.scss";
import { Drawer, List, Toast } from "antd-mobile";
import TopIpt from "../components/Home/TopIpt";
import CarouselWrap from "../components/Home/CarouselWrap";
import DailySpecial from "../components/Home/DailySpecial";
import ChooseType from "../components/Home/ChooseType";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            disheClassify: {
                菜谱分类: ["家常菜谱", "热门菜谱", "最新菜谱", "视频菜谱"],
                西餐分类: [
                    "法式菜肴",
                    "英式菜肴",
                    "意式菜肴",
                    "美式菜肴",
                    "俄式菜肴"
                ],
                厨房用具: [
                    "储藏用具",
                    "洗涤用具",
                    "调理用具",
                    "烹调用具",
                    "进餐用具"
                ],
                中西厨房: ["厨房刀具", "厨房炉灶", "中西厨设备"]
            },
            currentClassify: [],
            chooseClassify: "",
            open: false
        };
    }
    goSystemPage = type => {
        if (type === "家常菜谱")
            this.props.history.push({
                pathname: "/kitchen/disheSystem/" + type.slice(0, 3)
            });
        else if (type === "热门菜谱")
            this.props.history.push({
                pathname: "/kitchen/disheSystem/周最热"
            });
        else if (type === "最新菜谱")
            this.props.history.push({
                pathname: "/kitchen/disheSystem/新鲜菜"
            });
        else Toast.info("该链接暂未开放", 0.5);
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
                <TopIpt />
                <div className="home-conent">
                    <ChooseType onOpenChange={this.onOpenChange}></ChooseType>
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

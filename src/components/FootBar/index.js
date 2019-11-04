import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
class FootBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "redTab",
            hidden: false,
            fullScreen: false
        };
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#f78a1f"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="Home"
                    icon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/home.png")}
                            alt=""
                        />
                    }
                    selectedIcon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/home_act.png")}
                            alt=""
                        />
                    }
                    selected={this.state.selectedTab === "blueTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "blueTab"
                        });
                        this.props.history.push("/home");
                    }}
                    data-seed="logId"
                ></TabBar.Item>
                <TabBar.Item
                    icon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/faxian.png")}
                            alt=""
                        />
                    }
                    selectedIcon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/faxian_act.png")}
                            alt=""
                        />
                    }
                    title="奇趣发现"
                    key="find"
                    selected={this.state.selectedTab === "redTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "redTab"
                        });
                    }}
                    data-seed="logId1"
                ></TabBar.Item>
                <TabBar.Item
                    icon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/chufang.png")}
                            alt=""
                        />
                    }
                    selectedIcon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/chufang_act.png")}
                            alt=""
                        />
                    }
                    title="厨房故事"
                    key="store"
                    selected={this.state.selectedTab === "greenTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "greenTab"
                        });
                        this.props.history.push("/kitchenStory");
                    }}
                ></TabBar.Item>
                <TabBar.Item
                    icon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/gengduo.png")}
                            alt=""
                        />
                    }
                    selectedIcon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/gengduo_act.png")}
                            alt=""
                        />
                    }
                    title="更多"
                    key="more"
                    selected={this.state.selectedTab === "yellowTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "yellowTab"
                        });
                    }}
                ></TabBar.Item>
            </TabBar>
        );
    }
}

export default withRouter(FootBar);

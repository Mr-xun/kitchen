import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
class FootBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: "/kitchen/home"
        };
    }
    componentWillMount() {
        let currentPath = this.props.location.pathname;
        this.setState({
            selectedTab: currentPath
        });
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
                    selected={this.state.selectedTab === "/kitchen/home"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "/kitchen/home"
                        });
                        this.props.history.push("/kitchen/home");
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
                    selected={this.state.selectedTab === "/kitchen/find"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "/kitchen/find"
                        });
                        this.props.history.push("/kitchen/find");
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
                    selected={
                        this.state.selectedTab === "/kitchen/kitchenStory"
                    }
                    onPress={() => {
                        this.setState({
                            selectedTab: "/kitchen/kitchenStory"
                        });
                        this.props.history.push("/kitchen/kitchenStory");
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
                    selected={this.state.selectedTab === "/kitchen/more"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "/kitchen/more"
                        });
                        this.props.history.push("/kitchen/more");
                    }}
                ></TabBar.Item>
            </TabBar>
        );
    }
}

export default withRouter(FootBar);

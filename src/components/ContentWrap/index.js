import React, { Component } from "react";
import FootBar from "../FootBar";
import "./index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Find from "../../pages/Find";
import More from "../../pages/More";
import KitchenStory from "../../pages/KitchenStory";
export default class ConentWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "redTab",
            hidden: false,
            fullScreen: false
        };
    }
    render() {
        return (
            <div className="main-app">
                <Router>
                    <div className="main">
                        <Switch>
                            <Route exact path="/home" component={Home}></Route>
                            <Route exact path="/find" component={Find}></Route>
                            <Route
                                exact
                                path="/kitchenStory"
                                component={KitchenStory}
                            ></Route>
                            <Route exact path="/more" component={More}></Route>
                        </Switch>
                    </div>
                    <div className="foot">
                        <FootBar />
                    </div>
                </Router>
            </div>
        );
    }
}

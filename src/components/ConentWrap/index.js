import React, { Component } from "react";
import FootBar from "../FootBar";
import "./index.scss";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "../../pages/Home";
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
                            <Redirect exact path="/" to="/home"></Redirect>
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

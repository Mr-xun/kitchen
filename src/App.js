import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import ConentWrap from "./components/ConentWrap";
export default class App extends Component {
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
            <div className="App">
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/home"
                            component={ConentWrap}
                        ></Route>
                        <Redirect
                            exact
                            path="/index.html"
                            to="/home"
                        ></Redirect>
                        <Redirect exact path="/" to="/home"></Redirect>
                    </Switch>
                </Router>
            </div>
        );
    }
}

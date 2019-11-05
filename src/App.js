import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import ContentWrap from "./components/ContentWrap";
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Route
                        exact
                        path="/kitchen/home"
                        component={ContentWrap}
                    ></Route>
                    <Route component={ContentWrap} />
                    <Redirect exact path="/" to="/kitchen/home"></Redirect>
                    <Redirect
                        exact
                        path="/index.html"
                        to="/kitchen/home"
                    ></Redirect>
                </Router>
            </div>
        );
    }
}

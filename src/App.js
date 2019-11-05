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
                    <Switch>
                        <Redirect
                            exact
                            path="/index.html"
                            to="/home"
                        ></Redirect>
                        <Redirect exact path="/" to="/home"></Redirect>
                        <Route component={ContentWrap} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

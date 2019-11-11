import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import ContentWrap from "./components/ContentWrap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DisheSystem from "./pages/DisheSystem";
import DisheDetail from "./pages/DisheDetail";
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/kitchen/home"
                            component={ContentWrap}
                        ></Route>
                        <Route
                            exact
                            path="/kitchen/login"
                            component={Login}
                        ></Route>
                        <Route
                            exact
                            path="/kitchen/register"
                            component={Register}
                        ></Route>
                        <Route
                            exact
                            path="/kitchen/disheSystem/:title"
                            component={DisheSystem}
                        ></Route>
                        <Route
                            exact
                            path="/kitchen/disheDetail/:name/:foodId"
                            component={DisheDetail}
                        ></Route>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/kitchen/home" />}
                        />
                        <Route
                            exact
                            path="/index.html"
                            render={() => <Redirect to="/kitchen/home" />}
                        />
                        <Route component={ContentWrap}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

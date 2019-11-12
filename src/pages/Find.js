import React, { Component } from "react";
import SearchIpt from "../components/Find/SearchIpt";
import Content from "../components/Find/Content";
import "../styles/find.scss";
export default class Find extends Component {
    render() {
        return (
            <div className="find-main">
                <SearchIpt />
                <Content />
            </div>
        );
    }
}

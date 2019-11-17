import React, { Component } from "react";
import { Toast } from "antd-mobile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import api from "../../../api";

import "./index.scss";

const mapStateToProps = (state, props) => {
  return {
    user_info: state.user_info
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
class ContentUI extends Component {
  goLogin = () => {
    this.props.history.push("/kitchen/login");
  };

  getHistoryData = () => {
    // const { user_info } = this.props;
    // if (user_info.account) {
      let params = { account: 'kim123' };
      api.getCollectionHistory(params).then(res => {
        let { code, data } = res.data;
        if (code === 0) {
          this.setState({
            listData: data
          });
        } else {
          Toast.info("暂无数据");
        }
      });
    // } else {
    //   Toast.info("请先登录", 0.3, () => {
    //     this.goLogin();
    //   });
    // }
  };
  componentDidMount() {
    this.getHistoryData();
  }
  render() {
    return (
      <div className="history-content">
        <div className="history-box">
          <div className="lt-img">
            <img src={require("../../../assets/images/dish_one.jpg")} alt="" />
          </div>
          <div className="rt-info">
            <p className="dishe-name"> 这是名字 </p>
            <p className="author-name"> 作者名字 </p>
            <p className="origin"> 来自数据源 </p>
          </div>
        </div>
        <div className="history-box">
          <div className="lt-img">
            <img src={require("../../../assets/images/dish_one.jpg")} alt="" />
          </div>
          <div className="rt-info">
            <p className="dishe-name"> 这是名字 </p>
            <p className="author-name"> 作者名字 </p>
            <p className="origin"> 来自数据源 </p>
          </div>
        </div>
        <div className="history-box">
          <div className="lt-img">
            <img src={require("../../../assets/images/dish_one.jpg")} alt="" />
          </div>
          <div className="rt-info">
            <p className="dishe-name"> 这是名字 </p>
            <p className="author-name"> 作者名字 </p>
            <p className="origin"> 来自数据源 </p>
          </div>
        </div>
        <div className="history-box">
          <div className="lt-img">
            <img src={require("../../../assets/images/dish_one.jpg")} alt="" />
          </div>
          <div className="rt-info">
            <p className="dishe-name"> 这是名字 </p>
            <p className="author-name"> 作者名字 </p>
            <p className="origin"> 来自数据源 </p>
          </div>
        </div>
      </div>
    );
  }
}
const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentUI);
export default withRouter(Content);

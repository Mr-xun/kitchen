import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Toast } from "antd-mobile";
import { connect } from "react-redux";
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
class TopBackUI extends Component {
  goBack = () => {
    this.props.history.go(-1);
  };
  addBasket = () => {
    // const { user_info } = this.props;
    // if (user_info.account) {
      let params = { account: 'kim123',foodId:this.props.match.params.foodId };
      api.collectionBasket(params).then(res => {
        let { code, data } = res.data;
        if (code === 0) {
          this.setState({
            listData: data
          });
        } else {
          Toast.info("添加失败");
        }
      });
    // } else {
    //   Toast.info("请先登录再进行操作", 0.5);
    // }
  };
  render() {
    return (
      <div className="top-title">
        <div className="back-btn" onClick={this.goBack}>
          <img src={require("../../../assets/images/fanhui.png")} alt="" />
        </div>
        <h3 className="title">菜谱详情</h3>
        <div className="control">
          {/* <img src={require("../../../assets/images/shoucang_1.png")} alt="" /> */}
          <img
            className="lanzi"
            onClick={this.addBasket}
            src={require("../../../assets/images/lanzi.png")}
            alt=""
          />
        </div>
      </div>
    );
  }
}
const TopBack = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBackUI);
export default withRouter(TopBack);

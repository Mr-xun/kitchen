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
class DishesLookUI extends Component {
  constructor() {
    super();
    this.state = {
      listData: []
    };
  }
  removeBasket = () => {};
  goLogin = () => {
    this.props.history.push("/kitchen/login");
  };
  getDishesData = () => {
    // const { user_info } = this.props;
    // if (user_info.account) {
    let params = { account: "kim123", flag: 1 };
    api.getBasketList(params).then(res => {
      let { code, data } = res.data;
      if (code === 0) {
        this.setState({
          listData: data.foodList
        });
      } else {
        Toast.info("暂无数据");
      }
    });
    // } else {
    //   Toast.info("请先登录", 0.3, () => {
    // 	this.goLogin();
    //   });
    // }
  };
  componentWillMount() {
    this.getDishesData();
  }
  render() {
    let { listData } = this.state;
    console.log(listData);
    return (
      <div className="dishes-content">
        {listData.map((item, index) => {
          return (
            <div className="dishes-box" key={index}>
              <div className="top-info">
                <div className="left-show">
                  <img src={item.imageid} alt="" />
                  <h5>{item.foodName}</h5>
                </div>
                <div className="rt-control">
                  <span onClick={this.removeBasket}>移除菜篮子</span>
                </div>
              </div>
              <ul className="dishes-list">
                {JSON.parse(item.materials).map((materialItem, _index) => {
                  return (
                    <li key={_index}>
                      <div className="name">{materialItem.name}</div>
                      <div className="quantity">{materialItem.dosage}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
const DishesLook = connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesLookUI);
export default withRouter(DishesLook);

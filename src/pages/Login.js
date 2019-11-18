import React, { Component } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { createForm } from 'rc-form';
import api from '../api';
import '../styles/login.scss';
const mapStateToProps = (state, props) => {
	return {};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		saveUser: (data) => {
			dispatch({
				type: 'USER_INFO',
				payload: data
			});
		}
	};
};
class LoginUI extends Component {
	constructor() {
		super();
		this.state = {
			btnLoading: false
		};
	}
	goMorePage = () => {
		this.props.history.push('/kitchen/more');
	};
	goRegisterPage = () => {
		this.props.history.push('/kitchen/register');
	};
	login = () => {
		this.props.form.validateFields({ force: true }, (error) => {
			if (!error) {
				this.setState({
					btnLoading: true
				});
				let params = this.props.form.getFieldsValue();
				api
					.loginAccount(params)
					.then((res) => {
						let { code, data, msg } = res.data;
						if (code === 0) {
							Toast.info('登录成功', 0.5, () => {
								this.props.saveUser(data);
								this.props.history.push('/kitchen/more');
							});
						} else {
							Toast.info(msg, 1);
						}
						this.setState({
							btnLoading: false
						});
					})
					.catch((err) => {
						this.setState({
							btnLoading: false
						});
						Toast.info('服务异常，登录失败', 1);
					});
			} else {
				Toast.info('请输入完整所需信息', 1);
			}
		});
	};
	render() {
		const { getFieldProps, getFieldError } = this.props.form;
		let { btnLoading } = this.state;
		return (
			<div className="login-main">
				<div className="top-back" onClick={this.goMorePage}>
					<img src={require('../assets/images/fanhui.png')} alt="" />
				</div>
				<div className="login-wrap">
					<h3 className="log-title">请登录</h3>
					<div className="form-content">
						<List>
							<InputItem
								{...getFieldProps('account', {
									rules: [
										{
											required: true,
											message: '请输入账号'
										}
									]
								})}
								error={!!getFieldError('account')}
								placeholder="请输入账号"
							>
								<img
									style={{
										margin: '0 auto',
										height: '22px',
										width: '22px'
									}}
									src={require('../assets/images/zhanghao.png')}
									alt=""
								/>
							</InputItem>
							<InputItem
								{...getFieldProps('password', {
									rules: [
										{
											required: true,
											message: '请输入密码'
										}
									]
								})}
								error={!!getFieldError('password')}
								type="password"
								placeholder="请输入密码"
							>
								<img
									style={{
										margin: '0 auto',
										height: '22px',
										width: '22px'
									}}
									src={require('../assets/images/mima.png')}
									alt=""
								/>
							</InputItem>
						</List>
						<div className="btn">
							<Button type="warning" disabled={btnLoading} loading={btnLoading} onClick={this.login}>
								登录
							</Button>
						</div>
						<div className="choose-fun">
							<p>
								<span onClick={this.goRegisterPage}>注册</span>
								<em>|</em>
								<span>忘记密码？</span>
							</p>
						</div>
					</div>
				</div>
				<div className="more-login">
					<div className="login-box">
						<img src={require('../assets/images/qq.png')} alt="" />
					</div>
					<div className="login-box">
						<img src={require('../assets/images/weixin.png')} alt="" />
					</div>
					<div className="login-box">
						<img src={require('../assets/images/weibo.png')} alt="" />
					</div>
					<div className="login-box">
						<img src={require('../assets/images/youxiang.png')} alt="" />
					</div>
				</div>
				<div className="login-tip">
					<p>
						注册/登录即代表同意<em>《爱厨房用户协议》</em>
					</p>
				</div>
			</div>
		);
	}
}
const LoginWrapper = createForm()(connect(mapStateToProps, mapDispatchToProps)(LoginUI));
export default LoginWrapper;

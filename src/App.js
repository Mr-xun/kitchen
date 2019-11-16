import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ContentWrap from './components/ContentWrap';
import Login from './pages/Login';
import Register from './pages/Register';
import DisheSystem from './pages/DisheSystem';
import DisheDetail from './pages/DisheDetail';
import History from './pages/History';
import ShopBasket from './pages/ShopBasket';
import Collect from './pages/Collect';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/kitchen/home" component={ContentWrap} />
						<Route exact path="/kitchen/login" component={Login} />
						<Route exact path="/kitchen/register" component={Register} />
						<Route exact path="/kitchen/disheSystem/:title" component={DisheSystem} />
						<Route exact path="/kitchen/disheDetail/:name/:foodId" component={DisheDetail} />
						<Route exact path="/kitchen/history" component={History} />
						<Route exact path="/kitchen/shopBasket" component={ShopBasket} />
						<Route exact path="/kitchen/collect" component={Collect} />
						<Route exact path="/" render={() => <Redirect to="/kitchen/home" />} />
						<Route exact path="/index.html" render={() => <Redirect to="/kitchen/home" />} />
						<Route component={ContentWrap} />
					</Switch>
				</Router>
			</div>
		);
	}
}

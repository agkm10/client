import React from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBarTop from '../Nav/index'
import { connect } from "react-redux";
import { BrowserRouter,
          Route,
          Link,
          Redirect,
          withRouter } from "react-router-dom";

import "./App.css";
import Login from '../LoginPage/index';
import Client from '../Client/index';
import Messages from '../Messages/index';
import {login} from '../../ducks/loginDuck'




export function App(props) {
  console.log('isAuth', props.isAuth)
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact component={Login}/>
				<Route path="/client" component={Client}/>
        <Route path="/messages" component={Messages}/>
			</div>
		</BrowserRouter>

	);
}



injectTapEventPlugin();


function PrivateRoute(props) {
  console.log('privateRoute', props.isAuth)
  return <Route path="/loggedin" component={Client}/>
}


function mapStateToProps( state) {
	return { isAuth: state.loginDuck.isAuth }
}
export default connect (mapStateToProps, {login})(App);

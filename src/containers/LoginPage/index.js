import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {login} from '../../ducks/loginDuck'
import "./Login.scss";


function Login(props) {

	return (
		<main className="login-landing">
			<div onClick={() => props.login()}>
			<Link to="/client">Login</Link>
			</div>
			<h1> LoginPage is working </h1>
			<p> This is the login page linked from the app through BrowserRouter</p>

		</main>
	);
}

function mapStateToProps(state) {
	return { isAuth: state.loginDuck.isAuth };
}
export default connect( mapStateToProps, {login})( Login );

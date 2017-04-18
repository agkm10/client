import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InputTile from '../../components/InputTile/index'
import "./Client.scss";
import {login} from '../../ducks/loginDuck'
import {logout} from '../../ducks/loginDuck'
import NavBarTop from '../Nav/index'

export function Client(props) {

	function checkAuth() {
		if (props.isAuth) {
			return (
				<div>

					<NavBarTop/>
					<h3>You are logged in</h3>
					<InputTile/>
					<h1>Progress Bar</h1>
				</div>);
		} else {
				return <h3>You are not logged in</h3>
		}
	}

	return (
		<main className="landing">
			{checkAuth()}
		</main>
	);
}


function mapStateToProps(state) {
	return { isAuth: state.loginDuck.isAuth };
}
export default connect( mapStateToProps, {login, logout})( Client );

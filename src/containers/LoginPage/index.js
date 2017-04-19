import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {login} from '../../ducks/loginDuck'
import "./Login.scss";
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

function Login(props) {

	return (
		<main className="login-landing">

			<br/>
			<div className="login-container">

				<div className="login-form-inputs">
					<h2>Login</h2>
				 <TextField
	      hintText="Email"
	      floatingLabelText="Username"
	    /><br />
				<TextField
	      hintText="Password"
	      floatingLabelText="Password"
	      type="password"
	    />
			<br/>
			<Link to="/client">
			<FlatButton onClick={() => props.login()} label="LOGIN" primary={true} />
		  </Link>
			</div>
			</div>


		</main>
	);
}

function mapStateToProps(state) {
	return { isAuth: state.loginDuck.isAuth };
}
export default connect( mapStateToProps, {login})( Login );

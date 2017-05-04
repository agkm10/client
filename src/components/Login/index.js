import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import {  Field, reduxForm  } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid';
//EXPORTED FUNCTIONS
import { login } from '../../ducks/authDuck';
//MATERIAL UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
//CSS
import './Login.css';

const renderTextField = ( { input, label, meta: { touched, error }, ...custom  } ) => (
	<TextField
	    hintText={ label }
	    floatingLabelText={ label }
	    errorText={ touched && error }
	    { ...input }
	    { ...custom }
	/>
)

class LoginForm extends Component {
    constructor(){
        super();

        this.state = {
            email: "" ,
            password:""
        }
    }

    handleSubmit( e ) {
        this.props.login( this.state )
        e.preventDefault();
    }

    handleChange( field, e ) {
        this.setState( { [ field ] : e.target.value } )
    }

    render() {

        const{
            isAuthenticated,
            loadingUser,
            pristine,
            loginError
        } =  this.props

        const {
            password
        } = this.state

        const loginInput = {
            fontSize: 20,
        }
        const pwdDiv = {
            marginBottom: 30,
            marginTop:-30
        }
        const inputDiv = {
            marginBottom: 30
        }

        if( isAuthenticated ){
            return(
                <Redirect to='/client'/>
            )
        }

        return (
            <form onSubmit={ this.handleSubmit.bind( this ) } className="login-landing" >
                <Grid fluid>
                    <div className="login-container">
                        <Row>
                            <Col type="row" sm={ 12 } md={ 3 } className="login-form-inputs">
                                <Row>
                                    <Col sm={ 12 }></Col>
                                </Row>
                                <Field
                                    label="Username"
                                    component={ renderTextField }
                                    fullWidth={ true }
                                    name="email"
                                    style={ inputDiv }
                                    inputStyle={ loginInput }
                                    onChange={ this.handleChange.bind( this, 'email' ) }
                                />
                                <br/>
                                <Field
                                    label="Password"
                                    type="password"
                                    name="password"
                                    fullWidth={ true }
                                    component={ renderTextField }
                                    className="login-style"
                                    style={ pwdDiv }
                                    inputStyle={ loginInput }
                                    onChange={ this.handleChange.bind( this, 'password' ) }
                                />
                                <br/>
                                <Row>
                                    <RaisedButton
                                        type="submit"
                                        label="LOGIN"
                                        fullWidth={ true }
                                        disabled={ loadingUser || pristine || !password }
                                        primary={ true }
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Grid>
                { ( loadingUser )?<CircularProgress size={ 80 } thickness={ 5 } />:null }
                { ( loginError )? <div>Username/Password is Incorrect</div>:null }
            </form>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = [ 'email', 'password' ]
    requiredFields.forEach( field => {
        if ( !values[ field ] ) {
            errors[ field ] = 'Required'
        }
    } )
    if ( values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const form = reduxForm( {
    form: 'loginForm',
    validate
} );

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authDuck.isAuthenticated,
        loadingUser: state.authDuck.loadingUser,
        loginError: state.authDuck.loginError
    }
}

export default withRouter( connect(  mapStateToProps, { login } )(  form( LoginForm )  ) )

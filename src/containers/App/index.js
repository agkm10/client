import React, { Component } from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//CONTAINERS
import LoginPage from '../LoginPage/index';
import Client from '../Client/index';
import RoomsContainer from '../RoomsContainer/index';
//EXPORTED FUNCTIONS
import { checkUserAuth } from '../../ducks/authDuck';
//CSS
import "./App.css";

class App extends Component {

    render() {

      const { isAuthenticated } = this.props

      const PrivateRoute = ( { component: Component, ...rest} ) => (
          <Route {...rest} render={ props => (
              isAuthenticated?
              <Component { ...props }/>
              : <Redirect to="/"/>
          )}/>
      )

      return (
          <div className="app">
              <div className="top-bar-right">
                  <Switch>
                      <Route exact path="/" component={ LoginPage }/>
                      <PrivateRoute path="/client" component={ Client }/>
                      <PrivateRoute path="/messages" component={ RoomsContainer }/>
                  </Switch>
              </div>
          </div>
      );
    }
}

injectTapEventPlugin();

const mapStateToProps = ( state => {
    return {
        isAuthenticated: state.authDuck.isAuthenticated
    }
});

export default connect( mapStateToProps, { checkUserAuth } )( App );

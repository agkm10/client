import React from "react";
import {connect} from "react-redux";
import InputTile from '../../components/InputTile/index'
import "./Client.scss";
import {login} from '../../ducks/loginDuck'
import {logout} from '../../ducks/loginDuck'
import NavBarTop from '../../components/Nav/index'
import StatusBar from '../../components/StatusBar/index';

export function Client(props) {

  function checkAuth() {
    // if (props.isAuth) {
    return (
      <div>

        <NavBarTop/>

        <InputTile/>

        <StatusBar/>

      </div>
    );
    // } else {
    // 		return <h3>You are not logged in</h3>
    // }
  }

  return (
    <main className="landing">
      {checkAuth()}
    </main>
  );
}

function mapStateToProps(state) {
  return {isAuth: state.authDuck.isAuthenticated};
}
export default connect(mapStateToProps, {login, logout})(Client);
